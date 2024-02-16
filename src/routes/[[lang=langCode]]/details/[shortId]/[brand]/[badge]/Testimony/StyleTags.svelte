<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';
	import MarkLanguage from '$lib/atoms/MarkLanguage.svelte';

	const { styleTags } = $derived($page.data.details);
</script>

{#if styleTags}
	<DT>
		{$LL.pages.details.testimony.styleTags()}
	</DT>
	<DD>
		<FormattedList mode="narrow" data={styleTags.editorial}>
			{#snippet formattedList(item)}
				<MarkLanguage
					editorial
					tag="a"
					href="/advanced-search?styleTags={item.badge}"
					name={item.name}
				/>
			{/snippet}
		</FormattedList>
	</DD>
{/if}
