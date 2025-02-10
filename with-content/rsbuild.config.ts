import { defineConfig } from "@rsbuild/core";
// import { pluginWebExtend } from "@web-extend/rsbuild-plugin";
import { pluginWebExtend } from "../../web-extend/packages/rsbuild/src/index";

export default defineConfig({
  plugins: [pluginWebExtend()],
});
