import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://blog.progsu.com",
  integrations: [mdx(), tailwind(), react()],
  output: "server",
  adapter: vercel(),
});
