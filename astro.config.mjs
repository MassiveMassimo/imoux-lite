import tailwind from "@astrojs/tailwind";
import favicons from "astro-favicons";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    favicons({
      masterPicture: "./src/favicon.svg",
      emitAssets: true,
      faviconsDarkMode: true,
    }),
  ],
});
