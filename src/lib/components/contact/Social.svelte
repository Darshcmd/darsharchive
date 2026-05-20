<script lang="ts">
	// Images
	import MailImg from "$lib/assets/images/contact/mail.png?enhanced";
	import StarImg from "$lib/assets/images/star.gif";
	import GithubIcon from "$lib/assets/svg/github-142-svgrepo-com.svg";
	import YoutubeIcon from "$lib/assets/svg/youtube.svg";

	type SocialApp = "GitHub" | "LinkedIn" | "YouTube" | "Mail" | "Medium" | "X";
	type Props = {
		socialApp: SocialApp;
		name: string;
		linkText: string;
		link: string;
	}

	const { socialApp, name, linkText, link }: Props = $props();
</script>

<a href={link} class="container" target="_blank">
	<div class="container__img">
		{#if socialApp === "GitHub"}
			<img class="svg-icon" src={GithubIcon} alt="GitHub icon" />
		{:else if socialApp === "LinkedIn"}
			<img class="svg-icon" src="/assets/icons/linkedin.svg" alt="LinkedIn icon" />
		{:else if socialApp === "YouTube"}
			<img class="svg-icon" src={YoutubeIcon} alt="YouTube icon" />
		{:else if socialApp === "Mail"}
			<enhanced:img src={MailImg} alt="Email icon" />
		{:else if socialApp === "Medium"}
			<svg class="svg-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
				<path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM24 12a3.4 3.4 0 01-3.39 3.41A3.4 3.4 0 0117.22 12a3.4 3.4 0 013.39-3.41A3.4 3.4 0 0124 12z"/>
			</svg>
		{:else if socialApp === "X"}
			<svg class="svg-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.658-5.856 6.658H2.306l7.73-8.835L1.684 2.25h6.81l4.612 6.053L17.77 2.25h.474zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
			</svg>
		{/if}
	</div>

	<div class="container__text">
		<h2>{name}</h2>
		<h3>{linkText}</h3>
	</div>

	<img class="container__star" src={StarImg} alt="Mario Bros Star" />
</a>

<style>
	.container {
		position: relative;
	
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		align-self: stretch;
		gap: var(--padding-m);

		background: linear-gradient(var(--color-bg), var(--color-border)) center no-repeat;
		background-position: 0px 300px;
		border: var(--border-width) solid var(--color-fg);
		padding: var(--padding-m);
		text-decoration: none;
	}
	.container:hover {
		background-position: 0px 0px;
		box-shadow: 0 0 10px 1px var(--color-border);
		padding: var(--padding-m);
	}

	.container__img {
		width: 3rem;
	}
	.container__img img {
		height: auto;
		width: 100%;
	}
	.container__img .svg-icon {
		filter: brightness(0) saturate(100%) invert(100%);
		height: 100%;
		width: 100%;
	}

	/* .container:hover .container__text * {
		color: var(--color-bg);
	} */

	.container__star {
		height: 3rem;
		width: auto;
		position: absolute;
		right: -1.5rem;
		top: -1.5rem;

		display: none;
	}
	.container:hover .container__star {
		display: block;
	}

	/* RESPONSIVE */
	@media screen and (max-width: 728px) {
		.container {
			width: 100%;
		}
	}
</style>
