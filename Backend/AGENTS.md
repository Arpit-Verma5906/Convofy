# Backend rules

- `index.ts` configures Express, mounts `/api/auth`, connects MongoDB, and starts
  listening. Routes live in `routes/`, authentication in `middleware/` and
  `config/passport.ts`, and persistence schemas in `models/`.
- Keep TypeScript strictness. Prefer explicit request/auth types and runtime
  validation at request boundaries over adding `any` casts or non-null assertions.
- Validate untrusted input before database operations. Hash local passwords
  with bcryptjs and return only the public user fields; never return password
  hashes or log credentials/tokens.
- Keep protected endpoints behind auth middleware. Preserve the JWT `userId`
  payload and Bearer-header contract unless changing both sides of the API.
- Coordinate `/api/auth` response fields, status changes, OAuth redirects, and
  CORS origins with the frontend. Account for both Google-only and local-password
  users when changing sign-in logic.
- Configuration currently reads `MONGO_URI`, `JWT_SECRET`, `GOOGLE_CLIENT_ID`,
  `GOOGLE_CLIENT_SECRET`, and optional `PORT` (default 5000). Keep new configuration
  documented with placeholder values. Check environment loading order before
  relying on it during Passport module initialization.
- Run `bunx --no-install tsc --noEmit` here after TypeScript changes. Exercise
  affected endpoints against a development database when changing runtime
  behavior; never use production data for verification. There is no backend
  build, lint, or test script at present.
