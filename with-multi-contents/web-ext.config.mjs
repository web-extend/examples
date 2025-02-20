import { defineWebExtConfig } from "../../web-extend/packages/cli/dist/index.js";

export default defineWebExtConfig({
  run: {
    startUrl: "https://baidu.com",
  },
});
