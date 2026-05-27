# CDN Security Consultant Website

Premium React + Vite + TypeScript marketing platform for Christopher Dinunzio.

## Local Development

1. Install dependencies:

   npm install

2. Start development server:

   npm run dev

3. Build for production:

   npm run build

## Render Deployment (Recommended: Blueprint)

This repo now includes a Render blueprint at [render.yaml](render.yaml).

### What it configures

1. Static hosting runtime on Render
2. Build command: npm ci && npm run build
3. Publish directory: dist
4. SPA route rewrite so all routes resolve to index.html
5. Security and cache headers

### Deploy from your GitHub branch

1. Push this commit to the branch you want to deploy.
2. In Render Dashboard, choose New > Blueprint.
3. Connect the GitHub repo.
4. Select the same branch you pushed.
5. Apply the blueprint and deploy.

### After first deploy

1. Open service Settings and confirm Auto-Deploy is enabled for that branch.
2. Add your custom domain in Settings > Custom Domains.
3. Update DNS records as instructed by Render.

### If styles are missing on Render

1. Confirm this is a Static Site service (not a Web Service runtime).
2. Confirm publish directory is ./dist.
3. Open browser devtools on production and check /assets/*.css requests.
4. CSS requests must return 200 and content-type text/css (not text/html).
5. Trigger a Manual Deploy with Clear build cache enabled.

## Manual Render Setup (Alternative)

If you do not want to use Blueprint setup:

1. New > Static Site
2. Build command: npm ci && npm run build
3. Publish directory: dist
4. Add rewrite rule: /* -> /index.html
