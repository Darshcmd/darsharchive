<script lang="ts">
    import { get } from "svelte/store";
    import { resolve } from "$app/paths";
    import { locale } from "svelte-i18n";
    import { onMount } from "svelte";
    // Images
    import DarshFaceImg from "$lib/assets/images/icon.png";
    import YoutubeIcon from "$lib/assets/svg/youtube.svg";
    import GithubIcon from "$lib/assets/svg/github-142-svgrepo-com.svg";
    import EmailIcon from "$lib/assets/svg/at-svgrepo-com.svg";

    let userLocale = $state(getLocale());

    onMount(() => {
        const savedLocale = localStorage.getItem("locale");
        if (savedLocale) {
            locale.set(savedLocale);
            userLocale = savedLocale;
        }
    });

    function getLocale(): string {
        const userLocale = get(locale)?.substring(0, 2);
        if (!(userLocale || userLocale === "en" || userLocale === "fr" || userLocale === "hi")) {
            locale.set("en");
            return "en";
        }

        return userLocale;
    }

    function updateLocale() {
        const strippedLocale = userLocale.substring(0, 2);

        localStorage.setItem("locale", strippedLocale);
        locale.set(strippedLocale);
    }
</script>

<header>
    <a href={resolve("/")} class="titlebar">
        <img class="titlebar-image" src={DarshFaceImg} alt="" />
        <h2 class="subtitle">Darsh</h2>
    </a>

    <div class="social">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a aria-label="email" href="mailto:darsh.codes@gmail.com">
            <img class="social-link social-link-img" src={EmailIcon} alt="" />
        </a>

        <a aria-label="github" href="https://github.com/Darshcmd" target="_blank" rel="noreferrer">
            <img class="social-link social-link-img" src={GithubIcon} alt="" />
        </a>

        <a aria-label="youtube" href="https://www.youtube.com/@dxrsh" target="_blank" rel="noreferrer">
            <img class="social-link social-link-img" src={YoutubeIcon} alt="" />
        </a>

        <a aria-label="linkedin" href="https://www.linkedin.com/in/darshsoni04/" target="_blank" rel="noreferrer">
            <img
                class="social-link social-link-img"
                src={resolve("/assets/icons/linkedin.svg")}
                alt=""
            />
        </a>

        <select
            name="lang"
            class="lang-selector"
            bind:value={userLocale}
            onchange={() => updateLocale()}
        >
            <option value="en">en</option>
            <option value="fr">fr</option>
            <option value="hi">hi</option>
        </select>
    </div>
</header>
<div class="spacer"></div>

<style>
	:root {
		--spacing: clamp(1.5rem, 2vw, 5rem);
	}

    header {
        position: fixed;
        top: 0;
        left: 0;
        height: calc(var(--header-height) + var(--spacing));
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: var(--color-bg);
        border-bottom: var(--border-width) solid var(--color-border);
        padding: var(--padding-m) var(--padding-main-x);
        padding-top: calc(var(--spacing) + 1rem);

        z-index: 1000;
    }

	.titlebar {
		background: linear-gradient(transparent, var(--color-accent)) center
            no-repeat;
        background-position: 0px 100px;
        border-bottom: var(--border-width) solid transparent;
        border-top: var(--border-width) solid transparent;
		text-decoration: none;
		transition: .2s cubic-bezier(0,1.8,1,-1.51);
	}
	.titlebar:hover {
		background-position: 0px 7px;
        border-bottom: var(--border-width) solid var(--color-accent);
	}

    .titlebar,
    .social {
        display: flex;
        align-items: center;
        gap: var(--padding-m);
    }
    .titlebar,
    .titlebar-image {
        height: 100%;
    }

    .social-link {
        display: grid;
        place-content: center;
        height: 1.3em;
    }
    .social-link-img {
        filter: brightness(0) saturate(100%) invert(83%) sepia(17%)
            saturate(1115%) hue-rotate(225deg) brightness(91%) contrast(89%);
    }
    .social a:hover .social-link-img {
        filter: brightness(0) saturate(100%) invert(72%) sepia(17%)
            saturate(1253%) hue-rotate(295deg) brightness(91%) contrast(85%);
    }

    .lang-selector {
        color: var(--color-border);
        font-weight: bold;
    }

    .spacer {
        height: calc(var(--header-height) + var(--spacing));
    }
</style>
