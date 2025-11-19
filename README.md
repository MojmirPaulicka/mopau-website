# Mopau Website

This repository contains a hand-rolled Next.js 14 starter for the Mopau Studio marketing site. It ships with:

- ✅ TypeScript, ESLint, and the default Next.js configuration
- ✅ Shared layout, navigation, hero, and footer elements for quick iteration
- ✅ Global styles and placeholder content to validate the baseline information architecture

## Getting started

1. Install dependencies (requires access to the npm registry):
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Lint the project:
   ```bash
   npm run lint
   ```

## Project structure

```
public/              # Static assets such as icons and favicons
src/components/      # Shared UI like the Layout component
src/pages/           # Next.js Pages Router entries
src/styles/          # Global and module stylesheets
```

The home page currently lives at `src/pages/index.tsx` and renders a simple navigation bar, hero, services grid, work highlights, and contact form.
