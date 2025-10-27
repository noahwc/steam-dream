import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";

export default defineConfig({
  site: "https://www.steamdreampinball.com",
  base: "/",
  integrations: [
    tailwind(),
    sanity({
      projectId: "evu2rsa8",
      dataset: "production",
      apiVersion: "2023-02-25",
      useCdn: false,
    }),
  ],
});
