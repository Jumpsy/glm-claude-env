#!/usr/bin/env bash
set -euo pipefail

echo "╔══════════════════════════════════════════════════╗"
echo "║  GLM Claude Code Environment Installer            ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# 1. Check prerequisites
echo "Checking prerequisites..."
command -v node >/dev/null 2>&1 || { echo "ERROR: Node.js not installed. Install from nodejs.org"; exit 1; }
echo "  Node.js: $(node --version)"

command -v claude >/dev/null 2>&1 || {
  echo "  Claude Code not found. Installing..."
  npm install -g @anthropic-ai/claude-code
}
echo "  Claude Code: $(claude --version 2>/dev/null || echo 'installed')"

# 2. Install the proxy
echo ""
echo "Installing GLM proxy..."
PROXY_DIR="$HOME/.local/share/glm-proxy"
mkdir -p "$PROXY_DIR"
cp proxy.mjs "$PROXY_DIR/proxy.mjs"
echo "  Proxy installed to $PROXY_DIR/proxy.mjs"

# 3. Add shell configuration
echo ""
echo "Configuring shell..."
SHELL_FILE="$HOME/.zshrc"
if [ ! -f "$SHELL_FILE" ]; then SHELL_FILE="$HOME/.bashrc"; fi

# Check if already configured
if grep -q "GLM-5.2 PROXY" "$SHELL_FILE" 2>/dev/null; then
  echo "  Shell already configured (skipping)"
else
  cat zshrc-snippet.sh >> "$SHELL_FILE"
  echo "  Added GLM proxy config to $SHELL_FILE"
fi

# 4. Install hooks
echo ""
echo "Installing RTK hook..."
mkdir -p "$HOME/.claude/hooks"
if [ -f hooks/rtk-rewrite.sh ]; then
  cp hooks/rtk-rewrite.sh "$HOME/.claude/hooks/rtk-rewrite.sh"
  chmod +x "$HOME/.claude/hooks/rtk-rewrite.sh"
  echo "  RTK hook installed"
fi

# 5. Install skills
echo ""
echo "Installing skills..."
mkdir -p "$HOME/.claude/skills"
if [ -d skills/ ]; then
  cp -r skills/* "$HOME/.claude/skills/" 2>/dev/null || true
  echo "  Skills copied to ~/.claude/skills/"
fi

# 6. Install CLAUDE.md
if [ -f CLAUDE.md ]; then
  cp CLAUDE.md "$HOME/.claude/CLAUDE.md"
  echo "  Global CLAUDE.md installed"
fi

# 7. Start the proxy
echo ""
echo "Starting GLM proxy..."
source "$SHELL_FILE" 2>/dev/null || true

# Start proxy
if ! curl -fsS http://127.0.0.1:4567/health >/dev/null 2>&1; then
  nohup node "$PROXY_DIR/proxy.mjs" > "$PROXY_DIR/proxy.log" 2>&1 &
  sleep 2
fi

# 8. Verify
if curl -fsS http://127.0.0.1:4567/health >/dev/null 2>&1; then
  echo ""
  echo "✅ GLM proxy is running at http://127.0.0.1:4567"
  echo "✅ Claude Code will now use GLM-5.2"
  echo ""
  echo "Run 'claude' to start. It uses GLM-5.2 automatically."
else
  echo ""
  echo "❌ Proxy failed to start. Check: $PROXY_DIR/proxy.log"
  echo "   Try manually: node $PROXY_DIR/proxy.mjs"
fi

echo ""
echo "Token usage: curl -s http://127.0.0.1:4567/usage"
