import { defineConfig } from "@rsbuild/core";
import { pluginWebExtend } from "@web-extend/rsbuild-plugin";

const manifest: Partial<chrome.runtime.ManifestV3> = {
  permissions: ["activeTab", "scripting"],
};

export default defineConfig({
  plugins: [
    pluginWebExtend({
      manifest,
    }),
  ],
  environments: {
    custom: {
      source: {
        entry: {
          "injected-script": {
            import: "./src/scripting/injected-script.ts",
            html: false,
          },
          "injected-style": {
            import: "./src/scripting/injected-style.css",
            html: false,
          },
        },
      },
      output: {
        filenameHash: false,
        // distPath: {
        //   js: '',
        //   css: ''
        // }
      },
    },
  },
});
