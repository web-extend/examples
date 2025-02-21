import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons()],
  // transformers: [
  //   transformerDirectives(),
  // ],
})
