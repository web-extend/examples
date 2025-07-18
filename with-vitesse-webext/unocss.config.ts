import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  content: {
    filesystem: [
      'src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
      '!src/**/*.d.ts',
    ],
  },
  presets: [presetWind3(), presetAttributify(), presetIcons()],
})
