<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import Window from "$lib/components/Window.svelte";
    import { base } from "$app/paths";

    type Category = "All" | "Projects" | "Hackathons" | "Research Paper";

    type ProjectLink = {
        label: string;
        href: string;
    };

    type ProjectEntry = {
        category: Exclude<Category, "All">;
        title: string;
        description: string;
        image: string;
        mainLink: string;
        links: ProjectLink[];
    };

    const categories: Category[] = [
        "All",
        "Projects",
        "Hackathons",
        "Research Paper",
    ];

    let selectedCategory: Category = $state("All");

    const projects: ProjectEntry[] = [
        {
            category: "Research Paper",
            title: "Multi-Stage NL to ER Diagram and SQL Generator",
            description:
                "IEEE Research Project · Agentic AI · Multi-Dialect SQL Synthesis",
            image: "/assets/projects/nl2er2sql.png",
            mainLink: "https://nl-to-er-diagram-and-sql-generator-icnn9oeac.vercel.app/",
            links: [
                {
                    label: "Live",
                    href: "https://nl-to-er-diagram-and-sql-generator-icnn9oeac.vercel.app/",
                },
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/NL-to-ER-Diagram-and-SQL-Generator",
                },
            ],
        },
        {
            category: "Hackathons",
            title: "Oasis - Smart Water Management Dashboard",
            description:
                "Multi Sensor · IoT · Firebase · Real-Time Monitoring",
            image: "/assets/projects/oasis.png",
            mainLink: "https://github.com/Darshcmd/oasis",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/oasis",
                },
            ],
        },
        {
            category: "Projects",
            title: "Netflix Clone",
            description: "Frontend Development · HTML · CSS · JavaScript",
            image: "/assets/projects/netflixclone.png",
            mainLink: "https://darshcmd.github.io/Netflix_clone/",
            links: [
                {
                    label: "Live",
                    href: "https://darshcmd.github.io/Netflix_clone/",
                },
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/Netflix_clone",
                },
            ],
        },
        {
            category: "Hackathons",
            title: "Saheli - AI Powered Women Safety Ecosystem",
            description: "IoT · AI Safety · CAD Design",
            image: "/assets/projects/saheli.png",
            mainLink: "https://github.com/Darshcmd/SaheliApp",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/SaheliApp",
                },
            ],
        },
        {
            category: "Projects",
            title: "VIT Mess and Laundry Management System",
            description: "Full-Stack Web Application · React · Node.js · MySQL",
            image: "/assets/projects/messm.png",
            mainLink: "https://github.com/Darshcmd/messmanagement",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/messmanagement",
                },
            ],
        },
        {
            category: "Projects",
            title: "Cessna 210 (NASA Variant) - OpenVSP Aircraft Model",
            description: "Aerospace Design · OpenVSP · BSERC & IIT Madras Internship",
            image: "/assets/projects/cessna.png",
            mainLink: "https://github.com/Darshcmd/Cessna210_OpenVSP",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/Cessna210_OpenVSP",
                },
            ],
        },
        {
            category: "Projects",
            title: "Python LAN Chat App",
            description: "Socket Programming · TCP/IP · Multithreaded Networking",
            image: "/assets/projects/lanchat.png",
            mainLink: "https://github.com/Darshcmd/LAN_Chat",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/LAN_Chat",
                },
            ],
        },
        {
            category: "Projects",
            title: "Python Port Scanner",
            description: "Cybersecurity · Socket Programming · TCP/IP Networking",
            image: "/assets/projects/portscan.png",
            mainLink: "https://github.com/Darshcmd/PortScanner",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/PortScanner",
                },
            ],
        },
        {
            category: "Hackathons",
            title: "Tetris - Classic Block Puzzle Game",
            description: "Amazon Q CLI · Python · Pygame",
            image: "/assets/projects/tetris.png",
            mainLink: "https://github.com/Darshcmd/Tetris_using_Amazon_Q_CLI/",
            links: [
                {
                    label: "Article",
                    href: "https://community.aws/content/2yMvQYQbFOQ0ZeEUNkwH2yWdB3f",
                },
                {
                    label: "GitHub",
                    href: "https://github.com/Darshcmd/Tetris_using_Amazon_Q_CLI/",
                },
            ],
        },
    ];

    const filteredProjects = $derived(
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory),
    );
</script>

<svelte:head>
    <title>{$_("page.projects.title")}</title>
</svelte:head>

<h1 class="title">Projects & Research</h1>

<Separator />

<div class="project-filters">
    {#each categories as category}
        <button
            type="button"
            class:project-filter-active={selectedCategory === category}
            onclick={() => (selectedCategory = category)}
        >
            {category}
        </button>
    {/each}
</div>

<Window title="~/projects">
    <div class="project-list">
        {#each filteredProjects as project}
            <article class="project-card">
                <a
                    class="project-card__main"
                    href={project.mainLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <figure class="project-card__image-box">
                        <img
                            class="project-card__image"
                            src={project.image.startsWith('/') ? base + project.image : project.image}
                            alt={project.title}
                            loading="lazy"
                        />

                        <span class="project-card__view">view</span>
                    </figure>

                    <div class="project-card__info">
                        <div class="project-card__top">
                            <h3>{project.title}</h3>
                            <span>{project.category}</span>
                        </div>

                        <p>{project.description}</p>
                    </div>
                </a>

                <div class="project-card__links">
                    {#each project.links as link}
                        <a
                            class={`project-link project-link--${link.label.toLowerCase()}`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.label}
                        </a>
                    {/each}
                </div>
            </article>
        {/each}
    </div>
</Window>

<style>
    .project-filters {
        display: flex;
        flex-wrap: wrap;
        gap: var(--padding-s);
        margin-bottom: var(--padding-m);
    }

    .project-filters button {
        border: var(--border-width) solid var(--color-border);
        padding: var(--padding-s) var(--padding-m);
        background: linear-gradient(transparent, var(--color-accent)) center
            no-repeat;
        background-position: 0px 100px;
        color: inherit;
        font-family: "departure-mono";
        cursor: pointer;
    }

    .project-filters button:hover,
    .project-filter-active {
        background-position: 0px 20px !important;
    }

    .project-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--padding-m);
    }

    .project-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: var(--color-dark);
        overflow: hidden;
        padding: var(--padding-s);
    }

    .project-card:hover::before {
        content: "";
        position: absolute;
        top: 0%;
        left: -70%;
        height: 100%;
        width: 5rem;
        animation: shine 2s;
        background-color: var(--color-fg);
        opacity: 0.1;
        transform: skewX(-25deg);
        pointer-events: none;
    }

    .project-card__main {
        display: flex;
        flex-direction: column;
        gap: var(--padding-s);
        color: inherit;
        text-decoration: none;
    }

    .project-card__image-box {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        margin: 0;
        overflow: hidden;
        background-color: var(--color-bg);
    }

    .project-card__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.2s ease;
    }

    .project-card:hover .project-card__image {
        transform: scale(1.04);
    }

    .project-card__view {
        position: absolute;
        inset: 50% auto auto 50%;
        transform: translate(-50%, -50%);
        border: var(--border-width) solid var(--color-border);
        background-color: var(--color-dark);
        padding: var(--padding-xs) var(--padding-s);
        opacity: 0;
        transition: opacity 0.2s ease;
        font-size: 0.85rem;
    }

    .project-card:hover .project-card__view {
        opacity: 1;
    }

    .project-card__info {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .project-card__top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--padding-s);
    }

    .project-card__top h3 {
        margin: 0;
        line-height: 1.3;
    }

    .project-card__top span {
        white-space: nowrap;
        opacity: 0.65;
        font-size: 0.8rem;
    }

    .project-card__info p {
        margin: 0;
        opacity: 0.75;
        line-height: 1.45;
    }

    .project-card__links {
        display: flex;
        flex-wrap: wrap;
        gap: var(--padding-s);
        margin-top: var(--padding-s);
        padding-top: var(--padding-s);
        border-top: 1px solid color-mix(in srgb, var(--color-fg), transparent 85%);
    }

    .project-link {
        --link-accent: var(--color-border);

        position: relative;
        display: inline-flex;
        align-items: center;
        min-height: 2rem;
        border: var(--border-width) solid var(--color-border);
        border-right-color: color-mix(in srgb, var(--link-accent), var(--color-dark) 35%);
        border-bottom-color: color-mix(in srgb, var(--link-accent), var(--color-dark) 35%);
        padding: 0.3rem 0.7rem 0.3rem 1.7rem;
        color: inherit;
        text-decoration: none;
        font-size: 0.85rem;
        line-height: 1;
        background:
            linear-gradient(var(--link-accent), var(--link-accent)) 0 0 / 0.5rem
                100% no-repeat,
            color-mix(in srgb, var(--color-bg), var(--color-dark) 42%);
        box-shadow:
            inset 0 0 0 1px color-mix(in srgb, var(--color-fg), transparent 92%),
            0.18rem 0.18rem 0 color-mix(in srgb, var(--color-dark), transparent 10%);
    }

    .project-link::before {
        content: ">";
        position: absolute;
        left: 0.8rem;
        color: var(--link-accent);
    }

    .project-link--live {
        --link-accent: #7cd6b4;
    }

    .project-link--github {
        --link-accent: var(--color-border);
    }

    .project-link--github::before {
        content: "#";
    }

    .project-link--article {
        --link-accent: var(--color-accent);
    }

    .project-link--article::before {
        content: "/";
    }

    .project-link:hover,
    .project-link:focus-visible {
        background:
            linear-gradient(var(--link-accent), var(--link-accent)) 0 0 / 100%
                100% no-repeat,
            var(--color-bg);
        color: var(--color-dark);
        outline: none;
        transform: translate(0.12rem, 0.12rem);
        box-shadow:
            inset 0 0 0 1px color-mix(in srgb, var(--color-fg), transparent 72%),
            0.06rem 0.06rem 0 color-mix(in srgb, var(--color-dark), transparent 10%);
    }

    .project-link:hover::before,
    .project-link:focus-visible::before {
        color: var(--color-dark);
    }

    @keyframes shine {
        0% {
            left: -20%;
            filter: blur(10px);
        }

        50% {
            filter: blur(0px);
        }

        100% {
            left: 110%;
            filter: blur(10px);
        }
    }

    @media screen and (max-width: 800px) {
        .project-list {
            grid-template-columns: 1fr;
        }
    }

    @media screen and (max-width: 600px) {
        .project-card__top {
            flex-direction: column;
            gap: 0.25rem;
        }

        .project-card__top span {
            white-space: normal;
        }
    }
</style>
