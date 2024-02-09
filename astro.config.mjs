import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import * as crypto from 'crypto';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "hybrid",
  adapter: vercel()
});