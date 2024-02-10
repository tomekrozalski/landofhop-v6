<script lang="ts">
	import { slide } from 'svelte/transition';
	import LL from '$lib/i18n/i18n-svelte';

	let isCollapsed = $state(false);
</script>

{#if isCollapsed}
	<div transition:slide class="overflow-clip">
		<slot />
	</div>
{/if}
<button
	type="button"
	on:click={() => (isCollapsed = !isCollapsed)}
	class="text-green hover:underline"
>
	{#if isCollapsed}
		{$LL.pages.details.tale.readLess()}
	{:else}
		{$LL.pages.details.tale.readMore()}
	{/if}
</button>
