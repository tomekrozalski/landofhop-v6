<script lang="ts">
	import { debounce } from 'lodash-es';
	import { fade } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';
	import navigation from '$lib/templates/Main/navigation.svelte';
	import { Status } from '$lib/db/enums/Globals.enum';
	import searchByPhrase from './searchByPhrase';

	function focusOnMount(input: HTMLInputElement) {
		input.focus();
	}

	const getDebouncedValue = debounce(searchByPhrase, 500);

	async function onInput(e: Event) {
		navigation.updateSearchStatus(Status.pending);
		const value = (e.target as HTMLInputElement).value;

		getDebouncedValue(value);
	}
</script>

<input
	type="text"
	use:focusOnMount
	on:input={onInput}
	transition:fade={{ duration: 200 }}
	placeholder={$LL.header.search()}
	class="search-input border-b-2 border-b-black bg-transparent px-4 uppercase text-white focus:outline-none md:text-3xl lg:my-6 lg:border-b-white"
/>
