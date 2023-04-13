<script lang="ts">
	import { fade } from 'svelte/transition';
	import pushState from '$lib/utils/helpers/pushState';
	import layoutStore from '../../../utils/store';

	function focusOnMount(input: HTMLInputElement) {
		input.focus();
	}
</script>

<input
	on:input={(e) => {
		const params = new URLSearchParams(location.search);
		params.set('search', e.currentTarget.value);
		pushState(params);
	}}
	type="text"
	use:focusOnMount
	bind:value={$layoutStore.searchPhrase}
	transition:fade={{ duration: 200 }}
	placeholder={'header.search'}
	class="search-input border-b-2 border-b-black bg-transparent px-4 uppercase text-white focus:outline-none md:text-4xl lg:my-3 lg:border-b-white"
/>
