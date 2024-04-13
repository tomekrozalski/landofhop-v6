<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import InstitutionSelect from '../selects/Institution.svelte';
	import Grid from '../Grid.svelte';

	let { form }: { form: SuperForm<T> } = $props();
	let { value } = formFieldProxy(form, 'brand' as FormPathLeaves<T>);
	const formId = form.formId;
</script>

<Grid>
	<Label class="col-span-2" field="brand" formId={$formId} isRequired>
		{$LL.pages.dashboard.label.brand()}
	</Label>
	<div class="col-start-3">
		<InstitutionSelect field="brand" {form} />
	</div>
</Grid>
