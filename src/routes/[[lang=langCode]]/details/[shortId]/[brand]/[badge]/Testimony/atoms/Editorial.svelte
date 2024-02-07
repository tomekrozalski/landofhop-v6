<script lang="ts">
	export let tag: string = 'em';
</script>

<svelte:element
	this={tag}
	class="-underline-offset-2 skip-ink-none font-medium underline decoration-sea-light decoration-8"
	{...$$props}
>
	<slot />
</svelte:element>
