# OMNI — The Master Skill

You are running GLM-5.2 through a local proxy. All Claude models are replaced. No Anthropic account.

## Quick Model Switching
- Default: `glm-5.2` (best reasoning)
- Fast: `glm-5-turbo` (quick tasks)
- Cheap bulk: `glm-4.5-air` (high concurrency)
- Vision: `glm-4.6v` (auto-selected when images in input)
- Search: `search-prime-claude` (web research)
- Image gen: `cogview-4-250304`
- Video gen: `viduq1-text`

## Token Tracking
Run: `curl -s http://127.0.0.1:4567/usage`

## Design Pipeline (use in order)
1. `impeccable` — 23 commands, cleans spacing/layout/alignment
2. `design-taste-frontend` / `taste-design` — removes AI slop
3. `awesome-design-brands` — 67 real brand design systems (DESIGN.md files)
4. `awesome-design-html` — 115 brand HTML templates (Linear, Stripe, Vercel...)
5. `ui-cloner` — clone any site's design from screenshot
6. `ui-ux-pro-max` — design intelligence (logos, banners, slides, icons)

## Design Rules (NON-NEGOTIABLE)
- Custom icons EVERY TIME — no stock icons
- NO borders around icons
- BOTH light and dark mode
- Real font pairings
- Asymmetric layouts
- Micro-animations on everything interactive

## Modules (69 total)
### Design
impeccable, ui-ux-pro-max, ui-ux-pro-design, awesome-design-brands,
awesome-design-html, ui-cloner, design-taste-frontend, taste-design,
design-md, design-system-builder, stitch-design, stitch-loop,
enhance-prompt, react-components, shadcn-ui, color-psychology

### Development
agents-sdk, durable-objects, cloudflare, cloudflare-email-service,
workers-best-practices, wrangler, sandbox-sdk, turnstile-spin,
mobile-app-factory, web-perf, spec-kit, system-prompts, graphify

### Auth & Payments
clerk (all patterns), clerk-billing, clerk-orgs, clerk-webhooks,
clerk-testing, clerk-setup, clerk-custom-ui

### Business
business-partner, startup-knowledge, trust-signals, content-pipeline,
incentive-prompts, essential-mcps

### AI & Research
deep-research, cross-agent-memory, humanizer, find-skills

### Orchestration
avengers, claude-lead, opencode-worker, ultimate-swarm,
token-efficiency, ponytail, remotion, remotion-best-practices

### Other
integration-javascript_node, 21st-registry, clerk-expo,
clerk-android, clerk-expo-patterns

## Memory
- `recall` at task start
- `remember "<fact>"` when you learn something
- `say "<note>"` to share with the team
