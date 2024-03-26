<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import AddRow from '$lib/atoms/forms/AddRow.svelte';
	import RemoveRow from '$lib/atoms/forms/RemoveRow.svelte';
	import LanguageSelect from '../selects/Language.svelte';
	import Grid from '../Grid.svelte';

	let { form }: { form: SuperForm<T> } = $props();
	let { value } = formFieldProxy(form, 'name' as FormPathLeaves<T>);
	const formId = form.formId;
</script>

<Grid>
	<Label class="col-span-2" field="name" formId={$formId} isRequired>
		{$LL.pages.dashboard.label.name()}
	</Label>
	{@const  names = $value as { value: string; language: string }[]}
	{#each names as _, i}
		<div class="col-start-3 grid grid-cols-2 gap-2">
			<TextInput field="name[{i}].value" {form} />
			<LanguageSelect field="name[{i}].language" {form} />
		</div>
		<div class="flex gap-2">
			{#if names.length > 1}
				<RemoveRow {form} field="name" index={i} />
			{/if}
			{#if names.length === i + 1}
				<AddRow {form} field="name" />
			{/if}
		</div>
	{/each}
</Grid>
