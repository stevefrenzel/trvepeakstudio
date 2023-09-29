import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.trvepeak.studio",
  server: {
    headers: {
      "Content-Security-Policy": "script-src 'self'",
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "geolocation=(), camera=(), microphone=()",
    },
  },
});
