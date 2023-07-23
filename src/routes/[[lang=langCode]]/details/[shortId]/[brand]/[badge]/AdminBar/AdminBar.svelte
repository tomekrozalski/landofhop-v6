<script lang="ts">
	import { page } from '$app/stores';
	import InlineSpinner from '$lib/atoms/spinners/Inline.svelte';
	import Markdown from '$lib/atoms/Markdown.svelte';
	import Updated from './Updated.svelte';
	import Buttons from './Buttons/Buttons.svelte';
</script>

<Buttons />
{#await $page.data.streamed.adminData}
	<InlineSpinner />
{:then adminData}
	<div class="my-5">
		{#if adminData.notes}<Markdown value={adminData.notes} />{/if}
		{#if adminData.updated}<Updated updated={adminData.updated} />{/if}
	</div>
{/await}
