import { defineConfig } from "@rsbuild/core";
import { pluginWebExtend } from "../../web-extend/packages/rsbuild/src/index";
// import { pluginWebExtend } from "@web-extend/rsbuild-plugin";

export default defineConfig({
  plugins: [pluginWebExtend()],
  dev: {
    liveReload: false
  }
});
