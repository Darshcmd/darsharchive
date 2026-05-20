<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import CharacterStats from "$lib/components/about/CharacterStats.svelte";
    import Tools from "$lib/components/about/Tools.svelte";
    import Apps from "$lib/components/about/Apps.svelte";
    import Bookmarks from "$lib/components/about/Bookmarks.svelte";
    import Gallery from "$lib/components/about/Gallery.svelte";
    import ComingSoon from "$lib/components/about/ComingSoon.svelte";
    import { onMount } from "svelte";

    let selectedProperty:
        | "presentation"
        | "tools"
        | "apps"
        | "gallery"
        | "bookmarks"
        | "coming soon"
        | "" = $state("presentation");

    onMount(() => {
        if (window.innerWidth < 728) {
            selectedProperty = "";
        }
    });
</script>

<svelte:head>
    <title>{$_("page.about.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.about.title")}</h1>

<Separator />

<div class="about">
    <div class="about-character">
        <!-- On mobile we hide the stats when other things are shown -->
        <div class={`${selectedProperty != "" ? "stats-responsive" : ""}`}>
            <CharacterStats />
        </div>

        <div class="about-character-selector">
            <button
                aria-label="character status"
                class={`${selectedProperty === "" ? "property-selector-active" : ""} about-character-property mobile-only`}
                onclick={() => (selectedProperty = "")}
            >
                <svg
                    class="property-selector"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z"
                    />
                </svg>
            </button>
            <button
                aria-label="presentation"
                class={`${selectedProperty === "presentation" ? "property-selector-active" : ""} about-character-property`}
                onclick={() => (selectedProperty = "presentation")}
            >
                <svg
                    class="property-selector"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0h14v2h2v14H0V0zm2 2v12h12V4h-1.998V2H2zm2 6h8v2H4V8zm0-4h6v2H4V4z"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>

            <button
                aria-label="tools"
                class={`${selectedProperty === "tools" ? "property-selector-active" : ""} about-character-property`}
                onclick={() => (selectedProperty = "tools")}
            >
                <svg
                    class="property-selector"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0h16v16H0V0zm2 2v2h2V2H2zm4 0v2h8V2H6zM2 6v8h12V6H2z"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>

            <button
                aria-label="applications"
                class={`${selectedProperty === "apps" ? "property-selector-active" : ""} about-character-property`}
                onclick={() => (selectedProperty = "apps")}
            >
                <svg
                    class="property-selector"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0h7v7H0V0zm2 2v3h3V2H2zM0 9h7v7H0V9zm9-9h7v7H9V0zm2 2v3h3V2h-3zM9 9h7v7H9V9zm2 2v3h3v-3h-3zm-9 0v3h3v-3H2z"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>

            <button
                aria-label="gallery"
                class={`${selectedProperty === "gallery" ? "property-selector-active" : ""} about-character-property`}
                onclick={() => (selectedProperty = "gallery")}
            >
                <svg
                    class="property-selector"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 8v5h4V8h-2V6H8v2zm-8 8h16V0H0v16zm2-2V2h12v12H2zM8 4h2V2H8v2zm2 2h2V4h-2v2zm-1 6v-2h2v2H9z"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>

            <button
                aria-label="bookmarks"
                class={`${selectedProperty === "bookmarks" ? "property-selector-active" : ""} about-character-property`}
                onclick={() => (selectedProperty = "bookmarks")}
            >
                <svg
                    class="property-selector"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 0h10v16l-5-3-5 3V0zm2 2v10.466l3-1.8 3 1.8V2H5zm1 2h4v2H6V4z"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>

            <button
                aria-label="coming soon"
                class={`${selectedProperty === "coming soon" ? "property-selector-active" : ""} about-character-property`}
                onclick={() => (selectedProperty = "coming soon")}
            >
                <svg
                    class="property-selector"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 2h16v12H0V2zm2 2v8h12V4H2zm2 2h2v2H4V6zm3 0h2v2H7V6zm3 0h2v2h-2V6z"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
    </div>

    <div class="about-showed-property">
        <h2>{selectedProperty}</h2>
        {#if selectedProperty === "presentation"}
            <p>{@html $_("page.about.presentation")}</p>
        {:else if selectedProperty === "tools"}
            <Tools />
        {:else if selectedProperty === "apps"}
            <Apps />
        {:else if selectedProperty === "gallery"}
            <Gallery />
        {:else if selectedProperty === "bookmarks"}
            <Bookmarks />
        {:else if selectedProperty === "coming soon"}
            <ComingSoon />
        {/if}
    </div>
</div>

<style>
    /* About info */
    .about {
        height: 30rem;
        display: flex;
        border: var(--border-width) solid var(--color-border);
        overflow: hidden;
    }

    .about-character {
        display: flex;
    }

    /* Buttons */
    .about-character-selector {
        width: 2rem;
    }

    .property-selector {
        width: 100%;
        fill: var(--color-fg);
    }
    .property-selector-active {
        background-color: var(--color-fg);
    }
    .property-selector-active svg {
        fill: var(--color-bg);
    }

    .about-character-property {
        display: grid;
        place-content: center;
        border: var(--border-width) solid var(--color-border);
        border-left: none;
        padding: var(--padding-s);
    }
    .about-character-property:nth-child(2) {
        border-top: none;
    }
    .about-character-property:not(:last-child) {
        border-bottom: none;
    }

    /* Showed Property */
    .about-showed-property {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
        padding: var(--padding-x);
        overflow-y: scroll;
    }
    .about-showed-property h2 {
        text-transform: capitalize;
    }

    /* Responsiveness on the RPG stats */
    @media screen and (max-width: 728px) {
        .stats-responsive {
            width: 0;
            opacity: 0;
            pointer-events: none;
        }

        .about-character-property:nth-child(2) {
            border-top: var(--color-border) solid var(--border-width);
        }
        .about-character-property:nth-child(1) {
            border-top: none;
        }
    }
</style>
