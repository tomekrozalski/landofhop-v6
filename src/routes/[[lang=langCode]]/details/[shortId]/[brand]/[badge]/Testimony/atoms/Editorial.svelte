<script lang="ts">
	export let tag: string = 'em';
</script>

<svelte:element this={tag} class="border-b-4 border-sea-light font-medium" {...$$props}>
	<slot />
</svelte:element>
