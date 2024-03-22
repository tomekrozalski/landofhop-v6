<script lang="ts" generics="T extends Record<string, unknown>">
	import type { SuperForm } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import LanguageSelect from '../selects/Language.svelte';
	import Grid from '../Grid.svelte';

	let { form }: { form: SuperForm<T> } = $props();
	const formId = form.formId;
</script>

<Grid>
	<Label class="col-span-2" field="name" formId={$formId} isRequired>
		{$LL.pages.dashboard.label.name()}
	</Label>
	<div class="grid grid-cols-2 gap-2">
		<TextInput field="name.value" {form} />
		<LanguageSelect field="name.language" {form} />
	</div>
</Grid>
