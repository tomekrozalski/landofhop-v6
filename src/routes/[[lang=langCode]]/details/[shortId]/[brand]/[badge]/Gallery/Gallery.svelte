<script lang="ts">
	import { page } from '$app/stores';
	import Cap from './Cap.svelte';
	import Cover from './Cover/Cover.svelte';
	import ViewFromAbove from './ViewFromAbove.svelte';
</script>

<div class="details-gallery">
	{#key $page.data.details.shortId}
		<Cover />
	{/key}
	<ViewFromAbove />
	<Cap />
</div>
