# Deploy to Cloudflare Workers

This project is set up to deploy the static site (HTML, CSS, JS, images) to Cloudflare Workers.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- A [Cloudflare](https://dash.cloudflare.com/) account
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (installed via npm below)

## One-time setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Log in to Cloudflare** (if you haven’t already)

   ```bash
   npx wrangler login
   ```

   This opens a browser to authenticate with your Cloudflare account.

## Deploying

1. **Copy latest assets into `public/`**

   Edits to `index.html`, `script.js`, `styles.css`, or the images should be reflected in `public/` before deploy. Either:

   - Run the copy script:

     ```bash
     npm run copy-assets
     ```

   - Or deploy (this runs the copy step automatically):

     ```bash
     npm run deploy
     ```

2. **Deploy the Worker**

   ```bash
   npm run deploy
   ```

   Or, without copying assets first:

   ```bash
   npx wrangler deploy
   ```

After a successful deploy, Wrangler prints your Worker URL (e.g. `https://parliament-hill-match.<your-subdomain>.workers.dev`).

## Local development

Run the Worker and static assets locally:

```bash
npm run dev
```

Then open the URL Wrangler prints (usually `http://localhost:8787`).

## Project layout for Workers

- **`wrangler.toml`** – Worker name, compatibility date, and `public` as the asset directory.
- **`worker.js`** – Minimal fetch handler that serves everything via the ASSETS binding.
- **`public/`** – Static files actually deployed (HTML, CSS, JS, images). Keep this in sync with your source files using `npm run copy-assets`.
- **`scripts/copy-assets.js`** – Copies `index.html`, `script.js`, `styles.css`, and the two JPGs from the project root into `public/`.

## Custom domain

To use your own domain instead of `*.workers.dev`:

1. In [Cloudflare Dashboard](https://dash.cloudflare.com/) go to **Workers & Pages** → your worker → **Settings** → **Domains & Routes**.
2. Add your domain or route.

You can also configure domains in `wrangler.toml`; see [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).
