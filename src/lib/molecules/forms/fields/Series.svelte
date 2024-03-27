<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import AddRow from '$lib/atoms/forms/AddRow.svelte';
	import AddFirstRow from '$lib/atoms/forms/AddFirstRow.svelte';
	import RemoveRow from '$lib/atoms/forms/RemoveRow.svelte';
	import LanguageSelect from '../selects/Language.svelte';
	import Grid from '../Grid.svelte';

	let { form }: { form: SuperForm<T> } = $props();
	let { value } = formFieldProxy(form, 'series' as FormPathLeaves<T>);
	const formId = form.formId;
</script>

<Grid>
	<Label class="col-span-2" field="series" formId={$formId}>
		{$LL.pages.dashboard.label.series()}
	</Label>
	{@const      series = $value as { value: string; language: string }[]}
	{#if series.length === 0}
		<AddFirstRow {form} field="series" />
	{:else}
		{#each series as _, i}
			<div class="col-start-3 grid grid-cols-2 gap-2">
				<TextInput field="series[{i}].value" {form} />
				<LanguageSelect field="series[{i}].language" {form} />
			</div>
			<div class="flex gap-2">
				<RemoveRow {form} field="series" index={i} />
				{#if series.length === i + 1}
					<AddRow {form} field="series" />
				{/if}
			</div>
		{/each}
	{/if}
</Grid>
