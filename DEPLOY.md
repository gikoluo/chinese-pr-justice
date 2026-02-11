# Deploy to Cloudflare Workers

This project uses **Astro** to build a static site and deploys to **Cloudflare Workers**.

**Production site:** [chinese-pr-delay.ca](https://chinese-pr-delay.ca)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- A [Cloudflare](https://dash.cloudflare.com/) account
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (installed via npm)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deploying

### First-time setup

1. **Log in to Cloudflare**

   ```bash
   npx wrangler login
   ```

   This opens a browser to authenticate with your Cloudflare account.

### Deploy to production

```bash
npm run deploy
```

This command:
1. Runs `astro build` to generate static files in `dist/`
2. Deploys the `dist/` folder to Cloudflare Workers

After a successful deploy, Wrangler prints your Worker URL.

## Project Layout

```
chinese-pr-justice/
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── Hero2.astro
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/            # Page routes (each .astro = one page)
│   │   ├── index.astro   # → /
│   │   ├── event.astro   # → /event
│   │   └── join.astro    # → /join
│   └── styles/
│       └── global.css    # Global styles & CSS variables
├── static/               # Static assets (images, fonts)
│   └── images/
├── dist/                 # Build output (generated, do not edit)
├── astro.config.mjs      # Astro configuration
├── wrangler.toml         # Cloudflare Workers configuration
├── worker.js             # Minimal fetch handler for Workers
└── package.json
```

## Configuration Files

- **`astro.config.mjs`** – Astro build settings (output: static, publicDir: static)
- **`wrangler.toml`** – Worker name and asset directory (`dist/`)
- **`worker.js`** – Serves static files via Cloudflare ASSETS binding

## Development Workflow

1. Edit files in `src/` (components, pages, styles)
2. Add images to `static/images/`
3. Run `npm run dev` to preview changes locally
4. Run `npm run build` to verify production build
5. Run `npm run deploy` to publish

## Custom Domain

The site is configured to use [chinese-pr-delay.ca](https://chinese-pr-delay.ca).

To add or change domains:
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → your worker → **Settings** → **Domains & Routes**
2. Add your domain or route

See [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) for details.
