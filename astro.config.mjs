// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      GOOGLE_MAPS_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      GOOGLE_MAPS_PLACE_ID: envField.string({ context: 'server', access: 'secret' })
    }
  }
});
