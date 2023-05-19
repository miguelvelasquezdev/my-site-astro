import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://miguelvelasquez.dev",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula",
      },
      gfm: false,
    }),
    tailwind(),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    robotsTxt(),
  ],
});
