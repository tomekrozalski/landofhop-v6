<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import MarkLanguage from '$lib/atoms/MarkLanguage.svelte';

	$: ({ place } = $page.data.details);
</script>

{#if place}
	<DT>{$LL.pages.details.testimony.city()}</DT>
	<DD>
		{#if place.label}
			<MarkLanguage label tag="em" name={place.label.city} />
		{/if}
		{#if place.producer}
			<MarkLanguage producer tag="em" name={place.producer.city} />
		{/if}
		{#if place.editorial}
			<MarkLanguage editorial tag="em" name={place.editorial.city} />
		{/if}
	</DD>
{/if}
