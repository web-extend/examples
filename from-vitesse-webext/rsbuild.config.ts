import { defineConfig } from "@rsbuild/core";
import { pluginWebExtend } from "@web-extend/rsbuild-plugin";
import { pluginVue } from "@rsbuild/plugin-vue";
import { UnoCSSRspackPlugin } from "@unocss/webpack/rspack";
import Components from "unplugin-vue-components/rspack";
import AutoImport from "unplugin-auto-import/rspack";
import Icons from "unplugin-icons/rspack";
import IconsResolver from "unplugin-icons/resolver";
import { r } from "./scripts/utils";

export default defineConfig({
  plugins: [pluginVue(), pluginWebExtend()],
  html: {
    mountId: "app",
  },
  resolve: {
    alias: {
      "~/": "./src/",
    },
  },
  tools: {
    rspack: {
      plugins: [
        UnoCSSRspackPlugin({}),

        AutoImport({
          imports: [
            "vue",
            {
              "webextension-polyfill": [["=", "browser"]],
            },
          ],
          dts: r("src/auto-imports.d.ts"),
        }),

        // https://github.com/antfu/unplugin-vue-components
        Components({
          dirs: [r("src/components")],
          // generate `components.d.ts` for ts support with Volar
          dts: r("src/components.d.ts"),
          resolvers: [
            // auto import icons
            IconsResolver({
              prefix: "",
            }),
          ],
        }),

        // https://github.com/antfu/unplugin-icons
        Icons(),
      ],
    },
  },
});
