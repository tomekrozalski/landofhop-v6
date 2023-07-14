<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';
	import MarkLanguage from '$lib/atoms/MarkLanguage.svelte';

	$: ({ style } = $page.data.details);
</script>

{#if style}
	<DT>
		{$LL.pages.details.testimony.style()}
	</DT>
	<DD>
		{#if style?.label}
			<span>
				<FormattedList mode="narrow" let:item data={style.label}>
					<MarkLanguage label tag="em" name={item} />
				</FormattedList>
			</span>
		{/if}
		{#if style?.producer}
			<span>
				<FormattedList mode="narrow" let:item data={style.producer}>
					<MarkLanguage producer tag="em" name={item} />
				</FormattedList>
			</span>
		{/if}
	</DD>
{/if}
