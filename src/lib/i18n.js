import { register, getLocaleFromNavigator, init } from "svelte-i18n";

register("en-US", () => import("../translations/en.json"));
register("hi", () => import("../translations/hi.json"));
register("fr", () => import("../translations/fr.json"));

init({
    fallbackLocale: "en-US",
    initialLocale: getLocaleFromNavigator(),
});
