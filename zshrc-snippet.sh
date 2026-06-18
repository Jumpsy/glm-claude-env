# ═══ GLM-5.2 PROXY — Claude Code uses GLM exclusively, no Anthropic account ═══
glm_proxy_start() {
  if ! curl -fsS http://127.0.0.1:4567/health >/dev/null 2>&1; then
    nohup node "$HOME/.local/share/glm-proxy/proxy.mjs" > "$HOME/.local/share/glm-proxy/proxy.log" 2>&1 &
    for _ in 1 2 3 4 5; do
      curl -fsS http://127.0.0.1:4567/health >/dev/null 2>&1 && return 0
      sleep 0.2
    done
  fi
}

export ANTHROPIC_API_KEY="glm-proxy-no-account-needed"
export ANTHROPIC_BASE_URL="http://127.0.0.1:4567"
export CLAUDE_MODEL="glm-5.2"
export CLAUDE_CODE_MAX_OUTPUT_TOKENS=65536
export DISABLE_ANTHROPIC_AUTH=1

# Auto-start the proxy on shell launch
glm_proxy_start

# Claude Code aliases — route through GLM proxy
alias cld="claude --dangerously-skip-permissions"
