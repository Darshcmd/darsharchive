<script lang="ts">
    import { resolve } from "$app/paths";
    import { _, json as i18nJson } from "svelte-i18n";
    import WavyText from "$lib/components/WavyText.svelte";
    import Separator from "$lib/components/Separator.svelte";
    import Card from "$lib/components/index/Card.svelte";
    // Images
    import KimuGithubImg from "$lib/assets/images/darshmain.webp?enhanced";

    const messages: string[] = $i18nJson("page.home.greeting") as string[];
    const visitorPrompts: string[] = [
        "Curious what I can build? Ask me about my projects!",
        "Hiring? Ask about my experience and skills!",
        "Want to know what tech I work with? Just ask!",
        "Looking for a developer? Ask me about my work!",
        "Wondering if I'd be a good fit? Ask me anything!",
        "Need someone who builds cool stuff? Ask away!",
        "Recruiters welcome — ask me about my stack!",
        "Think I could help your team? Ask me about my projects!",
    ];

    let currentMessage = $state(0);
    let question = $state("");
    let answer = $state(messages[0]);
    let isLoading = $state(false);
    let isChatMode = $state(false);
    let autoRotateInterval: ReturnType<typeof setInterval> | undefined;

    function startAutoRotate() {
        stopAutoRotate();
        autoRotateInterval = setInterval(() => {
            if (!isChatMode && !isLoading) {
                currentMessage = Math.floor(Math.random() * messages.length);
                if (currentMessage === 0) currentMessage = 1;
                answer = messages[currentMessage];
            }
        }, 8000);
    }

    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = undefined;
        }
    }

    function randomMessage() {
        if (isChatMode) {
            isChatMode = false;
            startAutoRotate();
        }
        currentMessage = Math.floor(Math.random() * messages.length);
        if (currentMessage === 0) currentMessage = 1;
        answer = messages[currentMessage];
    }

    function onDialogClick(e: MouseEvent) {
        const target = e.target as HTMLElement;
        if (target.closest("form") || target.closest("input") || target.closest("button")) {
            return;
        }
        if (!isLoading) {
            randomMessage();
        }
    }

    async function askDarsh() {
        const trimmedQuestion = question.trim();

        if (!trimmedQuestion || isLoading) return;

        stopAutoRotate();
        isLoading = true;
        isChatMode = true;
        answer = "Thinking through the archive...";

        try {
            const response = await fetch(resolve("/api/darsh"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question: trimmedQuestion }),
            });

            const data = (await response.json()) as { answer?: string };
            answer =
                data.answer || "I could not find an answer in the archive yet.";
            question = "";
        } catch {
            answer =
                "I could not connect to Gemini right now. Try again in a moment.";
        } finally {
            isLoading = false;
        }
    }

    function onChatSubmit(event: Event) {
        event.preventDefault();
        askDarsh();
    }

    $effect(() => {
        startAutoRotate();
        return () => stopAutoRotate();
    });
</script>

<svelte:head>
    <title>Darsh Archive</title>
</svelte:head>

<h1 class="title">
    <WavyText text="Darsh Archive" />
</h1>

<Separator />

<div class="container">
    <div class="character-container">
        <div class="character-dialog-container">
            <enhanced:img
                class="character-img"
                src={KimuGithubImg}
                alt="Profile of Darsh"
                loading="lazy"
            />

            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
                class="character-dialog"
                onclick={onDialogClick}
                role="button"
                tabindex="0"
                onkeydown={(e) => { if (e.key === 'Enter' && !(e.target as HTMLElement).closest('form')) onDialogClick(e as unknown as MouseEvent); }}
            >
                <!-- Connector for the speech balloon -->
                <svg
                    class="character-dialog-connector"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path d="M20.697 24L9.303 16.003 20.697 8z" /></svg
                >

                <div class="character-dialog__name-container">
                    <h3 class="subtitle">Darsh</h3>

                    <svg
                        class="character-dialog__next"
                        fill="var(--color-fg)"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 12 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            d="m 12.000001,8 v 4 H 8 v 4 H 4 v 4 H 0 V 0 h 4 v 4 h 4 v 4 z"
                        /></svg
                    >
                </div>

                {#key answer}
                    <span class="character-dialog__text">
                        <WavyText text={answer} fadeIn={true} delay={0.006} />
                    </span>
                {/key}

                <form
                    class="character-chat"
                    onsubmit={onChatSubmit}
                >
                    <input
                        bind:value={question}
                        class="character-chat__input"
                        type="text"
                        maxlength="500"
                        placeholder="Ask Darsh..."
                        aria-label="Ask Darsh"
                        disabled={isLoading}
                    />

                    <button
                        class="character-chat__button"
                        type="submit"
                        aria-label="Send question"
                        disabled={isLoading || !question.trim()}
                    >
                        <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M0 1.5 16 8 0 14.5V9l8-1-8-1V1.5z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <div class="vim-title">
        <p>index.md</p>
        <p>1,1</p>
        <p>All</p>
    </div>

    <div class="cards-container">
        <Card
            icon={"<path d='M16 15a1 1 0 0 1-2 0V8A6 6 0 1 0 2 8v7a1 1 0 0 1-2 0V8a8 8 0 1 1 16 0v7zm-4-3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm2-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' fill-rule='evenodd'/>"}
            name={$_("page.home.links.about")}
            link={resolve("/about")}
            newtab={false}
        />
        <Card
            icon={"<path d='M5.5 3 0 8l5.5 5 1.4-1.5L3 8l3.9-3.5L5.5 3zm5 0L9.1 4.5 13 8l-3.9 3.5 1.4 1.5L16 8l-5.5-5z'/>"}
            name={$_("page.home.links.projects")}
            link={resolve("/projects")}
            newtab={false}
        />
        <Card
            icon={"<path d='M8 0 10 2.2l3-.4.6 3 2.4 1.7-1.4 2.7.5 3-3 .6-2 2.2L8 13.8 5.9 15l-2-2.2-3-.6.5-3L0 6.5 2.4 4.8l.6-3 3 .4L8 0zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'/>"}
            name={$_("page.home.links.certifications")}
            link={resolve("/certifications")}
            newtab={false}
        />
        <Card
            icon={"<path d='M3 0h7l3 3v13H3V0zm6 1.5V4h2.5L9 1.5zM5 7h6V6H5v1zm0 3h6V9H5v1zm0 3h4v-1H5v1z'/>"}
            name={$_("page.home.links.resume")}
            link={"/resume.pdf"}
        />
        <Card
            icon={"<path d='M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0h-13zM5 13H2.5V6H5v7zM3.75 4.8a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zM13.5 13H11V9.5c0-.8 0-1.8-1.1-1.8s-1.3.9-1.3 1.7V13H6V6h2.4v1h.1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.5 2.8 3.5V13z'/>"}
            name={$_("page.home.links.linkedin")}
            link={"https://www.linkedin.com/in/darshsoni04/"}
        />
        <Card
            icon={"<path d='m 5.3383103,10.224412 c 0.8057324,-0.05279 1.4392268,-0.7193468 1.4392268,-1.5341444 0,-0.027195 -5.333e-4,-0.054391 -0.00213,-0.081586 v 0.00373 c 0.0016,-0.025596 0.00267,-0.055457 0.00267,-0.085852 0,-0.8131978 -0.6345609,-1.4776204 -1.4354941,-1.5261457 h -0.00427 c -0.8046686,0.043728 -1.440296,0.7065509 -1.440296,1.518149 0,0.033061 0.00107,0.065589 0.0032,0.098117 v -0.00427 c -0.0016,0.026662 -0.00267,0.058124 -0.00267,0.089585 0,0.8121313 0.6350942,1.4760211 1.4360274,1.5218801 h 0.00427 z m 5.3143147,0 c 0.805732,-0.05279 1.439226,-0.7193468 1.439226,-1.5341444 0,-0.027195 -5.33e-4,-0.054391 -0.0021,-0.081586 v 0.00373 c 0.0016,-0.025596 0.0027,-0.055457 0.0027,-0.085852 0,-0.8131978 -0.634561,-1.4776204 -1.435494,-1.5261457 h -0.0043 c -0.8046663,0.043726 -1.4402937,0.7065509 -1.4402937,1.518147 0,0.033061 0.00107,0.065589 0.0032,0.098117 v -0.00427 c -0.0016,0.025596 -0.00267,0.055458 -0.00267,0.085852 0,0.8131978 0.6345609,1.4776211 1.4354947,1.5261461 z M 2.458257,2.9200293 C 3.3983669,2.4763699 4.4904516,2.1254951 5.6337277,1.9223289 l 0.079453,-0.011731 c 0.00267,-5.333e-4 0.00587,-0.00107 0.00907,-0.00107 0.018663,0 0.034661,0.010132 0.043193,0.025062 v 0 C 5.8902229,2.153757 6.025667,2.4273114 6.14778,2.707798 l 0.02293,0.05919 C 6.7199518,2.679003 7.3534462,2.6288777 7.998672,2.6288777 c 0.6452258,0 1.2787202,0.050125 1.8967505,0.1466422 l -0.068789,-0.00907 C 9.9706049,2.4305109 10.108182,2.1574897 10.260157,1.8930005 l -0.02186,0.04106 c 0.0091,-0.015464 0.0256,-0.025062 0.04426,-0.025062 0.0027,0 0.0059,0 0.0085,5.333e-4 h -5.33e-4 c 1.222757,0.2148975 2.315375,0.5652391 3.336005,1.0435594 l -0.08052,-0.034128 c 0.0091,0.00373 0.01653,0.010132 0.02133,0.01813 v 0 C 15.089218,5.091934 16,7.7730872 16,10.667005 c 0,0.483653 -0.0256,0.960907 -0.07519,1.431228 l 0.0048,-0.05866 c -0.0016,0.01546 -0.0096,0.02826 -0.0208,0.03733 v 0 c -1.141143,0.853724 -2.467855,1.541609 -3.899617,1.993267 l -0.09385,0.0256 c -0.0043,0.0016 -0.0096,0.0021 -0.01493,0.0021 -0.01706,0 -0.03199,-0.008 -0.04106,-0.02026 v 0 C 11.574071,13.693701 11.30265,13.258573 11.067489,12.802115 l -0.02506,-0.05332 c -0.0032,-0.0064 -0.0053,-0.0144 -0.0053,-0.02293 0,-0.02186 0.01386,-0.03999 0.03306,-0.04746 h 5.33e-4 c 0.486319,-0.187702 0.897451,-0.387668 1.288852,-0.616963 l -0.04106,0.0224 c 0.01546,-0.0091 0.0256,-0.0256 0.0256,-0.04426 0,-0.01653 -0.008,-0.03146 -0.02026,-0.04053 v 0 c -0.08372,-0.06292 -0.167972,-0.127978 -0.247959,-0.1941 -0.0085,-0.0069 -0.01973,-0.0112 -0.03146,-0.0112 -0.0075,0 -0.0144,0.0016 -0.02026,0.0043 h 5.34e-4 c -1.17745,0.565765 -2.5596198,0.896376 -4.0185767,0.896376 -1.4589568,0 -2.8416597,-0.330612 -4.0755874,-0.920913 l 0.057057,0.02453 c -0.0064,-0.0032 -0.013331,-0.0048 -0.02133,-0.0048 -0.011731,0 -0.02293,0.0043 -0.031461,0.0112 v 0 c -0.079987,0.06612 -0.1637061,0.132244 -0.248492,0.194634 -0.012265,0.0096 -0.020263,0.02453 -0.020263,0.04106 0,0.01866 0.010132,0.03466 0.024529,0.04373 v 0 c 0.3524746,0.210631 0.7636061,0.410065 1.1918014,0.574837 l 0.055991,0.0192 c 0.019197,0.0075 0.033061,0.02613 0.033061,0.04746 0,0.0085 -0.00213,0.01653 -0.00587,0.02346 v -5.34e-4 C 4.6984128,13.260208 4.4275246,13.694802 4.1278413,14.107 l 0.02133,-0.0304 c -0.00907,0.0128 -0.024529,0.02133 -0.04106,0.02133 -0.00533,0 -0.010665,-0.0011 -0.015464,-0.0021 h 5.333e-4 C 2.5654391,13.620112 1.2360607,12.932228 0.05865689,12.052374 l 0.03466089,0.02506 c -0.01173138,-0.0085 -0.0191968,-0.02186 -0.02079653,-0.03679 v 0 C 0.02612898,11.622578 0,11.137327 0,10.646209 0,7.7586896 0.91291451,5.0844686 2.4651891,2.8960333 l -0.027729,0.041593 c 0.00427,-0.00853 0.011731,-0.015464 0.020263,-0.019197 v 0 z'/>"}
            name={$_("page.home.links.github")}
            link={"https://github.com/Darshcmd"}
        />
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: var(--padding-x);
    }

    /* CHARACTER */
    .character-container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        gap: var(--padding-m);
    }

    .character-dialog-container {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: 5rem minmax(0, 1fr);
        gap: var(--padding-x);
        width: min(100%, 80rem);
    }

    .character-img {
        width: 100%;
        height: auto;
        justify-content: center;
    }

    .character-dialog {
        position: relative;
        width: 100%;
        padding: var(--padding-m);
        border: var(--color-border) dashed var(--border-width);
        background: linear-gradient(transparent, var(--color-border));
        background-repeat: no-repeat;
        background-position: 0px 50px;
        cursor: pointer;
    }

    .character-dialog__name-container {
        display: flex;
        justify-content: space-between;
    }
    .character-dialog__next {
        height: 1rem;
        width: 1rem;
        top: 0;
        animation: messageArrow 2s ease infinite;
    }

    .character-dialog__text {
        display: block;
        min-height: 4rem;
        margin-top: var(--padding-s);
        font-size: large;
        line-height: 1.45;
        word-break: break-word;
        overflow-wrap: break-word;
        white-space: pre-wrap;
    }

    .character-dialog-connector {
        position: absolute;
        left: -1.1rem;
        height: 1.7rem;
        fill: var(--color-border);
    }

    .character-chat {
        display: flex;
        align-items: center;
        gap: var(--padding-s);
        margin-top: var(--padding-m);
        border-top: var(--border-width) dashed var(--color-border);
        padding-top: var(--padding-s);
    }

    .character-chat__input {
        width: 100%;
        min-width: 0;
        border: none;
        border-bottom: var(--border-width) solid var(--color-border);
        background: color-mix(in srgb, var(--color-dark), transparent 35%);
        color: var(--color-fg);
        font-family: "departure-mono";
        font-size: 1rem;
        padding: var(--padding-s);
        outline: none;
    }

    .character-chat__input::placeholder {
        color: color-mix(in srgb, var(--color-fg), transparent 45%);
    }

    .character-chat__input:focus {
        border-bottom-color: var(--color-accent);
    }

    .character-chat__button {
        display: grid;
        place-content: center;
        width: 2.5rem;
        height: 2.5rem;
        flex: 0 0 2.5rem;
        border: var(--border-width) solid var(--color-border);
        background-color: var(--color-dark);
    }

    .character-chat__button svg {
        width: 1rem;
        height: 1rem;
        fill: var(--color-fg);
    }

    .character-chat__button:hover:not(:disabled),
    .character-chat__button:focus-visible:not(:disabled) {
        background-color: var(--color-fg);
    }

    .character-chat__button:hover:not(:disabled) svg,
    .character-chat__button:focus-visible:not(:disabled) svg {
        fill: var(--color-bg);
    }

    .character-chat__button:disabled,
    .character-chat__input:disabled {
        cursor: wait;
        opacity: 0.65;
    }

    /* SOCIALS */
    .vim-title {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 15% min-content;
        background-color: var(--color-fg);
    }
    .vim-title p {
        color: var(--color-bg);
        padding: 0 var(--padding-s);
    }

    /* CARDS */
    .cards-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--padding-m);
    }

    /* ANIMATIONS */
    @keyframes messageArrow {
        0%,
        100% {
            margin-right: 0rem;
        }
        50% {
            margin-right: 1rem;
        }
    }

    /* RESPONSIVE */
    @media screen and (max-width: 728px) {
        .character-container {
            flex-direction: column;
        }
        .character-dialog-container {
            width: 100%;
        }

        .cards-container {
            grid-template-columns: 1fr;
        }
    }
</style>