---
name: content-pipeline
description: >-
  Automated content generation pipeline. Drop a project in and it generates UGC content, full
  advertisements, product visuals, and Remotion videos. Connect to ad platforms, push to
  campaigns, check metrics after 24 hours, and double down on what wins. Trigger: "content
  pipeline", "generate ads", "make content", "UGC", "product video", "/content".
---

# CONTENT PIPELINE — From Product to Campaigns

Drop a project into the pipeline and it generates every content type, pushes to ad platforms,
and iterates on what wins.

## THE PIPELINE

```
Project Assets -> Generate Content (3 types) -> Connect to Ad Platform
-> Push to Live Campaigns -> Wait 24h -> Check Metrics -> Double Down on Winners
```

## STEP 1: INGEST PROJECT ASSETS

Collect everything available:
- Product name, tagline, core value prop
- Logo, brand colors, fonts
- Product screenshots / demo recordings
- Existing photography or video
- Target audience definition
- Pricing/offer details
- Landing page URL

## STEP 2: GENERATE CONTENT (3 types)

### Type A: UGC Content (User-Generated Style)
Authentic, handheld, "real person using the product" style content.

- Script: casual, first-person, "I found this thing and..."
- Visual: phone-shot style, screen recording of the app, natural lighting
- Hook: "Nobody is talking about..." / "I tried..." / "POV: you..."
- Length: 7-15 seconds
- Generate with: Antigravity image gen for lifestyle shots, Remotion for screen-recorded demos
- Voiceover: ElevenLabs conversational voice (not announcer)

### Type B: Full Advertisements
Polished, branded, conversion-focused ads.

- Script: Problem -> Solution -> Demo -> Social Proof -> CTA
- Visual: branded graphics, product UI, animated text overlays
- Hook: bold claim or pain callout in first 1 second
- Length: 15-30 seconds
- Generate with: Remotion (React -> MP4) for full control
- Voiceover: ElevenLabs professional voice
- Cut per platform: 9:16 (TikTok/Reels/Shorts), 1:1 (feed), 16:9 (YouTube)

### Type C: Product Visuals
Static visuals for feed posts, stories, and display ads.

- Hero product shot with branded background
- Feature highlight cards (one feature per visual)
- Before/after or comparison visuals
- Pricing/offer graphics
- Generate with: Antigravity (brand-matched prompts)
- Export: 1080x1080 (feed), 1080x1920 (story), 1200x628 (display)

## STEP 3: SCRIPT FRAMEWORK (for all video content)

### The 1-Second Hook
Visual shock, bold claim, unexpected comparison, pain callout, pattern interrupt.
Bad: "Today I'll show you my app." Good: "You're doing this wrong."

### The Structure
1. HOOK (1s) - stop the scroll
2. PROBLEM (3-5s) - feel the pain
3. SOLUTION (3-5s) - introduce the product
4. DEMO (5-10s) - SHOW it working (not claim, SHOW)
5. PROOF (3-5s) - real result, testimonial, metric
6. PAYOFF (3-5s) - the life that gets better
7. CTA (2-3s) - simple, not desperate ("Try it" not "SMASH FOLLOW")

### Hook Variations (generate 10 per idea)
Aggressive, funny, curiosity, pain, founder-story, demo, comparison, niche-specific,
controversial, simple-clean.

## STEP 4: REMOTION VIDEO PRODUCTION

For every video ad or demo:

```
Rules:
- NO CSS animations, NO Tailwind animation classes
- NO Math.random(), Date.now(), setTimeout, requestAnimationFrame
- ALL animation from useCurrentFrame() + interpolate() + Easing
- Use type (not interface) for TypeScript props
- Assets in public/, reference via staticFile()
- Voiceover ALWAYS ElevenLabs (key at ~/.config/elevenlabs/api_key)
- Duck music to ~0.12 under voice
- Captions ON always
- Render: npx remotion render src/index.tsx MyVideo out.mp4
```

## STEP 5: CONNECT TO AD PLATFORMS (MCP)

Connect to platforms via MCP or API:
- **Meta Ads** (Facebook/Instagram) - largest reach for consumer apps
- **TikTok Ads** - best for viral UGC content
- **Google Ads** - intent-based, good for B2B
- **Snapchat Spotlight** - younger demographic

Push content to live campaigns:
1. Upload creative assets
2. Set targeting (audience, interests, lookalikes)
3. Set budget (start small, $10-50/day)
4. Set objective (conversions, installs, traffic)
5. Launch

## STEP 6: MEASURE AND ITERATE

After 24 hours, check:
- **Hook rate:** % of people who watched past 3 seconds
- **Hold rate:** % who watched to the end
- **Click-through rate (CTR):** % who clicked
- **Conversion rate:** % who took the desired action
- **Cost per result:** how much each conversion cost

### Decision Framework:
- Hook rate low (>30% drop in 3s) -> change the opening
- Hold rate low -> tighten the edit, cut dead air
- CTR low -> stronger CTA, clearer value prop
- Cost per result too high -> kill it, try new creative
- Winner found -> duplicate it, vary the hook, scale budget

### The Loop:
```
Generate 10 variants -> Launch all -> Wait 24h -> Kill losers ->
Double down on winner -> Generate 10 variations of winner -> Repeat
```

## STEP 7: ORGANIC DISTRIBUTION

Beyond paid ads:
- Post UGC content organically (TikTok, Reels, Shorts)
- Founder content (building in public, behind the scenes)
- SEO content (blog, YouTube, tutorials)
- Community engagement (Reddit, Discord, Twitter)
- Email newsletter to existing users

## TOOLS

| Tool | Purpose |
|------|---------|
| Antigravity (agy) | Image generation (brand-matched visuals) |
| Remotion | Video production (React -> MP4) |
| ElevenLabs | Voiceover / narration |
| GLM-5 Image | Alternative image generation |
| PostHog | Track content engagement |
| Meta Ads API / MCP | Push to Facebook/Instagram |
| TikTok Ads API | Push to TikTok |
