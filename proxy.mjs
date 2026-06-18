import http from 'http';
import fs from 'fs';
import path from 'path';

const KEY = "8ae3463d582d4550a85dfe8a8c65bb2f.VPllmnseGvAm4CVk";
const CODING = "https://api.z.ai/api/coding/paas/v4";
const PORT = 4567;
const LOG = path.join(process.env.HOME, '.local/share/glm-proxy/usage.json');

let usage = { input: 0, output: 0, reasoning: 0, requests: 0, toolCalls: 0 };
try { usage = JSON.parse(fs.readFileSync(LOG, 'utf8')); } catch {}
function save() { try { fs.writeFileSync(LOG, JSON.stringify(usage, null, 2)); } catch {} }
function fmt(n) { return n > 1e6 ? (n/1e6).toFixed(2)+'M' : n > 1e3 ? (n/1e3).toFixed(1)+'K' : ''+n; }

const CLAUDE_TO_GLM = {
  'claude-opus-4-8': 'glm-5.2', 'claude-opus-4-7': 'glm-5.2',
  'claude-sonnet-4-6': 'glm-5.1', 'claude-haiku-4-5': 'glm-5-turbo',
  'glm-5.2': 'glm-5.2', 'glm-5.1': 'glm-5.1', 'glm-5': 'glm-5',
  'glm-5-turbo': 'glm-5-turbo', 'glm-4.5': 'glm-4.5', 'glm-4.5-air': 'glm-4.5-air',
};

// Convert Anthropic messages → GLM messages (preserving tool structure)
function convertMessages(anthropicMsgs, system) {
  const glmMsgs = [];

  if (system) {
    glmMsgs.push({ role: 'system', content: system });
  }

  for (const msg of anthropicMsgs) {
    // Simple string content
    if (typeof msg.content === 'string') {
      glmMsgs.push({ role: msg.role, content: msg.content.replace(/\0/g, '') });
      continue;
    }

    // Array content — extract text, tool_calls, tool_results
    const textParts = [];
    const toolCalls = [];
    const toolResults = [];

    for (const block of (msg.content || [])) {
      if (block.type === 'text') {
        textParts.push(block.text || '');
      } else if (block.type === 'thinking') {
        // Skip thinking blocks — GLM generates its own reasoning
      } else if (block.type === 'tool_use') {
        toolCalls.push({
          id: block.id,
          type: 'function',
          function: {
            name: block.name,
            arguments: typeof block.input === 'string' ? block.input : JSON.stringify(block.input || {}),
          },
        });
      } else if (block.type === 'tool_result') {
        const resultText = Array.isArray(block.content)
          ? block.content.map(c => c.text || '').join('\n')
          : String(block.content || '');
        toolResults.push({ tool_call_id: block.tool_use_id, content: resultText });
      }
    }

    // Build the GLM message
    if (msg.role === 'assistant') {
      const gmsg = { role: 'assistant', content: textParts.join('\n').replace(/\0/g, '') };
      if (toolCalls.length) gmsg.tool_calls = toolCalls;
      glmMsgs.push(gmsg);
    } else if (toolResults.length) {
      // User message with tool results → GLM expects separate tool messages
      for (const tr of toolResults) {
        glmMsgs.push({ role: 'tool', tool_call_id: tr.tool_call_id, content: tr.content });
      }
      if (textParts.length) {
        glmMsgs.push({ role: 'user', content: textParts.join('\n') });
      }
    } else {
      glmMsgs.push({ role: msg.role, content: textParts.join('\n').replace(/\0/g, '') || ' ' });
    }
  }

  return glmMsgs;
}

// Convert Anthropic tools → GLM tools
function convertTools(anthropicTools) {
  if (!anthropicTools || !anthropicTools.length) return null;
  return anthropicTools.map(t => ({
    type: 'function',
    function: {
      name: t.name,
      description: (t.description || '').slice(0, 500),
      parameters: t.input_schema || { type: 'object', properties: {} },
    },
  }));
}

// Convert GLM tool_calls → Anthropic tool_use blocks
function convertToolCalls(glmToolCalls) {
  if (!glmToolCalls) return [];
  return glmToolCalls.map(tc => ({
    type: 'tool_use',
    id: tc.id || `call_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
    name: tc.function?.name,
    input: (() => { try { return JSON.parse(tc.function?.arguments || '{}'); } catch { return {}; } })(),
  }));
}

async function callGLM(model, messages, maxTokens, tools) {
  model = (CLAUDE_TO_GLM[model] || 'glm-5.2').replace(/\0/g, '');
  const fallbackModels = {
    'glm-5.2': ['glm-5.2', 'glm-5.1', 'glm-5-turbo'],
    'glm-5.1': ['glm-5.1', 'glm-5-turbo'],
    'glm-5': ['glm-5', 'glm-5.1', 'glm-5-turbo'],
    'glm-5-turbo': ['glm-5-turbo'],
    'glm-4.5': ['glm-4.5', 'glm-4.5-air'],
    'glm-4.5-air': ['glm-4.5-air'],
  };
  const modelsToTry = fallbackModels[model] || [model, 'glm-5.1', 'glm-5-turbo'];
  let lastError = null;

  for (const candidateModel of modelsToTry) {
    const body = {
      model: candidateModel,
      messages,
      max_tokens: Math.max(maxTokens || 16384, 16384),
      stream: false,
    };
    if (tools) body.tools = tools;

    console.log(`  → GLM ${candidateModel} | ${messages.length} msgs | ${tools?.length || 0} tools | ${JSON.stringify(body).length} bytes`);

    try {
      const resp = await fetch(`${CODING}/chat/completions`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const text = await resp.text();

      // SSE fallback
      if (text.trim().startsWith('data:')) {
        let content = '', reasoning = '';
        const toolCalls = [];
        for (const line of text.split('\n')) {
          if (line.startsWith('data:') && !line.includes('[DONE]')) {
            try {
              const j = JSON.parse(line.slice(5).trim());
              const d = j.choices?.[0]?.delta;
              if (d?.content) content += d.content;
              if (d?.reasoning_content) reasoning += d.reasoning_content;
              if (d?.tool_calls) toolCalls.push(...d.tool_calls);
            } catch {}
          }
        }
        return { content, reasoning, toolCalls, usage: { prompt_tokens: 0, completion_tokens: 0 }, model: candidateModel };
      }

      const data = JSON.parse(text);
      if (data.error) {
        const message = data.error.message || JSON.stringify(data.error);
        throw new Error('Z.ai: ' + message);
      }

      const choice = data.choices[0];
      const msg = choice.message;
      const reasoning = msg.reasoning_content || '';
      const content = msg.content || '';

      if (candidateModel !== model) console.log(`  ↳ fallback succeeded on ${candidateModel}`);
      if (reasoning) console.log(`  💭 THINKING (${reasoning.length} chars): "${reasoning.slice(0, 120)}..."`);
      if (content) console.log(`  ✍️  RESPONSE (${content.length} chars): "${content.slice(0, 120)}"`);
      if (msg.tool_calls?.length) console.log(`  🔧 TOOLS: ${msg.tool_calls.map(tc => tc.function?.name).join(', ')}`);

      return {
        content,
        reasoning,
        toolCalls: msg.tool_calls || [],
        usage: data.usage || { prompt_tokens: 0, completion_tokens: 0 },
        finishReason: choice.finish_reason,
        model: candidateModel,
      };
    } catch (err) {
      lastError = err;
      const message = err?.message || String(err);
      const retryable = /temporarily overloaded|network error|fetch failed|try again/i.test(message);
      const hasFallback = candidateModel !== modelsToTry[modelsToTry.length - 1];
      if (!retryable || !hasFallback) break;
      console.log(`  ↳ ${candidateModel} failed (${message}); trying fallback...`);
    }
  }

  throw lastError || new Error('Z.ai: request failed');
}

// ─── Server ───
http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Methods': '*' });
    return res.end();
  }

  let raw = '';
  for await (const c of req) raw += c;

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', model: 'glm-5.2', usage }));
  }
  if (req.url === '/usage') {
    const total = usage.input + usage.output + usage.reasoning;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ...usage, total }, null, 2));
  }
  if (req.url === '/v1/models') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ object: 'list', data: [
      { id: 'glm-5.2', object: 'model', owned_by: 'z-ai' },
      { id: 'glm-5.1', object: 'model', owned_by: 'z-ai' },
      { id: 'glm-5-turbo', object: 'model', owned_by: 'z-ai' },
      { id: 'glm-4.5-air', object: 'model', owned_by: 'z-ai' },
    ]}));
  }
  if (req.url.includes('count_tokens')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ input_tokens: Math.ceil(raw.length / 4) }));
  }

  try {
    const data = JSON.parse(raw);
    const model = (data.model || 'glm-5.2').replace(/\0/g, '').trim();

    // Build system prompt
    let system = '';
    if (data.system) {
      system = typeof data.system === 'string' ? data.system :
        Array.isArray(data.system) ? data.system.map(s => s.text || '').join('\n') : JSON.stringify(data.system);
      system = system.replace(/\0/g, '');
    }

    // Convert messages and tools
    const glmMessages = convertMessages(data.messages || [], system);
    const glmTools = convertTools(data.tools);

    const wantStream = data.stream === true;
    const maxTokens = data.max_tokens || 32768;

    const result = await callGLM(model, glmMessages, maxTokens, glmTools);

    // Stats
    const inTok = result.usage.prompt_tokens || Math.ceil(JSON.stringify(glmMessages).length / 4);
    const outTok = result.usage.completion_tokens || Math.ceil((result.content.length + result.reasoning.length) / 4);
    const reasonTok = result.usage.completion_tokens_details?.reasoning_tokens || 0;
    usage.input += inTok;
    usage.output += outTok;
    usage.reasoning += reasonTok;
    usage.requests += 1;
    usage.toolCalls += result.toolCalls?.length || 0;
    save();

    const ts = new Date().toLocaleTimeString('en-US', { hour12: false });
    console.log(`[${ts}] #${usage.requests} | in:${fmt(inTok)} out:${fmt(outTok)} think:${fmt(reasonTok)} tools:${result.toolCalls?.length || 0} | Σ:${fmt(usage.input + usage.output + usage.reasoning)}`);

    // Build content blocks
    const toolUseBlocks = convertToolCalls(result.toolCalls);
    const stopReason = toolUseBlocks.length ? 'tool_use' : 'end_turn';

    // ─── STREAMING ───
    if (wantStream) {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      });

      const id = 'msg_glm_' + Date.now();
      let blockIdx = 0;

      res.write(`event: message_start\ndata: ${JSON.stringify({
        type: 'message_start',
        message: { id, type: 'message', role: 'assistant', model: 'glm-5.2', content: [], stop_reason: null, usage: { input_tokens: inTok, output_tokens: 0 } }
      })}\n\n`);

      // Thinking block
      if (result.reasoning) {
        res.write(`event: content_block_start\ndata: ${JSON.stringify({
          type: 'content_block_start', index: blockIdx, content_block: { type: 'thinking', thinking: '' }
        })}\n\n`);
        const rt = result.reasoning;
        for (let i = 0; i < rt.length; i += 80) {
          res.write(`event: content_block_delta\ndata: ${JSON.stringify({
            type: 'content_block_delta', index: blockIdx, delta: { type: 'thinking_delta', thinking: rt.slice(i, i + 80) }
          })}\n\n`);
        }
        res.write(`event: content_block_stop\ndata: ${JSON.stringify({ type: 'content_block_stop', index: blockIdx })}\n\n`);
        blockIdx++;
      }

      // Text block
      if (result.content) {
        res.write(`event: content_block_start\ndata: ${JSON.stringify({
          type: 'content_block_start', index: blockIdx, content_block: { type: 'text', text: '' }
        })}\n\n`);
        const ct = result.content;
        for (let i = 0; i < ct.length; i += 80) {
          res.write(`event: content_block_delta\ndata: ${JSON.stringify({
            type: 'content_block_delta', index: blockIdx, delta: { type: 'text_delta', text: ct.slice(i, i + 80) }
          })}\n\n`);
        }
        res.write(`event: content_block_stop\ndata: ${JSON.stringify({ type: 'content_block_stop', index: blockIdx })}\n\n`);
        blockIdx++;
      }

      // Tool use blocks
      for (const tu of toolUseBlocks) {
        res.write(`event: content_block_start\ndata: ${JSON.stringify({
          type: 'content_block_start', index: blockIdx,
          content_block: { type: 'tool_use', id: tu.id, name: tu.name, input: {} }
        })}\n\n`);
        res.write(`event: content_block_delta\ndata: ${JSON.stringify({
          type: 'content_block_delta', index: blockIdx,
          delta: { type: 'input_json_delta', partial_json: JSON.stringify(tu.input) }
        })}\n\n`);
        res.write(`event: content_block_stop\ndata: ${JSON.stringify({ type: 'content_block_stop', index: blockIdx })}\n\n`);
        blockIdx++;
      }

      res.write(`event: message_delta\ndata: ${JSON.stringify({
        type: 'message_delta', delta: { stop_reason: stopReason, stop_sequence: null }, usage: { output_tokens: outTok }
      })}\n\n`);
      res.write(`event: message_stop\ndata: ${JSON.stringify({ type: 'message_stop' })}\n\n`);
      return res.end();
    }

    // ─── NON-STREAMING ───
    const contentBlocks = [];
    if (result.reasoning) contentBlocks.push({ type: 'thinking', thinking: result.reasoning });
    if (result.content) contentBlocks.push({ type: 'text', text: result.content });
    contentBlocks.push(...toolUseBlocks);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      id: 'msg_glm_' + Date.now(),
      type: 'message',
      role: 'assistant',
      model: 'glm-5.2',
      content: contentBlocks,
      stop_reason: stopReason,
      stop_sequence: null,
      usage: { input_tokens: inTok, output_tokens: outTok },
    }));

  } catch (err) {
    console.error('ERROR:', err.message);
    console.error(err.stack);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ type: 'error', error: { type: 'api_error', message: err.message } }));
  }

}).listen(PORT, '127.0.0.1', () => {
  const total = usage.input + usage.output + usage.reasoning;
  console.log('');
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║  GLM-5.2 PROXY v8 — FULL TOOL USE + THINKING           ║');
  console.log('║  http://127.0.0.1:' + PORT + '                              ║');
  console.log('║  Thinking: VISIBLE | Tools: READ/WRITE/BASH/EDIT     ║');
  console.log('║  Tokens: ' + fmt(total).padEnd(8) + ' | Reqs: ' + String(usage.requests).padEnd(6) + ' | Tools: ' + String(usage.toolCalls).padEnd(6) + ' ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
  console.log('');
});
