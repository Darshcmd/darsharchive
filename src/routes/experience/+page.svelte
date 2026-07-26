<script lang="ts">
    import Separator from "$lib/components/Separator.svelte";
    import Window from "$lib/components/Window.svelte";
    import { base } from "$app/paths";

    const experiences = [
        {
            title: "Summer AI Intern",
            organization: "Centre for Cyber Physical Systems (VIT Chennai)",
            duration: "May - Aug 2026",
            type: "Internship",
            link: "#",
            image: "/assets/experience/vitc.jpg",
            description:
                "Worked as a Summer AI Intern at the Centre for Cyber Physical Systems (CCPS), VIT Chennai."
        },
        {
            title: "Space Tech Intern",
            organization: "Bharat Space Education Research Centre (BSERC)",
            duration: "Jan - Apr 2026",
            type: "Internship",
            link: "#",
            image: "/assets/experience/bserc.png",
            description:
                "Completed a winter internship at BSERC, collaborating with India Space Labs and IIT Madras."
        },
        {
            title: "Open Source Contributor",
            organization: "Girl Script Summer of Code (GSSOC)",
            duration: "Jul - Oct 2025",
            type: "Open Source",
            link: "#",
            image: "/assets/experience/girlscript.png",
            description:
                "Contributed to open-source projects and community-driven repositories during GirlScript Summer of Code (GSSOC'25)."
        },
        {
            title: "Team Lead",
            organization: "French Club (VIT Chennai)",
            duration: "Jul 2025 - Apr 2026",
            type: "Leadership",
            link: "#",
            image: "/assets/experience/fc.png",
            description:
                "Worked as Team Lead for the French Club, VIT Chennai, coordinating activities and leading the design, marketing, and event departments."
        },
        {
            title: "Design Team Member",
            organization: "Animation Club (VIT Chennai)",
            duration: "Aug 2025 - Apr 2026",
            type: "Design",
            link: "#",
            image: "/assets/experience/ac.png",
            description:
                "Worked as a Design Team Member for Animation Club, VIT Chennai, contributing to creative and visual work."
        },
        {
            title: "Student Ambassador",
            organization: "Google Gemini, Communique",
            duration: "Aug 2025 - Jan 2026",
            type: "Ambassador Program",
            link: "https://www.linkedin.com/in/darshsoni04/details/experience/",
            image: "/assets/experience/gsa.png",
            description:
                "Represented Google Gemini initiatives and helped students explore AI tools and learning opportunities."
        },
        {
            title: "Community Member",
            organization: "GDG Jaipur",
            duration: "2025 - present",
            type: "Community",
            link: "#",
            image: "/assets/experience/gdg.png",
            description:
                "Part of the GDG Jaipur community, connected with developer ecosystem, events, and community learning."
        },
        {
            title: "University",
            organization: "Vellore Institute of Technology, Chennai",
            duration: "Jul 2024 - Jul 2028 (ongoing)",
            type: "Education",
            link: "#",
            image: "/assets/experience/vitc.jpg",
            description:
                "Pursuing Computer Science Engineering with specialisation in AI & Robotics."
        },
        {
            title: "Highschool",
            organization: "Maheshwari Public School, Jaipur",
            duration: "2011 - 2024",
            type: "Education",
            link: "#",
            image: "/assets/experience/mps.png",
            description:
                "Completed my high school education at Maheshwari Public School, Jaipur."
        }
    ];

    const mentors = [
        {
            name: "Dr. Natarajan B",
            role: "Associate Professor, Computer Science",
            organization: "Vellore Institute of Technology, Chennai",
            image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=lW5xp2QAAAAJ&citpid=6",
            link: "#"
        },
        {
            name: "Dr. Ashis Tripathy",
            role: "Associate Professor, Computer Science",
            organization: "Vellore Institute of Technology, Chennai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcyh_hQ8PYcx1WjyvxzJqvFm3hnbuvsoHsw&s",
            link: "/LOR_Ashis_Sir.pdf",
            action: "View LOR"
        },
        {
            name: "Dr. Rishikeshan CA",
            role: "Associate Professor, Computer Science",
            organization: "Vellore Institute of Technology, Chennai",
            image: "https://media.licdn.com/dms/image/v2/D5603AQG4Sv4_1TkK8Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683280454030?e=1780531200&v=beta&t=zXoLgnEzQrJeUg9jDTOtuHDSsSn1FWJymnrRNUlOR0s",
            link: "#"
        },
        {
            name: "Dr. Suseela S",
            role: "Associate Professor, Computer Science",
            organization: "Vellore Institute of Technology, Chennai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGilv2HLwS0EFYVkvhyc2LsyazamCzldDjg&s",
            link: "#"
        },
        {
            name: "Prashanth S.",
            role: "Senior Solution Engineer, GDG Jaipur",
            organization: "Google",
            image: "https://media.licdn.com/dms/image/v2/D5603AQEPs_DnGSy5uQ/profile-displayphoto-crop_800_800/B56ZyeCOauGoAI-/0/1772177911727?e=1780531200&v=beta&t=9w3YGWqJkzUON85ikKgArDxCVnj9unh5rBTPTRqrA-o",
            link: "#"
        },
        {
            name: "Paresh Mayani",
            role: "CEO, GDG Jaipur",
            organization: "SolGuruz®",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQH3IPgAVzOxbQ/profile-displayphoto-shrink_800_800/B4DZOm90mbG4Ac-/0/1733673045039?e=1780531200&v=beta&t=ljKh0ISRDtXN1KXnstCQ-VC9czxQJvCMAjwF9LO7GGI",
            link: "#"
        },
        {
            name: "Nikhilesh Tayal",
            role: "Google Developer Expert",
            organization: "GDG Jaipur",
            image: "https://media.licdn.com/dms/image/v2/C4D03AQH7EmXni8BSxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516530846965?e=1780531200&v=beta&t=FRSEICMGet-doVxThuLnVIimbxMH2R1XE8caba5dmPY",
            link: "#"
        },
        {
            name: "Anukriti Bansal",
            role: "Google Developer Expert",
            organization: "GDG Jaipur",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQGLg4q9-Bj-Kg/profile-displayphoto-shrink_800_800/B4DZPSro4yHcAg-/0/1734406475810?e=1780531200&v=beta&t=go2xxrrke_mYhUJUWfxiI88QCipUp5gde373ufMnUwY",
            link: "#"
        },
        {
            name: "Gaurav Kheterpal",
            role: "Community & Leadership",
            organization: "GDG Jaipur",
            image: "https://media.licdn.com/dms/image/v2/C4D03AQHjdGMbtvJX7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649855428696?e=1780531200&v=beta&t=s8D0WSBbfszCmo5a5Qc9VCyD7QwZUxcKnkZqVmTCK3g",
            link: "#"
        },
        {
            name: "Ashok Saraswat",
            role: "Computer Science teacher at Highschool",
            organization: "Maheshwari Public School, Jaipur",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQHm_EDhA6WNpw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691164232467?e=2147483647&v=beta&t=O5Vq6XrvbG2LT99Dv4gOEZB2oRDYOjisFN1UQjntMiI",
            link: "#"
        }
    ];
</script>

<svelte:head>
    <title>Experience</title>
</svelte:head>

<h1 class="title">Experience</h1>

<Separator />

<Window title="~/experience">
    <div class="experience-list">
        {#each experiences as experience}
            <a class="experience-card" href={experience.link}>
                <img
                    class="experience-card__img"
                    src={experience.image.startsWith('/') ? base + experience.image : experience.image}
                    alt={experience.organization}
                />

                <div class="experience-card__info">
                    <div class="experience-card__top">
                        <h3>{experience.title}</h3>
                        <span>{experience.duration}</span>
                    </div>

                    <p class="experience-card__org">{experience.organization}</p>
                    <p class="experience-card__type">{experience.type}</p>
                    <p class="experience-card__desc">{experience.description}</p>
                </div>
            </a>
        {/each}
    </div>
</Window>

<Separator />

<Window title="~/mentors-and-referees">
    <div class="mentor-list">
        {#each mentors as mentor}
            <a class="mentor-card" href={mentor.link}>
                <img
                    class="mentor-card__img"
                    src={mentor.image.startsWith('/') ? base + mentor.image : mentor.image}
                    alt={mentor.name}
                />

                <div class="mentor-card__info">
                    <div class="mentor-card__top">
                        <h3>{mentor.name}</h3>

                        {#if mentor.action}
                            <span>{mentor.action}</span>
                        {/if}
                    </div>

                    <p>{mentor.role}</p>
                    <p>{mentor.organization}</p>
                </div>
            </a>
        {/each}
    </div>
</Window>

<style>
    .experience-list,
    .mentor-list {
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
    }

    .experience-card,
    .mentor-card {
        position: relative;
        display: grid;
        grid-template-columns: 5rem 1fr;
        gap: var(--padding-s);
        background-color: var(--color-dark);
        overflow: hidden;
        padding: var(--padding-s);
        text-decoration: none;
        color: inherit;
    }

    .experience-card:hover::before,
    .mentor-card:hover::before {
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

    .experience-card__img,
    .mentor-card__img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        background-color: var(--color-bg);
    }

    .experience-card__info,
    .mentor-card__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem;
    }

    .experience-card__top,
    .mentor-card__top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--padding-s);
    }

    .experience-card__top h3,
    .mentor-card__top h3 {
        margin: 0;
    }

    .experience-card__top span,
    .mentor-card__top span {
        white-space: nowrap;
        opacity: 0.7;
        font-size: 0.85rem;
    }

    .experience-card__org,
    .experience-card__type,
    .experience-card__desc,
    .mentor-card__info p {
        margin: 0;
    }

    .experience-card__org {
        opacity: 0.85;
    }

    .experience-card__type {
        opacity: 0.65;
    }

    .experience-card__desc {
        margin-top: 0.25rem;
        opacity: 0.75;
        line-height: 1.45;
    }

    .mentor-card__info p {
        opacity: 0.75;
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

    @media screen and (max-width: 600px) {
        .experience-card,
        .mentor-card {
            grid-template-columns: 4rem 1fr;
        }

        .experience-card__top,
        .mentor-card__top {
            flex-direction: column;
            gap: 0.25rem;
        }

        .experience-card__top span,
        .mentor-card__top span {
            white-space: normal;
        }
    }
</style>
