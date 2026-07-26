import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess(),

    extensions: [".svelte"],

    compilerOptions: {
        runes: true,
    },

    kit: {
        adapter: adapter({
            pages: "build",
            fallback: "index.html",
        }),

        paths: {
            base: "",
            relative: false,
        },

        prerender: {
            handleHttpError: "warn",
        },
    },
};

export default config;
