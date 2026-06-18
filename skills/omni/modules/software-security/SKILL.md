---
name: software-security
description: >-
  Software security rules that prevent the most common vulnerabilities. HTTPS, authentication,
  authorization, input sanitization, secrets management. Audit apps before launch. Use when
  building any app, reviewing code for security, or preparing for production launch.
  Trigger: "security", "secure my app", "security audit", "is this safe", "before launch",
  "vulnerability", "/security".
---

# SOFTWARE SECURITY — The Rules That Actually Matter

Security is not optional. Every app that touches user data, payments, or the internet
needs these rules applied. Run this checklist before ANY production launch.

## 1. HTTPS ALWAYS (Encryption in Transit)

HTTPS encrypts data between the user and your server. Without it, anyone on public Wi-Fi
can intercept passwords, tokens, and personal data.

- NEVER serve over plain HTTP in production
- Use Cloudflare, Vercel, or Let's Encrypt for free SSL/TLS certificates
- Redirect all HTTP traffic to HTTPS
- Set HSTS headers: `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- No mixed content (HTTPS page loading HTTP resources)

## 2. AUTHENTICATION (Who Are You?)

Authentication proves identity. These are the methods, ranked by security + UX:

### Best Options (use these):
- **Google/Apple Sign-In** — highest conversion, verified email, 2FA handled by provider.
  40% of users drop out if forced to do email OTP. Use OAuth.
- **Magic Links** — secure passwordless login via email. Good UX, no password to steal.
- **Email + Password with strong hashing** — bcrypt or argon2. NEVER MD5 or SHA1.
  Minimum bcrypt cost factor 12. NEVER store plaintext passwords.

### When to add 2FA:
- Any app handling payments, health data, or sensitive personal info
- Admin/employee accounts
- High-value targets (crypto, banking, legal)

### Rules:
- NEVER roll your own auth. Use Clerk, Auth0, Supabase Auth, NextAuth, or Firebase Auth.
- Password requirements: min 8 chars, no max length restriction, allow all characters.
- Rate limit login attempts (max 5 per minute per IP).
- Invalidate all sessions on password change.
- Session tokens: use httpOnly, secure, sameSite=strict cookies. NEVER localStorage.
- JWT tokens: short expiry (15 min) + refresh token. NEVER put sensitive data in payload.

## 3. AUTHORIZATION (Are You Allowed?)

Authorization controls what authenticated users can do. This is where most vulnerabilities live.

### Core Rules:
- **NEVER trust client-side checks.** Always verify permissions server-side.
- **Keep users in their own accounts.** Every query must be scoped to the authenticated user.
- **Gate features by subscription tier** — verify server-side, never trust the client.
- **Gate admin actions by role** — separate user roles from admin roles entirely.
- **Use the principle of least privilege** — give each user/component the minimum access needed.

### Common Authorization Bugs (CHECK THESE):
```
IDOR (Insecure Direct Object Reference):
  BAD:  GET /api/users/123/profile  (anyone can change 123 to 124)
  GOOD: GET /api/profile  (server derives userId from auth token)

Missing ownership check:
  BAD:  DELETE /api/posts/456  (anyone can delete anyone's post)
  GOOD: DELETE /api/posts/456  (server checks post.authorId === req.user.id)

Client-side gating:
  BAD:  if (user.plan === 'pro') { showFeature() }  (in frontend code)
  GOOD: if (user.plan === 'pro') { showFeature() }  (in API handler, returns 403 otherwise)
```

### For multi-tenant apps:
- Every database query includes the tenant/organization ID
- Row-level security (Supabase RLS, Convex auth-aware queries)
- NEVER accept userId as a client parameter — derive from auth context

## 4. INPUT SANITIZATION (XSS Prevention)

Cross-Site Scripting (XSS) lets attackers inject malicious scripts.

- Sanitize ALL user input before rendering. Use DOMPurify for HTML, escape for templates.
- NEVER use `dangerouslySetInnerHTML` without sanitization.
- Content Security Policy (CSP) header: restrict script sources.
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY` (prevents clickjacking)

## 5. SQL INJECTION PREVENTION

- ALWAYS use parameterized queries / prepared statements. NEVER string concatenation.
- BAD:  `query("SELECT * FROM users WHERE id = " + req.params.id)`
- GOOD: `query("SELECT * FROM users WHERE id = $1", [req.params.id])`
- Use an ORM (Prisma, Drizzle) which handles this automatically.

## 6. SECRETS MANAGEMENT

- NEVER hardcode API keys, passwords, or tokens in source code.
- NEVER commit `.env` files to git. Add `.env*` to `.gitignore`.
- Use environment variables or a secrets manager (Cloudflare Secrets Store, AWS Secrets Manager).
- If secrets were committed to git, they are COMPROMISED. Rotate immediately and purge history.
- Check for secrets in code: `npx secretlint` or `git secrets --scan`

## 7. SECURITY HEADERS (add to next.config.js or middleware)

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; ...
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## 8. DEPENDENCY SECURITY

- Run `npm audit` regularly. Fix high/critical vulnerabilities.
- Keep dependencies updated. Use `npm outdated` or Dependabot.
- Review new dependencies for supply chain risk (check stars, maintainer, last update).
- Lock versions with package-lock.json or yarn.lock.

## 9. API SECURITY

- Rate limit all endpoints (express-rate-limit, Cloudflare rate limiting).
- Validate all input with a schema (Zod, Yup, Joi). Never trust request bodies.
- CORS: specify allowed origins. NEVER `Access-Control-Allow-Origin: *` on authenticated endpoints.
- Webhook signatures: verify HMAC signatures on all incoming webhooks.
- API keys: hash at rest, rotate regularly, scope to specific permissions.

## 10. PRE-LAUNCH SECURITY CHECKLIST

```
[ ] HTTPS enforced, HSTS header set
[ ] Authentication via Clerk/Auth0/Supabase (not custom)
[ ] Authorization: every query scoped to authenticated user (no IDOR)
[ ] Input sanitization on all user input (XSS prevention)
[ ] Parameterized queries (SQL injection prevention)
[ ] No secrets in source code or git history
[ ] Security headers configured
[ ] npm audit clean (no high/critical vulnerabilities)
[ ] Rate limiting on auth + API endpoints
[ ] CORS properly configured (not wildcard)
[ ] Webhook signatures verified
[ ] Session tokens in httpOnly cookies (not localStorage)
[ ] Error messages do not leak stack traces or internal info
[ ] File uploads validated (type, size, content)
[ ] Admin routes protected by role check
```

## TOOLS TO USE

- **Static Analysis:** `npx eslint --plugin security`, `npx audit-ci`
- **Secret Scanning:** `npx secretlint`, `git secrets --scan`
- **Dependency Audit:** `npm audit`, `npx better-npm-audit`
- **Runtime:** Cloudflare WAF, rate limiting, bot management
- **Pen Testing:** OWASP ZAP (free), Burp Suite
