// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    { 
      provider: fontProviders.fontsource(),
      name: "Source Code Pro",
      cssVariable: "--font-source-code-pro",
      fallbacks: ["monospace"],
      weights: [400, 500, 600, 700, 800],
      styles: ["normal", "italic"],
    }
  ]
});
