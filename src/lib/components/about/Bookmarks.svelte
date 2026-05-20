<script lang="ts">
    type Bookmark = {
        title: string;
        description: string;
        href: string;
        tag: string;
    };

    const bookmarks: Bookmark[] = [
        {
            title: "FMHY",
            description: "My favourite directory of cool open sourced and free alternatives of everything.",
            href: "https://fmhy.net/downloading",
            tag: "archive",
        },
        {
            title: "Anna's Archieve",
            description: "Open library of all the IEEE and other research papers.",
            href: "https://annas-archive.gl",
            tag: "research",
        },
        {
            title: "More coming soon",
            description: "",
            href: "#",
            tag: "",
        },
    ];
</script>

<div class="bookmarks">
    {#each bookmarks as bookmark}
        <a class="bookmark-entry" href={bookmark.href} target="_blank" rel="noreferrer">
            <div class="bookmark-entry__top">
                <h3>{bookmark.title}</h3>
                <span>{bookmark.tag}</span>
            </div>

            <p>{bookmark.description}</p>
        </a>
    {/each}
</div>

<style>
    .bookmarks {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--padding-m);
    }

    .bookmark-entry {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--padding-s);
        min-height: 9rem;
        border: var(--border-width) solid var(--color-border);
        padding: var(--padding-m);
        background:
            linear-gradient(var(--color-accent), var(--color-accent)) 0 0 /
                0.45rem 100% no-repeat,
            color-mix(in srgb, var(--color-dark), var(--color-bg) 25%);
        color: inherit;
        text-decoration: none;
        overflow: hidden;
    }

    .bookmark-entry:hover {
        transform: translate(0.12rem, 0.12rem);
        background:
            linear-gradient(var(--color-border), var(--color-border)) 0 0 /
                0.45rem 100% no-repeat,
            color-mix(in srgb, var(--color-dark), var(--color-bg) 45%);
    }

    .bookmark-entry__top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: var(--padding-s);
    }

    .bookmark-entry h3,
    .bookmark-entry p {
        margin: 0;
    }

    .bookmark-entry h3 {
        line-height: 1.2;
    }

    .bookmark-entry span {
        border: 1px solid color-mix(in srgb, var(--color-fg), transparent 70%);
        padding: 0.1rem 0.35rem;
        color: var(--color-border);
        font-size: 0.75rem;
        white-space: nowrap;
    }

    .bookmark-entry p {
        opacity: 0.75;
        line-height: 1.45;
    }

    @media screen and (max-width: 728px) {
        .bookmarks {
            grid-template-columns: 1fr;
        }
    }
</style>
