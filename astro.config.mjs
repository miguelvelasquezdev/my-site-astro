import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import svelte from "@astrojs/svelte";
import solid from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://miguelvelasquez.dev",
  integrations: [solid(), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula"
    },
    gfm: false
  }), tailwind(), sitemap(), robotsTxt(), svelte()],
  adapter: vercel()
});