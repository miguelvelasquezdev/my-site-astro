import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [tailwind(), mdx(), svelte()],
});
