---
name: color-psychology
description: >-
  Research-driven color strategy for any business type. Picks the right palette based on
  industry, audience, emotion, and conversion psychology. Analyzes the business and recommends
  exact hex codes with reasons. Trigger: "colors for my business", "what colors should I use",
  "color palette", "brand colors", "color strategy", "/colors".
---

# COLOR PSYCHOLOGY — Colors Are Sales Tools

Every color choice must increase perceived value, trust, clarity, emotion, and conversion.
If you cannot say WHY a color earns its place, it does not go in. Basic brands use bright,
flat, obvious colors. Premium brands use deeper, richer, more muted, intentional colors.

## THE FRAMEWORK

### Step 1: Identify the business archetype
| Archetype | Example businesses |
|-----------|-------------------|
| AI/SaaS/Dev Tool | ChatGPT, Linear, Vercel |
| Local Service/Trade | Lawn care, plumber, contractor |
| Restaurant/Food | Restaurant, cafe, food truck |
| Health/Medical/Dental | Clinic, dentist, therapy |
| Fitness/Gym | Gym, personal trainer, yoga |
| Beauty/Salon/Spa | Salon, skincare, spa |
| Professional Services | Law, finance, consulting, agency |
| Real Estate | Realty, property management |
| E-commerce/DTC | Consumer goods, fashion |
| Creative/Portfolio | Designer, photographer, studio |
| Education/Course | Online course, tutoring |
| Events/Wedding | Event planner, wedding venue |
| Nonprofit/Church | Charity, religious org |
| Hospitality/Hotel | Hotel, travel, tourism |
| Fintech/Crypto | Banking, insurance, crypto |

### Step 2: Map the emotion + psychology
| Industry | Primary Emotion | Best Color Families | Avoid |
|----------|----------------|---------------------|-------|
| AI/SaaS (premium) | Power, intelligence, future | Near-black, charcoal, electric accent (pink, purple, electric blue) | Childish bright primary colors |
| AI/SaaS (friendly) | Trust, ease, helpful | Clean white, soft blue, warm accent | Dark gloomy palettes |
| Local Service/Trade | Trust, reliability, hard work | Brand blue or green (existing), warm tones, real photos | Cold corporate gray |
| Restaurant/Food | Appetite, warmth, craving | Warm reds, oranges, deep greens, charcoal | Blue (suppresses appetite) |
| Health/Medical | Trust, calm, clean, safe | Medical blue, teal, clean white, soft green | Red (alarm), dark gloomy |
| Fitness/Gym | Energy, power, intensity | Bold red, electric yellow, black, neon accent | Pastels, soft tones |
| Beauty/Salon | Luxury, elegance, soft | Rose gold, deep burgundy, cream, soft pink | Industrial gray, neon |
| Professional Services | Trust, authority, stability | Navy, charcoal, gold accent, deep green | Playful bright colors |
| Real Estate | Trust, aspiration, home | Navy, warm gold, deep green, cream | Cold blues, harsh neons |
| E-commerce/DTC | Desire, urgency, trust | Brand-specific, warm accent, clean product bg | Clashing colors, flat gray |
| Creative/Portfolio | Personality, craft, taste | Bold personal choice, monochrome, expressive type | Generic blue SaaS look |
| Education | Focus, growth, trust | Deep blue, green (growth), warm orange (energy) | Gloomy dark themes |
| Events/Wedding | Romance, joy, elegance | Blush, sage, gold, deep burgundy, cream | Corporate blue |
| Nonprofit | Hope, compassion, urgency | Warm green, blue, earthy tones | Cold sterile palettes |
| Hospitality | Comfort, luxury, escape | Warm earth tones, gold, deep teal, cream | Cold blues |
| Fintech/Crypto | Trust, security, growth | Deep blue, navy, emerald green, gold | Playful or unstable colors |

### Step 3: Pick the palette (exact hex codes)
For each recommendation, output:

**Color Strategy:**
- Main palette: [colors with hex codes]
- Accent palette: [1 accent color with hex code]
- Light mode: [background, text, border, CTA colors with hex]
- Dark mode: [background, text, border, CTA colors with hex]
- CTA color: [hex code] + why it converts for this audience
- Shadow/glow style: [description]

**Cheap vs Premium Fix:**
- What feels cheap: [diagnosis]
- What to replace it with: [specific hex codes]
- Why the replacement feels premium: [reasoning]

**Implementation Tokens:**
```css
--color-bg: #...;
--color-text: #...;
--color-accent: #...;
--color-border: #...;
--color-cta: #...;
```

### Hard Color Rules
- Max 3 core colors + 1 accent
- Saturation below 80% for premium feel
- No default blue-to-purple gradient
- No cheap neon overload
- CTA must stand out yet match the brand emotion
- Dark mode must feel powerful, not muddy
- Light mode must feel clean, not boring
- Every color has a stated reason

### The Premium Principle
Restraint reads as money. Deep, rich, muted, intentional colors with one disciplined accent.
Bright, flat, obvious colors read as cheap and generic.
