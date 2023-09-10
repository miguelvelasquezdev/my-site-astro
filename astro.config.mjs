import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://miguelvelasquez.dev",
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula",
      },
      gfm: false,
    }),
    tailwind(),
    react(),
    sitemap(),
    robotsTxt(),
    vue(),
    svelte(),
    solidJs(),
  ],
});
