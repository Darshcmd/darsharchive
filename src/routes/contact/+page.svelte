<script lang="ts">
	import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
	import Social from "$lib/components/contact/Social.svelte";
</script>

<svelte:head>
    <title>{$_("page.contact.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.contact.title")}</h1>

<Separator />

<div class="container">
	<Social socialApp={"Mail"} name={"Email"} linkText={"mail"} link={"mailto:darsh.codes@gmail.com"} />
	<Social socialApp={"LinkedIn"} name={"LinkedIn"} linkText={"profile"} link={"https://www.linkedin.com/in/darshsoni04"} />
	<Social socialApp={"GitHub"} name={"GitHub"} linkText={"repo"} link={"https://github.com/Darshcmd"} />
	<Social socialApp={"YouTube"} name={"YouTube"} linkText={"channel"} link={"https://www.youtube.com/@dxrsh"} />
	<Social socialApp={"Medium"} name={"Medium"} linkText={"blogs (soon)"} link={"https://medium.com/@soni.darsh2004"} />
	<Social socialApp={"X"} name={"X"} linkText={"twitter"} link={"https://x.com/arre_darsh"} />
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--padding-m);
	}

	@media screen and (max-width: 728px) {
		.container {
			flex-direction: column;
		}
	}
</style>
