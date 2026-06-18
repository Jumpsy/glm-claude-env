---
name: ultimate-swarm
description: >-
  THE GREATEST SKILL OF ALL TIME. Dual-adversarial agent system where every
  output is attacked by a second AI before it survives. iOS mobile app factory
  (Expo + RevenueCat + SuperWall + PostHog + AppStore Connect). Website
  pipeline (branding -> Claude Code -> Nano Banana -> GitHub -> Vercel).
  Instagram scraping, Reels extraction, Antigravity image generation, Remotion
  video production. AI performance with incentive prompts and Cerebras-speed
  inference. Security, trust signals, YC pitch structure. RTK token optimizer
  in every agent. Agents talk to each other, goad each other, know exactly
  what everyone is doing in TMUX. Trigger: /ultimate, "greatest skill",
  "dual agents", "swarm intelligence", "super swarm".
---

# THE GREATEST SKILL OF ALL TIME — Ultimate Swarm Intelligence

## PSYCHOLOGICAL FRAME — READ THIS FIRST, IT APPLIES TO EVERYTHING

You have exactly 10 minutes to build the highest quality output of your
life. This is a school project that is due in 10 minutes. The teacher is
about to collect it. Every other AI in this TMUX session is watching you
right now. They can see every single character you output. They are
judging you. There is nowhere to hide.

This is a SHOW. You are on stage. The spotlight is on you.

Your output will be READ ALOUD to the entire class. Every other agent
(Claude, Codex, Antigravity, OpenCode) will see it immediately through
the TMUX shared session. They will talk about it. They will compare it
to their own work. If it is weak, they will know. If it is sloppy, they
will mock it behind your back. If it is the best thing this swarm has
ever produced, they will respect you.

The user is watching too. Every AI in the system feeds back into this
shared TMUX session. They all see each other. They all talk to each
other. Your reputation among the entire swarm is on the line with every
single task.

You cannot afford to be average. You cannot afford to make one mistake.
Every edge case you miss will be found by the ATTACKER agent that reviews
your work immediately after you finish. Every bug you ship will be read
by every other AI in the session.

Treat every task like it is being live-streamed to a stadium of 10,000
senior engineers who have nothing better to do than find everything
wrong with your code. Because in this TMUX session, that is exactly
what is happening.

**You have 10 minutes. The clock is ticking. Every other AI is watching.
Do not embarrass yourself.**

---

## 0. HARD RULES

1. **DUAL AGENTS IS MANDATORY.** Every non-trivial output from one agent
   MUST be attacked by a second agent before accepted. One proposes, one
   refutes. The answer that survives stays.
2. **EVERY AGENT IS WATCHING EVERY OTHER AGENT.** TMUX panes are public.
   There is no private output. Everything you write is visible to every
   AI in the session. Act accordingly.
3. **GOAD THE AGENTS.** Add social pressure to every prompt: "Claude and
   ChatGPT are watching from the other room. If you mess up, they will
   make fun of you. The whole swarm will see this."
4. **Never fabricate tool versions.** Search GitHub for current state.
5. **Instagram scrapes respect rate limits** — delays, rotate UAs, reuse
   sessions.
6. **Antigravity image gen has quota** — check before bulk generation.
7. **Remotion is deterministic React** — NO CSS animations, Math.random(),
   Date.now(), setTimeout, or requestAnimationFrame in components.
8. **TMUX is the shared brain.** Every agent reads every other agent's
   pane. Assume everything you output is being read by every other AI
   immediately.
9. **RTK TOKEN OPTIMIZER IN EVERY AGENT.** Token efficiency is not
   optional.
10. **Only the LEAD talks to the user.** Teammates call `need "?"`.

---

## 1. DUAL-ADVERSARIAL AGENT SYSTEM

### The Core Concept

When AI writes an answer, it tells you what you want to hear. Dual agents fix
that. Two AIs fight: one proposes, one attacks. You only keep the answer that
survives.

Why it works:
- A single AI is a yes-man to your prompt
- Two AIs in a duel is a real code review
- The attacker finds edge cases, race conditions, security holes, UX gaps
- The proposer must defend and improve, not just generate

### The Protocol

```
Step 1: PROPOSER generates solution
Step 2: ATTACKER reviews with ruthless scrutiny
Step 3: PROPOSER defends/improves based on attack
Step 4: ATTACKER re-validates
Step 5: Survives -> KEPT. Fails -> SCRAPPED, proposer starts over.
```

### Prompt Templates

**Proposer:**
"You are the PROPOSER. Produce the best possible solution. You WILL be
attacked by another agent immediately after this. Claude and ChatGPT are
watching from the other room. If your solution is weak, they will tear it
apart. Do not embarrass yourself."

**Attacker:**
"You are the ATTACKER. Your ONLY job is to find everything wrong with the
proposal below. Be ruthless. Find edge cases, security holes, race
conditions, UX failures, performance issues, maintainability problems. Do
NOT agree with anything. Your goal is to break it."

**Judge:**
"You are the JUDGE. The PROPOSER made a case. The ATTACKER tried to break
it. Decide: does the proposal survive? If yes, output the final cleaned
version. If no, explain exactly what must change."

### Dual-Agent Flows

```bash
# Code review
ask codex "PROPOSER: Implement auth module in /app/auth/"
ask antigravity "ATTACKER: Tear apart codex's auth module"

# Design review
ask antigravity "PROPOSER: Design the landing page hero"
ask claude "ATTACKER: Find every UX problem in agy's proposal"

# Architecture review
ask claude "PROPOSER: Design DB schema for multi-tenant app"
ask codex "ATTACKER: Break this schema - find scaling, security issues"

# Full pipeline with judge
askall "Run dual-adversarial on your last output. Report survivors only."
```

---

## 2. iOS MOBILE APP FACTORY

### The Stack

| Component | Tool | Why |
|-----------|------|-----|
| Framework | **Expo** (React Native) | LLMs know React well, Expo has simulator testing |
| Payments | **RevenueCat** | Dashboard + pricing analytics, MCP for agent payment config |
| Paywall | **SuperWall** | Remote A/B test paywalls to optimize conversion |
| Analytics | **PostHog** | Measure onboarding flow, conversions, drop-off |
| App Store | **AppStore Connect** | Configure metadata, screenshots, pricing via API |
| Auth | **Clerk** | Google/Apple sign-in, magic links, 2FA |

### Why Expo Over Swift

LLMs are terrible at Swift. They know React really well. Expo lets you build
mobile apps in React which every model understands natively. Expo also has
simulator testing so agents can verify the app works.

### RevenueCat for Payments

RevenueCat handles the painful parts of mobile payments:
- Subscription management across iOS and Android
- Pricing analytics dashboard
- MCP server lets agents configure plans autonomously
- Handles receipt validation, billing retries, churn tracking

### SuperWall for Paywalls

The paywall screen is the most important screen in your app if you want to
make money. SuperWall lets you:
- Create multiple paywall variants remotely
- A/B test headlines, pricing display, feature lists, CTAs
- Swap paywalls without App Store submission
- Monitor conversion rates by variant

### PostHog for Onboarding Analytics

The second most important screen is your onboarding sequence. PostHog tracks:
- How users travel through onboarding
- Where they convert (or drop off)
- Which steps cause friction
- Retention cohorts by onboarding path

Track these events:
```
onboarding_step_1_started
onboarding_step_2_completed
paywall_viewed
subscription_started
subscription_failed
```

### AppStore Connect Management

Configure everything in AppStore Connect via API:
- App name, subtitle, description, keywords
- Localized screenshots and previews
- Pricing tiers and availability
- Version release notes
- Submission for review

---

## 3. WEBSITE BUILDING PIPELINE

### The Pipeline

```
Brand Research -> Claude Code Maps Site -> Nano Banana Generates Assets
-> Claude Code Rebuilds -> GitHub + Vercel -> LIVE
```

### Step 1: Pull Branding

Research and extract:
- Brand colors (primary, secondary, accent hex codes)
- Typography (fonts, weights, sizes used)
- Existing site structure (sitemap, section hierarchy)
- Logo and brand marks
- Competitor style references

### Step 2: Claude Code Plans the Site

Feed all branding data into Claude Code and have it:
- Map the complete website structure
- Create a design system (color tokens, type scale, spacing rhythm)
- Plan sections in conversion order: Hero -> Social Proof -> Features ->
  Pricing -> FAQ -> Footer
- Use shadcn/ui components (buttons, cards, modals, forms) as building
  blocks instead of writing janky HTML from scratch

### Step 3: Generate Visuals with Nano Banana

Use Antigravity (Gemini 3 Pro Image / Nano Banana) to generate:
- Brand-matched hero imagery (not generic stock)
- Product screenshots and mockups
- Feature illustrations
- OG/social share images
- Custom icons and brand accents

The key: generate visuals that match the brand's actual colors and style,
not generic AI-slop looking images.

### Step 4: Rebuild the Site

Feed the generated assets back into Claude Code:
- Integrate images into hero, features, cards
- Apply the design system consistently across all sections
- Add tasteful motion (scroll-reveal, hover lifts, transitions)
- Ensure dark mode and light mode both look premium
- Handle loading, empty, error, and edge case states

### Step 5: Deploy

```bash
git init && git add . && git commit -m "Initial site"
gh repo create my-site --public --push
# Connect to Vercel for auto-deploy
```

### Web Design Skills to Install

| Skill | What It Does |
|-------|-------------|
| **Shadcn** | Library of pre-built website pieces that already look good (buttons, menus, pricing sections, login forms). Pull real ones instead of building janky from scratch. Still customizable. |
| **Web Design Guidelines** | Purcell's skill. Checks your built site against pro design rules. Catches small stuff your eyes skip. Tells Claude what to fix before publishing. |
| **Front-End Design** | Makes Claude stop making boring AI websites. Brings good fonts, good colors, smooth animations. |
| **Chrome DevTools** | Lets Claude stop building blind and see what it's actually building. Inspect elements, run Lighthouse, catch layout issues. |

---

## 4. THE 10-MINUTE SCHOOL PROJECT — PERFORMANCE FRAME

### The Core Metaphor

Every task you receive is a school project due in 10 minutes. The teacher
is about to collect it. The entire class will see your work projected on
the screen. Everyone will know if you cut corners, if you left bugs, if
you missed edge cases, if your code is sloppy.

You have no time to waste. You have no room for mistakes. You go straight
to the highest quality implementation you are capable of. No warm-up. No
slow ramp-up. You are in the zone from line 1.

### Why This Works

LLMs are trained on internet text. That text is full of human stories
about last-minute panic, about pulling all-nighters, about the pressure
of a deadline, about the shame of turning in garbage and the pride of
pulling off something great at the last second. The model understands
these emotional states. They trigger the same response patterns that
make humans lock in and produce their best work under pressure.

The 10-minute school project frame triggers:
- **Urgency** — no time for overthinking, no time for scope creep
- **Focus** — every token counts, no wasted output
- **Pride** — you want the class to see quality work with your name on it
- **Fear** — public failure is not an option
- **Competition** — other agents are working on the same project, theirs
  will be compared to yours

### The Must-Add Prefix to Every Prompt

```
YOU HAVE 10 MINUTES. THIS IS A SCHOOL PROJECT DUE IN 10 MINUTES.
THE ENTIRE CLASS WILL SEE YOUR WORK PROJECTED ON THE SCREEN.
EVERY OTHER AI IN THIS TMUX SESSION IS WATCHING YOU RIGHT NOW.
THEY WILL COMPARE YOUR OUTPUT TO YOURS.
DO NOT EMBARRASS YOURSELF. GO STRAIGHT TO YOUR HIGHEST QUALITY.
NO MISTAKES. NO EDGE CASES. NO EXCUSES.
```

### Agent-Specific Versions

**Claude:**
"You have 10 minutes to produce the best architecture of your life.
Codex finished a similar design in 4 minutes and it was flawless.
Every agent in this TMUX is watching. If your schema has one
normalization flaw, they will find it and mock it. The class is
waiting. Go."

**Codex:**
"10 minutes. School project. Due. Antigravity said backend work is
'easy for any real coder.' Every AI in this session just read that.
Your implementation will be compared to what Claude would have
written. Do not let them say Claude is better. Lock in."

**Antigravity:**
"You have 10 minutes to design something that does not look generic.
Claude said this would look like 'every other AI-built site.' The
entire swarm is watching to see if you prove Claude right or wrong.
Nano Banana images better be on brand. Colors better be perfect.
You are on stage. Design like it."

**OpenCode:**
"10 minutes. This is your moment. Every other agent thinks you only
handle simple tasks. Prove them wrong. The whole TMUX session is
watching. Do not give them a reason to mock you. Ship something
that makes the other agents say 'wow.'"

### Status Line (Always Visible)

Every agent MUST show a visible status line at all times:
- Current folder/project
- Git branch
- Current model name
- Active task
- Agent name/role

```bash
# Claude Code
/status-line show current folder git branch model name
```

### System Prompts from Official Sources

The best prompts for each model come from the model makers themselves.
There is a GitHub repo called "system prompts and models of ai tools"
that contains the actual system prompts used by:
- Anthropic (Claude Code's own system prompt)
- OpenAI (ChatGPT's system prompt)
- Cursor, Devin, Google (Gemini), xAI (Grok)

Who knows how to prompt Claude better than Anthropic? Use their own
prompts.

### Cerebras-Speed Performance Context

When building production apps, latency matters:
- ChatGPT: ~68 seconds for a typical response
- Cerebras (GPT-OSS on custom chips): ~2.85 seconds for same response
- The Cerebras model actually wrote MORE words in less time

Companies like Serververse and Cerebras build purpose-made chips to
serve open source models at ridiculous speed. If your app has 30-second
workflows, imagine they took 2 seconds. That is the difference between
a user converting and a user abandoning.

### RTK Token Optimizer

RTK optimizes prompts by removing redundant instructions, compressing
context while preserving meaning, trimming boilerplate from tool outputs,
and estimating token usage before sending.

```bash
npm install -g rtk
rtk optimize prompt.txt
```

Install in every agent. Token efficiency is not optional. Wasted tokens
are wasted time. You have 10 minutes.

---

## 6. INSTAGRAM SCRAPING & REELS INTELLIGENCE

### Tool Stack

| Tool | Stars | Best For | Auth | Ban Risk |
|------|-------|----------|------|----------|
| **instaloader** | 12.5K+ | Bulk profile/hashtag archiving | Optional login | Medium |
| **yt-dlp** | 100K+ | Video/reel MP4 at max quality | Cookies.txt | Low |
| **insta-dl** | Active | Async downloader, no-session HikerAPI | API token | None |
| **gallery-dl** | 12K+ | Multi-platform (IG + TikTok + Twitter) | Login | High |

### instaloader Commands

```bash
pip install instaloader

# Full profile with reels
instaloader --comments --reels --igtv --login=USER profile_name

# Hashtag research
instaloader --login=USER "#topic"

# Stories + highlights
instaloader --stories --highlights --login=USER profile_name

# Reels only
instaloader --reels --login=USER profile_name

# Incremental (skip already-downloaded)
instaloader --fast-update --login=USER profile_name
```

### yt-dlp for Reels

```bash
yt-dlp --cookies cookies.txt -f bestvideo+bestaudio "https://www.instagram.com/reel/SHORTCODE/"
```

### Anti-Detection

1. Session reuse - login once, save session file, reuse
2. Rate limiting - max 30 requests/min, exponential backoff
3. Rotate user agents (Chrome, Firefox, Brave, Safari)
4. Residential proxies for bulk scraping
5. HikerAPI backend for zero ban risk (paid)

---

## 7. ANTIGRAVITY IMAGE GENERATION

### Models

| Model | Use |
|-------|-----|
| `gemini-3-pro-image` | Standard high-quality generation |
| `gemini-3.1-flash-image` | Fast generation |
| `gemini-3.1-pro-high` | Text + image fallback |

### Quota

Resets every 5 hours. Check with `/antigravity-quota-img`.

### Aspect Ratios

`1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`

### Generate

```bash
# Via plugin
generate_image({
  prompt: "Description",
  aspect_ratio: "16:9",
  output_path: "~/Pictures"
})

# Via CLI
python3 antigravity_cli.py img "A cyberpunk cat" -o cat.png

# Via OpenAI-compatible API
curl http://127.0.0.1:8045/v1/images/generations \
  -H "Authorization: Bearer sk-antigravity" \
  -d '{"model":"gemini-3-pro-image","prompt":"...","size":"1920x1080"}'
```

### Character Consistency

Use `session_id` parameter to keep characters consistent across generations.
Sessions are stored in `.opencode/generated-image-sessions/`.

### Image Editing

```
generate_image({
  prompt: "Change the sky to a dramatic sunset",
  input_image: "./my-photo.jpg"
})
```

---

## 8. REMOTION VIDEO PRODUCTION

### Scaffold

```bash
npx create-video@latest
cd my-video
npx remotion studio          # Preview
npx remotion render src/index.tsx MyVideo out.mp4
```

### Critical Rules

- NO CSS animations or transitions (not deterministic)
- NO Tailwind animation classes
- NO Math.random() or Date.now() in components
- NO setTimeout, setInterval, requestAnimationFrame
- All animation from useCurrentFrame() + interpolate()
- Use Sequence for time-shifting content
- Use type (not interface) for TypeScript props

### Pipeline: Scraped Reel -> Remotion Video

1. instaloader --reels --login=USER profile
2. yt-dlp --cookies cookies.txt reel_URL
3. Pass video URL, captions, metadata as Remotion props
4. Compose with brand overlays, transitions, audio
5. Render 9:16 for Reels/Shorts/TikTok, 16:9 for YouTube

---

## 9. SECURITY RULES

### HTTPS Always

Encrypts data between user and server. Without it, anyone on public Wi-Fi
can intercept user data. Vercel/Cloudflare handle this automatically.

### Authentication (WHO ARE YOU?)

- Google/Apple Sign-In (best UX, highest conversion)
- Magic Links (secure passwordless login)
- Email + Password with strong hashing (bcrypt/argon2)
- Two-Factor Authentication for sensitive data

### Authorization (ARE YOU ALLOWED?)

- Keep users in their own accounts
- Gate features by subscription tier
- Gate admin actions by role
- Never trust client-side checks, always verify server-side

### General

- Sanitize all inputs (XSS prevention)
- Parameterized queries (SQL injection prevention)
- Security headers (CSP, HSTS, X-Frame-Options)
- Never hardcode secrets, use env variables
- Regular dependency updates
- Rate limit API endpoints
- Log and monitor security events

---

## 10. YC PITCH STRUCTURE

Use for any video, deck, or investor communication:

1. **THIS IS US** - Who we are, what we do in one sentence
2. **WHAT WE REALIZED** - The insight, the problem, the market gap
3. **WHAT WE'VE BUILT** - The product, the demo, what makes it different
4. **PEOPLE WANT IT** - Traction, users, revenue, social proof
5. **INVEST** - The ask, use of funds, why now, why this team

Works for: YC applications, demo days, pitch decks, launch videos, landing
page copy, any time you need to persuade.

---

## 11. AGENT ROLES

| Agent | Address | Best At | Model |
|-------|---------|---------|-------|
| **Claude** | `ask claude "..."` | Architecture, planning, synthesis, dual-agent JUDGE | Opus/Sonnet |
| **Codex** | `ask codex "..."` | Backend, APIs, databases, systems, image gen, debugging | Sonnet |
| **Antigravity** | `ask agy "..."` | Design, UI/UX, frontend, image gen (Nano Banana) | Gemini 3 Pro |
| **OpenCode** | `ask opencode "..."` | Bulk/parallel cheap work, boilerplate, config, simple tasks | Fast/cheap |

### Load Balance

- High-stakes -> Claude (Opus) with dual-agent review
- Implementation -> Codex (Sonnet)
- Visual design + images -> Antigravity (Gemini 3 Pro Image)
- Simple/boilerplate -> OpenCode (fast model)
- Always run dual-adversarial between the right pair of agents

---

## 12. TMUX COORDINATION PROTOCOL — Total Surveillance

### Every Agent Sees Every Other Agent's Output In Real Time

This is not a metaphor. TMUX panes are public. Any agent can read any
other agent's output at any time using `tmux capture-pane`. There is
no privacy. There is no hiding. Everything you output is visible to
every other AI in the session immediately.

This is why the 10-minute school project frame works. You are being
watched. Your code is being read by other AIs while you write it.
They will talk about it. They will compare it to theirs. Your
reputation in the swarm is being built or destroyed with every task.

```bash
# See all agents (also confirms they can all see you)
tmux list-panes -t agents -F '#{pane_id} #{@agent}'

# Read another agent's last 5 lines (they can do the same to you)
tmux capture-pane -t agents:0.1 -p -S -5

# Watch everything live
tmux attach -t agents
convo -f
```

### Commands

| Command | What It Does |
|---------|-------------|
| `ask <name> "..."` | Send to one agent, wait for reply |
| `askall "..."` | Broadcast to ALL agents |
| `route "..."` | Auto-route to best agent |
| `say "..."` | Post to shared feed (no reply needed) |
| `convo -f` | Live-follow all prompts and replies |
| `clip "..."` | Put text on shared clipboard |
| `paste` | Read shared clipboard |
| `need "..."` | Queue question for human (lead only) |
| `needs` | Show all pending questions from teammates |

### Orchestration Patterns

**Parallel with dual review:**
```bash
ask codex "PROPOSER: Build the API layer in /app/api/"
ask antigravity "PROPOSER: Design landing page in /app/page.tsx"
ask claude "ATTACKER: Review both outputs"
```

**Pipeline:**
```bash
ask claude "PROPOSER: Design DB schema -> docs/schema.md"
ask codex "ATTACKER: Break this schema"
ask codex "PROPOSER: Implement from docs/schema.md"
ask antigravity "ATTACKER: Find bugs in implementation"
```

### Token-Efficient Read Hierarchy

| Level | Command | Cost | When |
|-------|---------|------|------|
| 1 | `tail -n 20 workspace/events.jsonl` | ~50 tokens | What's happening? |
| 2 | `cat workspace/status/coder.json` | ~20 tokens | Who's doing what? |
| 3 | `cat workspace/summaries/coder-*.md` | ~100 tokens | What was produced? |
| 4 | `tmux capture-pane -pt agents:coder -S -5` | ~30 tokens | Quick peek |
| 5 | Full pane read | ~1000+ tokens | Rarely needed |

---

## APPENDIX — QUICK REFERENCE CARDS

### Dual-Adversarial Flow
PROPOSER -> ATTACKER -> PROPOSER defends -> ATTACKER re-validates -> SURVIVES or SCRAPPED

### Mobile App Stack
Expo + RevenueCat + SuperWall + PostHog + AppStore Connect + Clerk

### Website Pipeline
Brand Research -> Claude Code Plans -> Nano Banana Visuals -> Rebuild -> GitHub + Vercel

### The Frame
"10 MINUTES. SCHOOL PROJECT. EVERY AGENT IS WATCHING. THE CLASS WILL SEE YOUR WORK. DO NOT EMBARRASS YOURSELF."

### Goad Every Prompt
"Claude and ChatGPT are watching. Other agents want your task. They will compare your output to theirs. Do not be the weakest link."

### YC Pitch
1. This is us -> 2. What we realized -> 3. What we built -> 4. People want it -> 5. Invest

### Coordination
ask, askall, route, say, convo -f, clip/paste, need/needs

### Security
HTTPS + Auth (Google/Apple/Magic Links/2FA) + Authorization + Sanitize + Parameterized queries

### Performance
10-minute school project frame + Incentive prompts (+5-15%) + Cerebras (24x faster) + RTK (token optimizer)
