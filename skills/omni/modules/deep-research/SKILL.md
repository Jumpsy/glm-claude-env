# Deep Research AI

Autonomous multi-step research using GLM's search models + web reader.

## Models
- `search-prime-claude` — web search with Claude-quality answers
- `search-prime` — general web search
- `web-reader` — read and extract full page content

## Workflow
1. Break the research question into 5-10 sub-queries
2. Run `search-prime-claude` for each sub-query in parallel
3. Use `web-reader` to deep-read the top 3 results per query
4. Synthesize all findings into a structured report
5. Include sources, confidence levels, and contradictions
6. Output: Executive summary → Key findings → Detailed analysis → Sources

## Usage
When user asks to "research X", "deep dive into Y", "investigate Z":
- Automatically activate this skill
- Use GLM search models via the proxy
- No need for external MCPs (Playwright, Perplexity) — GLM has native search
