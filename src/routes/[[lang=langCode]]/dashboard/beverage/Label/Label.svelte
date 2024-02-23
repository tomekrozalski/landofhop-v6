<script lang="ts">
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';
	import type { Infer } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Button from '$lib/atoms/forms/Button.svelte';
	import FieldsetTitle from '$lib/atoms/forms/FieldsetTitle.svelte';
	import Badge from '$lib/molecules/forms/fields/Badge.svelte';
	import Name from '$lib/molecules/forms/fields/Name.svelte';
	import getValidationSchema, { type ValidationSchemaTypes } from './validationSchema';
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
	<FieldsetTitle>{$LL.pages.dashboard.beverage.brandInfo()}</FieldsetTitle>
	<Name field="name" {form} />
	<div class="my-4 grid grid-cols-12 gap-2">
		<Button class="col-span-2 col-start-9" isDelayed={$delayed} type="submit">
			{$LL.pages.login.submit()}
		</Button>
	</div>
</form>
