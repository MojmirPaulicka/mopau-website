# mopau-website

## Hosting & Deployment

This project is hosted on **Vercel** because it provides the simplest workflow for modern Next.js-style frontends.

- **Build command:** `npm run build`
- **Output directory:** `.next`

### CI/CD Pipeline
1. Connect the GitHub repository to Vercel (import the repo and select the `main` branch).
2. Define any required environment variables inside the Vercel dashboard (Project Settings → Environment Variables). Redeploy after changes.
3. Enable automatic deployments for the `main` branch. Every push to `main` triggers the Vercel build step (`npm run build`) followed by deployment to production.
4. Optionally protect preview deployments by restricting access to team members.

### DNS Configuration
Use the DNS panel provided by your domain registrar to add the following records:

| Record | Name | Value | Purpose |
| --- | --- | --- | --- |
| `A` | `@` | Vercel IPv4 addresses (`76.76.21.21`) | Points apex domain (e.g., `example.com`) to Vercel |
| `CNAME` | `www` | `cname.vercel-dns.com.` | Points `www.example.com` to Vercel |

After adding the records, go to Vercel → Domains, add the custom domain, and wait for DNS propagation. Vercel will automatically provision SSL certificates once the records resolve.

## How to Run Locally

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
   This starts the app (default http://localhost:3000).
3. **Run tests / linting before pushing**
   ```bash
   npm run lint
   npm test
   ```
4. **Create a production build locally (optional)**
   ```bash
   npm run build
   npm run start
   ```

Following these steps ensures contributors can verify their changes locally and that deployments through Vercel remain consistent.
