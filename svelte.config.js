import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@astrojs/svelte";

export default {
  preprocess: [
    preprocess({
      postcss: true,
    }),
    vitePreprocess(),
  ],
};
