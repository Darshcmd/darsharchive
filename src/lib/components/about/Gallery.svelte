<script lang="ts">
    import ChristmasImg from "$lib/assets/images/projects/christmas.jpeg";
    import DevfestImg from "$lib/assets/images/projects/devfest.png";
    import IndrasolarImg from "$lib/assets/images/projects/indrasolar.png";
    import KpImg from "$lib/assets/images/projects/kp.png";
    import OasisImg from "$lib/assets/images/projects/oasis.png";
    import RailcrackImg from "$lib/assets/images/projects/railcrack.png";
    import TrafficImg from "$lib/assets/images/projects/traffic.png";
    import ZouImg from "$/lib/assets/images/projects/zou.png";

    type GalleryItem = {
        title: string;
        description: string;
        image: string;
    };

    const photos: GalleryItem[] = [
        {
            title: "AI-Based Railway Safety Patent Project",
            description:
                "Hardware prototype for our patent project focused on railway crack, obstacle, and vibration detection using multi-sensors and AI.",
            image: RailcrackImg,
        },
        {
            title: "ZOUGOULOUGOUBAMBA event",
            description:
                "A snapshot from the closing ceremony of the Indo-French inter-country events, where I served on the event management team.",
            image: ZouImg,
        },
        {
            title: "Devfest Jaipur 2025",
            description:
                "An amazing event hosted by GDG Jaipur, where I had the opportunity to connect with so many brilliant minds.",
            image: DevfestImg,
        },
        {
            title: "IndraSolar: Solar EV Charging Concept",
            description:
                "Prototype and presentation for IndraSolar, a sustainable solar-powered EV charging solution developed during the IdeaXChange Hackathon, we secured 3rd position.",
            image: IndrasolarImg,
        },
        {
            title: "Oasis: Smart IoT Water Cooler System",
            description:
                "Hardware prototype built for Ideathon Hackathon: an IoT-enabled water cooler system with TDS monitoring, leak detection, and water level tracking.",
            image: OasisImg,
        },
        {
            title: "Working on KP-17",
            description:
                "My friends and I working on KP-17, a 17-degree-of-freedom humanoid robot built for the Team Genesis project showcase.",
            image: KpImg,
        },
        {
            title: "French Club Christmas Fest",
            description:
                "A snapshot from the Christmas Fest organized by French Club.",
            image: ChristmasImg,
        },
        {
            title: "IoT 3-way Traffic Light system",
            description:
                "As part of our DSD project, we developed a 3-way traffic light system utilizing multiple sensors. Our team was honored with the 'Best Project' award and selected for the project showcase.",
            image: TrafficImg,
        },
    ];
</script>

<div class="gallery">
    {#each photos as photo}
        <article class="gallery-entry">
            <img src={photo.image} alt={photo.title} loading="lazy" />

            <div class="gallery-entry__info">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
            </div>
        </article>
    {/each}
</div>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--padding-m);
    }

    .gallery-entry {
        display: flex;
        flex-direction: column;
        border: var(--border-width) solid var(--color-border);
        background-color: var(--color-dark);
        overflow: hidden;
    }

    .gallery-entry img {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        background-color: var(--color-bg);
        border-bottom: var(--border-width) solid var(--color-border);
    }

    .gallery-entry__info {
        display: flex;
        flex-direction: column;
        gap: var(--padding-s);
        padding: var(--padding-m);
    }

    .gallery-entry h3,
    .gallery-entry p {
        margin: 0;
    }

    .gallery-entry h3 {
        line-height: 1.25;
    }

    .gallery-entry p {
        opacity: 0.75;
        line-height: 1.45;
    }

    @media screen and (max-width: 728px) {
        .gallery {
            grid-template-columns: 1fr;
        }
    }
</style>
