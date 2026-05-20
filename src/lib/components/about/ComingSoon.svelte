<div class="coming-soon">
    <div class="coming-soon__marker">...</div>
    <h3>Coming soon</h3>
    <p>
        This part of the archive is still loading. More notes, experiments, and
        personal bits will land here later.
    </p>
</div>

<style>
    .coming-soon {
        min-height: 16rem;
        display: grid;
        place-items: center;
        align-content: center;
        gap: var(--padding-m);
        border: var(--border-width) dashed var(--color-border);
        background:
            linear-gradient(
                90deg,
                color-mix(in srgb, var(--color-border), transparent 88%) 1px,
                transparent 1px
            ),
            linear-gradient(
                color-mix(in srgb, var(--color-border), transparent 88%) 1px,
                transparent 1px
            );
        background-size: 1rem 1rem;
        text-align: center;
        padding: var(--padding-x);
    }

    .coming-soon__marker {
        border: var(--border-width) solid var(--color-border);
        padding: var(--padding-s) var(--padding-m);
        background-color: var(--color-dark);
        color: var(--color-accent);
        font-size: 1.4rem;
    }

    .coming-soon h3,
    .coming-soon p {
        margin: 0;
    }

    .coming-soon p {
        max-width: 34rem;
        opacity: 0.75;
        line-height: 1.5;
    }
</style>
