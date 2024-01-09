<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	// import Navigation from './Navigation.svelte';
</script>

<article class="container">
	<h1>{$LL.pages.stats.common.name()}</h1>
	<!-- <Navigation /> -->
	<slot />
</article>

<style>
	:global(path.line) {
		fill: none;
		stroke-width: 5;
		stroke-linecap: round;
		cursor: pointer;
		transition: opacity var(--transition-default);
	}
</style>
