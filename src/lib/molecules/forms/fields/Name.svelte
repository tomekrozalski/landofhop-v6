<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import AddRow from '$lib/atoms/forms/AddRow.svelte';
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
	{@const  abd = $value as Array<{ value: string; language: string }>}
	{#each abd as _, i}
		<div class="col-start-3 grid grid-cols-2 gap-2">
			<TextInput field="name[{i}].value" {form} />
			<LanguageSelect field="name[{i}].language" {form} />
		</div>
		{#if abd.length === i + 1}
			<AddRow {form} field="name" />
		{/if}
	{/each}
</Grid>
