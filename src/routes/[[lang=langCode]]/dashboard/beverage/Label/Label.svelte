<script lang="ts">
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';
	import type { Infer } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Badge from '$lib/molecules/forms/fields/Badge.svelte';
	import getValidationSchema, {
		type ValidationSchemaTypes
	} from '../../add-new-beverage/validationSchema';
	import Header from './Header.svelte';

	let { data } = $props<{ data: { form: Infer<ValidationSchemaTypes> } }>();

	const form = superForm(data.form, {
		onError: () => {
			console.log('error');
		},
		validators: zodClient(getValidationSchema($LL))
	});
	const { enhance, delayed } = form;
</script>

<form class="mb-10" method="POST" use:enhance>
	<Header />
	<Badge field="badge" {form} />
</form>
