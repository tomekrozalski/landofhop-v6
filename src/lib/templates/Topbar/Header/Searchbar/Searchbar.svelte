<script lang="ts">
	import Fa from 'svelte-fa';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { faMagnifyingGlass, faXmark } from '@fortawesome/pro-light-svg-icons';
	import navigation from '$lib/templates/Main/navigation.svelte';
	import SearchInput from './SearchInput.svelte';
</script>

<div
	class:right-0={navigation.isSearchbarActive}
	class="searchbar absolute top-0 flex h-full w-full bg-black transition-all"
>
	{#if navigation.isSearchbarActive}
		<SearchInput />
	{/if}
	{#if navigation.isSearchbarActive}
		<button
			aria-label={$LL.header.closeSearchbar()}
			on:click={navigation.closeSearchBar}
			class="group absolute right-0 top-0 h-16 w-16 text-xs
			focus-visible:border-2 focus-visible:border-black focus-visible:bg-white focus-visible:outline-none
			md:h-20 md:w-20 md:text-sm lg:h-28 lg:w-28 lg:text-base"
		>
			<Fa
				icon={faXmark}
				size="2.5x"
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-colors
		group-hover:text-gray-400 group-focus-visible:text-black"
			/>
		</button>
	{:else}
		<button
			aria-label={$LL.header.openSearchbar()}
			on:click={navigation.openSearchBar}
			class="group absolute right-0 top-0 h-16 w-16 text-xs
			focus-visible:border-2 focus-visible:border-black focus-visible:bg-white focus-visible:outline-none
			md:h-20 md:w-20 md:text-sm lg:h-28 lg:w-28 lg:text-base"
		>
			<Fa
				icon={faMagnifyingGlass}
				size="1.8x"
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-colors
				group-hover:text-gray-400 group-focus-visible:text-black"
			/>
		</button>
	{/if}
</div>
