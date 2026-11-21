# Frontend rules

- Reuse `src/components/ui/` primitives, `src/components/auth/` and chat/sidebar
  components before adding new abstractions. Route composition belongs in
  `src/app/Router.jsx`; page composition belongs in `src/pages/` and layouts.
- Send API calls through `src/api/axios.ts`. Its base URL already includes
  `/api`, and its interceptor supplies the stored token as a Bearer header.
- Keep authentication state in `AuthContext.jsx` and protected navigation in
  `ProtectedRoute.jsx`. Check loading, unauthenticated, success, and failure
  states when changing authentication. Coordinate OAuth callback/token changes
  with `Backend/routes/auth.routes.ts`.
- Reuse Tailwind v4 utilities and the CSS variables in `src/style/theme.css`.
  Keep new colors readable in both light and `.dark` themes; use ThemeContext
  for theme behavior. Reuse SVG assets from `src/assets/`.
- Preserve keyboard access, accessible names, and form labels when editing
  controls. Check narrow-screen layouts when changing auth or chat layouts.
- Keep mock conversation data in `src/mock/` distinct from persisted API data.
  A rendered message does not imply server storage or WebSocket delivery.
- For frontend code changes run `bun run lint` and `bun run build` here.
  ESLint currently covers JS/JSX, so it does not establish TypeScript correctness
  for `src/api/axios.ts`.
