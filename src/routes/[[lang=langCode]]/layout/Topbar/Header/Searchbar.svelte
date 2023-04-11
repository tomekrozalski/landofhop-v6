<script lang="ts">
	import layoutStore from '../../utils/store';
	// import Magnifier from './Magnifier.svelte';
	// import Close from './Close.svelte';
	// import SearchInput from './SearchInput.svelte';
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
</script>

<div
	class:r-0={$layoutStore.isSearchbarActive}
	class="searchbar absolute top-0 flex h-full w-full bg-black transition-all"
>
	{#if $layoutStore.isSearchbarActive}
		<input type="text" />
		<!-- <SearchInput /> -->
	{/if}
	{#if $layoutStore.isSearchbarActive}
		<button
			on:click={layoutStore.closeSearchBar}
			class="absolute right-0 top-0 h-24 w-24 focus:bg-white"
		>
			close
		</button>
	{:else}
		<button
			on:click={layoutStore.openSearchBar}
			class="group absolute right-0 top-0 h-28 w-28 focus:bg-white"
		>
			<Fa
				icon={faMagnifyingGlass}
				size="1.8x"
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-gray-400"
			/>
		</button>
	{/if}
</div>
