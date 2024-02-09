<script lang="ts">
	import { debounce } from 'lodash-es';
	import { fade } from 'svelte/transition';
	import { goto, preloadData, pushState } from '$app/navigation';
	import { LL } from '$lib/i18n/i18n-svelte';
	import navigation from '$lib/templates/Main/navigation.svelte';

	function focusOnMount(input: HTMLInputElement) {
		input.focus();
	}

	const getDebouncedValue = debounce(async (value) => {
		if (value) {
			const href = $LL.link('/search/' + value.toLowerCase());
			const result = await preloadData(href);

			if (result.type === 'loaded' && result.status === 200) {
				pushState(href, { selected: result.data });
			} else {
				goto(href);
			}

			navigation.moveSearchHistory();
		}
	}, 500);

	async function onInput(e: Event) {
		const value = (e.target as HTMLInputElement).value;

		getDebouncedValue(value);
	}
</script>

<input
	type="text"
	use:focusOnMount
	on:input={onInput}
	on:blur={navigation.closeSearchBar}
	transition:fade={{ duration: 200 }}
	placeholder={$LL.header.search()}
	class="search-input border-b-2 border-b-black bg-transparent px-4 uppercase text-white focus:outline-none md:text-3xl lg:my-6 lg:border-b-white"
/>
