import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration as sanity } from "@sanity/astro";

export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "evu2rsa8",
      dataset: "production",
      apiVersion: "2023-02-25",
      useCdn: true,
    }),
  ],
});
