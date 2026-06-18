# GLM Claude Code Environment

Complete setup to run Claude Code with GLM-5.2 instead of Anthropic.
No Anthropic account needed. Zero cost. Full tool use + thinking.

## What this does

- Runs a local proxy (`localhost:4567`) that translates Claude Code's Anthropic API calls to GLM-5.2 (Zhipu AI)
- Full support: streaming, tool use, thinking blocks, multi-turn conversations
- Token usage tracking at `~/.local/share/glm-proxy/usage.json`
- Check usage: `curl -s http://127.0.0.1:4567/usage`

## Prerequisites

1. **Node.js** (v18+)
2. **Claude Code CLI** — install from `npm install -g @anthropic-ai/claude-code`
3. **jq** — for the RTK token optimizer hook: `brew install jq`
4. **rtk** (optional, for token savings) — `cargo install rtk-claude`

## Setup (one command)

```bash
git clone https://github.com/Jumpsy/glm-claude-env.git
cd glm-claude-env
./install.sh
```

This will:
1. Copy the proxy script to `~/.local/share/glm-proxy/proxy.mjs`
2. Add the GLM proxy environment variables to your shell profile
3. Copy the RTK hook for token optimization
4. Start the proxy

Then just run `claude` and it uses GLM-5.2 automatically.

## Configuration

### The GLM API Key
The proxy uses a Zhipu AI (Z.ai) API key hardcoded in the proxy script.
This is a free coding API key. Replace it with your own if needed at:
`~/.local/share/glm-proxy/proxy.mjs` line 4 (`KEY = "..."`)

### Environment Variables (set by install.sh)
```bash
export ANTHROPIC_API_KEY="glm-proxy-no-account-needed"
export ANTHROPIC_BASE_URL="http://127.0.0.1:4567"
export CLAUDE_MODEL="glm-5.2"
export CLAUDE_CODE_MAX_OUTPUT_TOKENS=65536
export DISABLE_ANTHROPIC_AUTH=1
```

### Model Mapping
Claude Code thinks it's talking to Anthropic. The proxy maps:
- `claude-opus-4-8` → `glm-5.2`
- `claude-sonnet-4-6` → `glm-5.1`
- `claude-haiku-4-5` → `glm-5-turbo`

### Skills
The `skills/` directory contains the custom Claude Code skills.
Copy them to `~/.claude/skills/` to install.

## Files

- `proxy.mjs` — the GLM-5.2 translation proxy (371 lines)
- `install.sh` — one-command setup
- `zshrc-snippet.sh` — shell profile additions
- `skills/` — Claude Code skills (avengers, claude-lead, impeccable, etc.)
- `hooks/` — RTK token optimizer hook
- `CLAUDE.md` — global Claude Code instructions

## Verify it works

```bash
# Proxy running?
curl http://127.0.0.1:4567/health

# Token usage?
curl http://127.0.0.1:4567/usage

# Start Claude Code
claude
```

## Troubleshooting

**Proxy won't start:** Check Node.js is installed: `node --version`
**Claude Code shows errors:** Make sure env vars are set: `echo $ANTHROPIC_BASE_URL`
**No tool use:** The proxy needs the full 371-line version, not a simplified one
**Rate limited:** GLM's free tier has limits. Check `curl http://127.0.0.1:4567/usage`
