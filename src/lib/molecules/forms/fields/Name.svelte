<script lang="ts" generics="T extends Record<string, unknown>">
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';

	let { field, form } = $props<{ field: FormPathLeaves<T>; form: SuperForm<T> }>();
	const formId = form.formId;
</script>

<div class="my-4 grid grid-cols-12 gap-2">
	<Label class="col-span-5" {field} formId={$formId} isRequired>
		{$LL.pages.dashboard.label.name()}
	</Label>
	<TextInput class="col-span-3" {field} {form} />
</div>
