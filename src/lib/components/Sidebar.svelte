<script lang="ts">
    import { _ } from "svelte-i18n";
    import { resolve } from "$app/paths";
    let isOpen = $state(false);
</script>

<div class={`container ${isOpen ? "container--open" : ""}`} id="sidebar">
    <button
        aria-label="menu switch"
        class={`container__switch ${isOpen ? "switch-open" : ""}`}
        onclick={() => (isOpen = !isOpen)}
    >
        <svg
            class="container__switch__icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"
            /></svg
        >
    </button>

    <article class="container__content">
        <div class="sidebar-title">
            <h3 class="subtitle">Filesystem</h3>
        </div>

        <div class="sidebar-title__separator"></div>

        <a class="sidebar-link" href={resolve("/about")}>
            <svg
                class="sidebar-link-icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    d="M16 15a1 1 0 0 1-2 0V8A6 6 0 1 0 2 8v7a1 1 0 0 1-2 0V8a8 8 0 1 1 16 0v7zm-4-3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm2-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill-rule="evenodd"
                /></svg
            >
            <p>{$_("page.sidebar.about")}</p>
        </a>
        <a class="sidebar-link" href={resolve("/experience")}>
            <svg
                class="sidebar-link-icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    d="M6 1h4v2h5v12H1V3h5V1zm1 2h2V2H7v1zM3 5v2h10V5H3zm0 4v4h10V9h-3v1H6V9H3z"
                    fill-rule="evenodd"
                /></svg
            >
            <p>Experience</p>
        </a>
        <a class="sidebar-link" href={resolve("/projects")}>
            <svg
                class="sidebar-link-icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    d="M5.5 3 0 8l5.5 5 1.4-1.5L3 8l3.9-3.5L5.5 3zm5 0L9.1 4.5 13 8l-3.9 3.5 1.4 1.5L16 8l-5.5-5z"
                    fill-rule="evenodd"
                /></svg
            >
            <p>{$_("page.sidebar.proyects")}</p>
        </a>
        <a class="sidebar-link" href={resolve("/certifications")}>
            <svg
                class="sidebar-link-icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    d="M8 0 10 2.2l3-.4.6 3L16 6.5l-1.4 2.7.5 3-3 .6-2 2.2L8 13.8 5.9 15l-2-2.2-3-.6.5-3L0 6.5l2.4-1.7.6-3 3 .4L8 0zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    fill-rule="evenodd"
                /></svg
            >
            <p>{$_("page.sidebar.certifications")}</p>
        </a>
        <a class="sidebar-link" href={resolve("/contact")}>
            <svg
                class="sidebar-link-icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M 0,0 H 16 V 12 H 4 V 4 h 8 v 6 h 2 V 2 H 2 v 12 h 14 v 2 H 0 Z M 10,10 V 6 H 6 v 4 z"
                />
            </svg>

            <p>{$_("page.sidebar.contact")}</p>
        </a>
    </article>
</div>

<style>
    :root {
        --text-padding-h: 0.3rem;
        --text-padding-v: 0.4rem;
        --button-height: 3rem;
        --button-width: 5rem;
    }

    .container {
        width: 100%;
        position: fixed;
        top: calc(100dvh - var(--button-height) - clamp(3.5rem, 2.6vw, 7rem));
        bottom: 0;

        display: flex;
        flex-direction: column;

        padding: 0 var(--padding-main-x);
        pointer-events: none;
        transition: 0s;
        z-index: 100;
    }
    .container * {
        pointer-events: all;
    }

    .container.container--open {
        top: auto;
        bottom: 4rem;
        filter: drop-shadow(0px 0px 20px #000000);
        transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    /* SIDEBAR LINKS */
    .container__content {
        width: 100%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        background: var(--color-bg);
        border: var(--border-width) solid var(--color-border);
        opacity: 0;
        padding: var(--padding-s);
        transition: opacity 0s;
    }

    .container--open .container__content {
        opacity: 1;
        transition: opacity 0.2s;
    }

    .sidebar-title {
        height: calc(
            var(--button-height) - (var(--padding-s) * 2) -
                (var(--border-width) * 2)
        );
        display: flex;
        align-items: center;
        padding: var(--text-padding-v) var(--text-padding-h);
    }

    .sidebar-title__separator {
        height: var(--border-width);
        width: 100%;
        margin: var(--padding-s) 0;
        background-color: var(--color-border);
    }

    .sidebar-link {
        display: flex;
        align-items: center;
        gap: var(--padding-s);

        background: linear-gradient(transparent, var(--color-accent)) center
            no-repeat;
        background-position: 0px 100px;
        border-bottom: var(--border-width) solid transparent;
        padding: var(--text-padding-h) var(--padding-s);
        text-decoration: none;
    }

    .sidebar-link:hover {
        background-position: 0px 20px;
        border-bottom: var(--border-width) solid var(--color-accent);
    }

    .sidebar-link-icon {
        fill: var(--color-fg);
        height: 1em;
    }

    /* MENU SWITCH */
    .container__switch {
        height: var(--button-height);
        width: var(--button-width);

        background: var(--color-bg);
        border: var(--border-width) solid var(--color-border);
        padding: var(--padding-s);
        margin-left: auto;
    }
    .switch-open p {
        transform: rotate(180deg);
    }

    .container--open .container__switch {
        border-bottom-width: 0px;
    }
    .switch-open .container__switch__icon {
        transform: rotate(90deg);
    }

    .container__switch__icon {
        width: 1.5rem;
        fill: var(--color-fg);
    }
</style>
