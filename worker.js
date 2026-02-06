/**
 * Cloudflare Worker: serves static assets from the public directory.
 * All requests are passed to the ASSETS binding.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
