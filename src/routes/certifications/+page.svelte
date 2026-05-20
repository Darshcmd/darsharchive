<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import Window from "$lib/components/Window.svelte";

    const certifications = [
        {
            title: "Winter Space Internship Certificate",
            issuer: "India Space Labs, BSERC & IIT Madras",
            issued: "May 2026",
            credential: "https://www.linkedin.com/in/darshsoni04/details/experience/",
            image: "/assets/certifications/spaceinter.png",
        },
        {
            title: "Gemini Certified University Student",
            issuer: "Google",
            issued: "Jan 2026",
            credential: "https://edu.google.accredible.com/d795d1b8-ef11-4776-b187-88bfce7ed4d9#acc.m3uWED5X",
            image: "/assets/certifications/gemini-certified-university-student.png",
        },
        {
            title: "AWS - Solutions Architecture Job Simulation",
            issuer: "Forage",
            issued: "Jul 2025",
            credential: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_NHgY8B6JqmEquMzFC_1752764432917_completion_certificate.pdf",
            image: "/assets/certifications/aws-solutions-architecture-job-simulation.png",
        },
        {
            title: "Deloitte Australia - Data Analytics Job Simulation",
            issuer: "Forage",
            issued: "Jul 2025",
            credential: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_NHgY8B6JqmEquMzFC_1752762838006_completion_certificate.pdf",
            image: "/assets/certifications/deloitte-data-analytics-job-simulation.png",
        },
        {
            title: "Google Student Ambassador",
            issuer: "Google Gemini & Communique",
            issued: "Jan 2025",
            credential: "https://www.linkedin.com/in/darshsoni04/details/experience/",
            image: "/assets/certifications/google-student-ambassador.png",
        },
        {
            title: "Certificate of Participation",
            issuer: "DevTown, GDG VIT-AP & MSG VIT-AP",
            issued: "April 2025",
            credential: "https://www.linkedin.com/posts/darshsoni04_webdevelopment-html-css-ugcPost-7338447502985097216-qnpz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFq4BEBHzpWSOpwUz0NeVPAXC38zYgsS98",
            image: "/assets/certifications/devtown-participation.png",
        },
        {
            title: "Gemini Certified Educator",
            issuer: "Google",
            issued: "Jan 2026",
            credential: "https://edu.google.accredible.com/4507ee4a-330d-46aa-a81e-0cd71c65846d#acc.LdzmrAaJ",
            image: "/assets/certifications/gemini-certified-educator.png",
        },
        {
            title: "Google Certified Educator Level 1",
            issuer: "Google",
            issued: "Jan 2026",
            credential: "https://edu.google.accredible.com/05003c89-22ee-43e5-96fa-f11309a2de1f",
            image: "/assets/certifications/google-certified-educator-l1.png",
        }
    ];
</script>

<svelte:head>
    <title>{$_("page.certifications.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.certifications.title")}</h1>

<Separator />

<Window title="~/certifications">
    <div class="certification-list">
        {#each certifications as certification}
            <a class="certification-card" href={certification.credential}>
                <img
                    class="certification-card__img"
                    src={certification.image}
                    alt=""
                />

                <div class="certification-card__info">
                    <h3>{certification.title}</h3>
                    <p>{certification.issuer}</p>
                    <p>{certification.issued}</p>
                </div>
            </a>
        {/each}
    </div>
</Window>

<style>
    .certification-list {
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
    }

    .certification-card {
        position: relative;
        display: grid;
        grid-template-columns: 5rem 1fr;
        gap: var(--padding-s);
        background-color: var(--color-dark);
        overflow: hidden;
        padding: var(--padding-s);
        text-decoration: none;
    }

    .certification-card:hover::before {
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
    }

    .certification-card__img {
        width: 100%;
        height: auto;
    }

    .certification-card__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
</style>
