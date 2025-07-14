// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://travel.github.io",
  base: "/travelbarokah",
  output: "static",
  trailingSlash: "ignore",
  build: {
    assets: "assets",
  },
});
