import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  presets: [presetWind3(), presetAttributify(), presetIcons()],
})
