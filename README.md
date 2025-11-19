# mopau-website

## Hosting & Deployment

This project is hosted on **Vercel**, which offers a native workflow for frameworks such as Next.js and provides preview deployments for every pull request.

### Build Settings
- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Output directory:** `.next`

These values can be confirmed in **Vercel → Project Settings → Build & Development Settings**. If you customize the build (e.g., add a custom output directory), update this table and the Vercel dashboard so the pipeline stays in sync.

### CI/CD Pipeline
1. **Connect the repository:** In Vercel, choose *Add New Project → Import Git Repository*, select this repo, and set the Production branch to `main`.
2. **Environment variables:** Use *Project Settings → Environment Variables* to add secrets (e.g., `NEXT_PUBLIC_API_URL`, `API_KEY`). Add them to the *Production* and *Preview* environments so every deployment has access to the same config.
3. **Automatic deployments:** Every push to `main` triggers the install + build commands above. Successful builds are promoted to production automatically; pushes to feature branches create preview deployments for review.
4. **Redeploys:** When environment variables or DNS settings change, click *Deployments → Redeploy* on the latest production deployment to ensure the new settings are applied.

### DNS Configuration
Use the DNS panel provided by your domain registrar to add the following records so the purchased domain resolves to Vercel:

| Record | Name | Value | Purpose |
| --- | --- | --- | --- |
| `A` | `@` | `76.76.21.21` (Vercel IPv4) | Points the apex domain (e.g., `example.com`) to Vercel |
| `CNAME` | `www` | `cname.vercel-dns.com.` | Redirects `www.example.com` to the Vercel project |

After creating the records, open **Vercel → Domains**, add your domain, and wait for propagation (can take up to 24h). Vercel automatically issues SSL certificates once the DNS checker shows the records resolving.

## How to Run Locally

1. **Prerequisites**
   - Node.js 18+ and npm 9+
   - Copy any required `.env.local` variables from the Vercel dashboard (same names as in Production/Preview).
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
   The default dev server runs at [http://localhost:3000](http://localhost:3000).
4. **Run quality checks before pushing**
   ```bash
   npm run lint
   npm test
   ```
   Add or update tests when changing behavior so CI mirrors the production pipeline.
5. **Verify the production build (optional but recommended before release)**
   ```bash
   npm run build
   npm run start
   ```
   This mimics Vercel’s build/start steps locally, making it easier to catch deployment issues early.

Following these steps ensures contributors can verify their changes locally and keep deployments through Vercel consistent.
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

## Product requirements & planning

High-level requirements, personas, information architecture, and MVP acceptance criteria are documented in [`docs/requirements.md`](docs/requirements.md). Update that file alongside feature work so future issues and pull requests stay aligned with Mopau Studio's mission and calls-to-action.
