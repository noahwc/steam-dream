import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "steam-dream",
      dataset: "production",
      apiVersion: "2023-02-25",
      useCdn: true,
    }),
  ],
});
