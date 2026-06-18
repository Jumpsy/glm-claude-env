# Cross-Agent Memory Protocol

All agents (Claude, Codex, OpenCode, Antigravity) share memory.

## At Session Start
Run `recall` to load everything the team has learned.

## When You Learn Something
Run `remember "<fact>"` to persist it. Examples:
- `remember "JumpGPT lives at ~/agent-workspace/jumpgpt-upstream"`
- `remember "GLM API key is coding-plan tier — text only, no image gen"`
- `remember "User prefers dark mode, no icon borders, custom icons always"`

## Shared Commands
- `recall` — load all memories
- `recall <query>` — search memories
- `remember "<fact>"` — save a fact
- `say "<note>"` — post to shared feed
- `convo` — read the team feed
- `ask <agent> "<msg>"` — message a teammate
- `crossreview <file>` — all agents review a file

## Protocol
1. START of task: `recall`
2. DURING task: write findings to files, `remember` key decisions
3. END of task: `say "Completed X"` + `remember` what was done
