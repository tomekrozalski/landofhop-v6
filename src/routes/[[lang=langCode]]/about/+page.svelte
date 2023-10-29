<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Markdown from '$lib/atoms/Markdown.svelte';
</script>

<svelte:head>
	<title>{$LL.pages.about.title()}</title>
</svelte:head>

<h1 class="container max-w-lg pb-5 pt-10 text-center text-3xl font-bold">
	{$LL.pages.about.header()}
</h1>

<div class="container max-w-lg">
	<Markdown value={$LL.pages.about.body()} />
</div>
