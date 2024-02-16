<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';
	import MarkLanguage from '$lib/atoms/MarkLanguage.svelte';

	const { style } = $derived($page.data.details);
</script>

{#if style}
	<DT>
		{$LL.pages.details.testimony.style()}
	</DT>
	<DD>
		{#if style?.label}
			<FormattedList mode="narrow" data={style.label}>
				{#snippet formattedList(item)}
					<MarkLanguage label tag="em" name={item} />
				{/snippet}
			</FormattedList>
		{/if}
		{#if style?.producer}
			{#if style?.label},{/if}
			<FormattedList mode="narrow" data={style.producer}>
				{#snippet formattedList(item)}
					<MarkLanguage producer tag="em" name={item} />
				{/snippet}
			</FormattedList>
		{/if}
	</DD>
{/if}
