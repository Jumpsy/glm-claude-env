# Mobile App Factory

Build production iOS/Android apps with Expo + RevenueCat + SuperWall + PostHog.

## Pipeline
1. Scaffold: `npx create-expo-app@latest -t tabs`
2. Auth: Clerk Expo (`@clerk/expo`)
3. Paywall: SuperWall (`react-native-superwall`)
4. Analytics: PostHog (`posthog-react-native`)
5. Backend: Supabase or Cloudflare Workers
6. Deploy: EAS Build → App Store Connect

## Rules
- Always use TypeScript
- Dark mode + light mode (NO exceptions)
- Custom icons every time (no stock icons, no borders on icons)
- Use SafeAreaView everywhere
- Test on physical device before shipping
- RevenueCat for subscriptions, SuperWall for paywall UX
- PostHog for every screen view, button tap, and conversion event
