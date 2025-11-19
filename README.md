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
