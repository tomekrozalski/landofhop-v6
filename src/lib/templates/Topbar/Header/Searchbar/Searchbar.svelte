<script lang="ts">
	import Fa from 'svelte-fa';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { faMagnifyingGlass, faXmark } from '@fortawesome/pro-light-svg-icons';
	import layoutStore from '$lib/templates/Main/store';
	import SearchInput from './SearchInput.svelte';
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
			aria-label={$LL.header.closeSearchbar()}
			on:click={layoutStore.closeSearchBar}
			class="group absolute right-0 top-0 h-16 w-16 text-xs
			focus:border-2 focus:border-black focus:bg-white focus:outline-none
			md:h-20 md:w-20 md:text-sm lg:h-28 lg:w-28 lg:text-base"
		>
			<Fa
				icon={faXmark}
				size="2.5x"
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-colors
		group-hover:text-gray-400 group-focus:text-black"
			/>
		</button>
	{:else}
		<button
			aria-label={$LL.header.openSearchbar()}
			on:click={layoutStore.openSearchBar}
			class="group absolute right-0 top-0 h-16 w-16 text-xs
			focus:border-2 focus:border-black focus:bg-white focus:outline-none
			md:h-20 md:w-20 md:text-sm lg:h-28 lg:w-28 lg:text-base"
		>
			<Fa
				icon={faMagnifyingGlass}
				size="1.8x"
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-colors
				group-hover:text-gray-400 group-focus:text-black"
			/>
		</button>
	{/if}
</div>
