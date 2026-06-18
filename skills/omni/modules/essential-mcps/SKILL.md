# Essential MCPs

MCP servers that are already configured and working.

## Currently Active
1. **Firebase** (`firebase experimental:mcp`) — Firestore, Auth, Storage
2. **21st.dev Magic** (`npx -y @21st-dev/magic@latest`) — UI components
3. **Composio** (`npx -y @composio/mcp-server`) — 200+ app integrations
4. **Supabase** (HTTP MCP) — database, auth, storage

## No Need For
- **Playwright** — use GLM `web-reader` model instead
- **Perplexity** — use GLM `search-prime-claude` model instead
- **Chrome DevTools** — use the `web-perf` skill instead
- **OpenAI** — replaced by GLM-5.2 entirely

## Adding New MCPs
```bash
# Add to ~/.claude/settings.json under mcpServers
# Or use: cli-add <npm-pkg> for CLI tools
# Or use: mcp-add <name> <command> [args...]
```
