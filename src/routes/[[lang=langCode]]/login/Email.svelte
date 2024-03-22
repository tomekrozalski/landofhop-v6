<script lang="ts" generics="T extends Record<string, unknown>">
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';

	let { field, form }: { field: FormPathLeaves<T>; form: SuperForm<T> } = $props();
	const formId = form.formId;
</script>

<div class="my-3 grid grid-cols-5 gap-4">
	<Label class="col-span-2" {field} formId={$formId} isRequired>
		{$LL.pages.login.email()}
	</Label>
	<TextInput class="col-span-2" {field} {form} type="email" />
</div>
