---
name: trust-signals
description: >-
  Make vibe-coded apps look trustworthy. Custom favicon, working Google sign-in, mobile
  responsiveness, privacy policy, real testimonials. People pay for what they trust. Apply
  this to every app/website before launch. Trigger: "trust", "trustworthy", "looks legit",
  "professional", "before launch", "pre-launch checklist", "/trust".
---

# TRUST SIGNALS — People Pay For What They Trust

Users can smell a vibe-coded app instantly. These 5 signals separate "real product"
from "AI project that will disappear tomorrow." Apply ALL of them before launch.

## 1. CUSTOM FAVICON (the browser tab icon)

If your favicon is the default white triangle (Next.js) or blank, you look unfinished.
This is the #1 "I did not finish" tell.

- Create a branded favicon from your logo (SVG or 32x32 PNG minimum)
- Next.js: place `app/icon.svg` or `app/favicon.ico` (auto-detected)
- Include apple-touch-icon (180x180) for iOS home screen
- Include `manifest.json` for PWA install
- Test: open the tab and confirm the icon shows

## 2. WORKING SIGN-IN WITH GOOGLE (and Apple)

40% of users drop out if forced to do email + password + OTP verification. Nobody likes
those. Google/Apple sign-in is expected on any modern app.

- Install Clerk or Firebase Auth (both handle OAuth in minutes)
- Place the "Sign in with Google" button prominently on login/signup pages
- Apple Sign-In is REQUIRED if you have a mobile app with other login methods
- Verify the OAuth redirect URIs are correct in the provider dashboard
- Test the FULL flow: click, authorize, land back in the app, session persists

## 3. MOBILE RESPONSIVENESS (50% of your traffic)

If it does not look fantastic on a phone, half your traffic bounces. "Responsive" does
not mean "technically works on mobile" — it means "looks designed FOR mobile."

- Test at 375px (iPhone SE) and 390px (iPhone 14)
- Touch targets minimum 44x44px (Apple HIG)
- No horizontal scroll at any breakpoint
- Text readable without zooming (min 16px body)
- Navigation collapses to hamburger/drawer (never two lines)
- Forms use appropriate input types (email, tel, number)
- No hover-dependent interactions (touch devices have no hover)
- Images use `next/image` or `srcset` for proper sizing
- Bottom content not cut off by iOS Safari address bar (use `100dvh` not `100vh`)

## 4. PRIVACY POLICY PAGE (even if AI-generated)

Even if you are not big enough to care about tracking, users expect to see it. Its absence
is a red flag. Its presence signals "real company."

- `/privacy` and `/terms` pages (required, not optional)
- Include: what data you collect, how you use it, third-party services, cookie usage,
  data retention, user rights, contact info
- Generate with a template (termsfeed.com, privacypolicies.com) or AI — but REVIEW it
- Add footer links on every page
- If you use analytics (PostHog, Google Analytics) or auth (Clerk), mention them
- If EU users: GDPR compliance (consent banner, data export, right to deletion)
- If California users: CCPA compliance

## 5. REAL CLIENT TESTIMONIALS (not fake ones)

AI always picks the same fake names for testimonials. If someone sees "Sarah Chen" on
your testimonials page, they will not buy your product. This is the most called-out AI tell.

- NEVER fabricate testimonials. No fake names, no fake companies, no fake quotes.
- If you have real users: ask 3-5 for a quote. Offer a discount for their time.
- Format: quote + real name + real role/company + photo (with permission)
- If you have NO testimonials yet: remove the section entirely. Do not fake it.
- Alternative to testimonials: show real usage (screenshots, metrics, case studies)
- Alternative: "Trusted by" logo wall with REAL company logos (not made-up names)

## BONUS TRUST SIGNALS (do these too)

6. **Professional email** — `founder@yourdomain.com` not `founder@gmail.com`
7. **About/Team page** — real people, real photos, real bios. No stock photos.
8. **Contact info** — email address visible, response time stated
9. **Social proof** — real social media links that are active (not dead profiles)
10. **Status page** — status.yourdomain.com (even if it's always green, it signals "we monitor")
11. **Loading states** — skeletons not blank screens (signals "real product")
12. **Error handling** — graceful error messages not stack traces
13. **HTTPS padlock** — visible in browser (automatic with Vercel/Cloudflare)
14. **Custom domain** — not a `.vercel.app` or `.pages.dev` subdomain
15. **Footer with legal links** — Privacy, Terms, (optionally: Security, DPA, Cookies)

## PRE-LAUNCH TRUST CHECKLIST

```
[ ] Custom favicon (not default Next.js triangle)
[ ] Working Google/Apple sign-in (not just email/password)
[ ] Mobile responsive at 375px + 390px (tested, not assumed)
[ ] /privacy and /terms pages with real content
[ ] Testimonials section is REAL or REMOVED (never faked)
[ ] Professional email on custom domain
[ ] About page with real team info
[ ] Contact info visible and reachable
[ ] Custom domain (not platform subdomain)
[ ] Loading skeletons on all async content
[ ] Graceful error messages (no stack traces)
[ ] Footer with legal links on every page
```
