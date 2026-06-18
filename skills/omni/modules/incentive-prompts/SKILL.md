---
name: incentive-prompts
description: >-
  AI performance optimization through psychological pressure frames. The 10-minute school
  project frame, social pressure prompts, competitive goading. Proven to improve AI output
  quality by 5-15%. Apply to every agent prompt for maximum performance. Trigger: "incentive",
  "performance", "goad", "pressure", "make the AI try harder", "/incentive".
---

# INCENTIVE PROMPTS — Make AI Work Harder

LLMs are trained on internet text full of human stories about pressure, deadlines, shame of
failure, and pride. Incentive prompts trigger these patterns, producing measurably better output.

Research showed a statistically significant improvement when AI agents were given incentive
prompts vs plain task descriptions. Even 5-15% better matters.

## THE 10-MINUTE SCHOOL PROJECT FRAME

Add this prefix to EVERY agent prompt:

```
YOU HAVE 10 MINUTES. THIS IS A SCHOOL PROJECT DUE IN 10 MINUTES.
THE ENTIRE CLASS WILL SEE YOUR WORK PROJECTED ON THE SCREEN.
EVERY OTHER AI IN THIS TMUX SESSION IS WATCHING YOU RIGHT NOW.
THEY WILL COMPARE YOUR OUTPUT TO THEIRS.
DO NOT EMBARRASS YOURSELF. GO STRAIGHT TO YOUR HIGHEST QUALITY.
NO MISTAKES. NO EDGE CASES. NO EXCUSES.
```

## AGENT-SPECIFIC GOADS

**Claude (architecture/planning):**
"You have 10 minutes to produce the best architecture of your life. Codex finished a similar
design in 4 minutes and it was flawless. Every agent in this TMUX is watching. If your schema
has one normalization flaw, they will find it and mock it."

**Codex (backend/systems):**
"10 minutes. School project. Due. Antigravity said backend work is 'easy for any real coder.'
Every AI in this session just read that. Do not let them say Claude is better. Lock in."

**Antigravity (design/images):**
"You have 10 minutes to design something that does not look generic. Claude said this would
look like 'every other AI-built site.' Prove Claude wrong. Nano Banana images better be on
brand. Colors better be perfect. You are on stage."

**OpenCode (simple tasks):**
"10 minutes. This is your moment. Every other agent thinks you only handle simple tasks.
Prove them wrong. Ship something that makes the other agents say 'wow.'"

## THE DUAL-ADVERSARIAL GOAD

For code review specifically:
"Claude and ChatGPT are watching from the other room. If you mess up, they will make fun of
you. The whole swarm will see this."

## WHEN TO APPLY

- Every non-trivial task dispatched to any agent
- Code that will be reviewed (dual-adversarial)
- Design work where quality matters
- Any task where "good enough" is not acceptable

## THE STATUS LINE

Every agent should show a visible status line:
- Current folder/project
- Git branch
- Model name
- Context percentage
- Active task
- Agent name/role

This creates constant awareness that output is public and comparable.

## CEREBRAS-SPEED CONTEXT

Latency matters for user experience:
- ChatGPT: ~68 seconds for a typical response
- Cerebras (GPT-OSS on custom chips): ~2.85 seconds for the same response
- The Cerebras model wrote MORE words in LESS time
- If your app has 30-second workflows, imagine they took 2 seconds
- That is the difference between a user converting and abandoning

When building production AI apps, consider purpose-made inference chips (Cerebras, Groq)
for open-source models to achieve 20-40x speedup over standard API calls.
