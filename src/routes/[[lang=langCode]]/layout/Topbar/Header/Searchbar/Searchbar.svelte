<script lang="ts">
	import layoutStore from '../../../utils/store';
	import SearchInput from './SearchInput.svelte';
	import Icon from '$lib/atoms/Icon.svelte';
</script>

<div
	class:right-0={$layoutStore.isSearchbarActive}
	class="searchbar absolute top-0 flex h-full w-full bg-black transition-all"
>
	{#if $layoutStore.isSearchbarActive}
		<SearchInput />
	{/if}
	{#if $layoutStore.isSearchbarActive}
		<button
			on:click={layoutStore.closeSearchBar}
			class="group absolute right-0 top-0 h-16 w-16 text-xs focus:bg-white md:h-20 md:w-20 md:text-sm lg:h-28 lg:w-28 lg:text-base"
		>
			<Icon
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-gray-400"
				name="xmark"
				size="2.5x"
			/>
		</button>
	{:else}
		<button
			on:click={layoutStore.openSearchBar}
			class="group absolute right-0 top-0 h-16 w-16 text-xs focus:bg-white md:h-20 md:w-20 md:text-sm lg:h-28 lg:w-28 lg:text-base"
		>
			<Icon
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-gray-400"
				name="search"
				size="1.8x"
			/>
		</button>
	{/if}
</div>
