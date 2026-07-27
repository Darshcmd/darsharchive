import adapter from "@sveltejs/adapter-vercel";
import adapterStatic from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess(),

    extensions: [".svelte"],

    compilerOptions: {
        runes: true,
    },

    kit: {
        adapter: process.env.VERCEL
            ? adapter({
                  runtime: "nodejs20.x",
              })
            : adapterStatic({
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
