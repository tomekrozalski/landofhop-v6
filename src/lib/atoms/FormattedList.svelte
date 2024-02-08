<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';

	const { data, mode = 'narrow' } = $props<{ data: any[]; mode: 'long' | 'short' | 'narrow' }>();
</script>

{#if mode === 'narrow'}
	{#each data as item, i}
		<slot {item} />{#if i + 2 <= data.length}, {' '}{/if}
	{/each}
{/if}

{#if mode === 'short'}
	{#each data as item, i}
		<slot {item} />{#if i + 3 <= data.length},{' '}
		{:else if i + 2 === data.length}
			{' '}{$LL.global.shortConjunction()}{' '}
		{/if}
	{/each}
{/if}

{#if mode === 'long'}
	{#each data as item, i}
		<slot {item} />
		{#if i + 3 <= data.length}
			,
		{:else if i + 2 === data.length}
			{$LL.global.longConjunction()}{' '}
		{/if}
	{/each}
{/if}
