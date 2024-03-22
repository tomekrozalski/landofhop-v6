<script lang="ts">
	import SuperDebug from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';
	import type { Infer } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Button from '$lib/atoms/forms/Button.svelte';
	import FieldsetTitle from '$lib/atoms/forms/FieldsetTitle.svelte';
	import Badge from '$lib/molecules/forms/fields/Badge.svelte';
	import Name from '$lib/molecules/forms/fields/Name.svelte';
	import Grid from '$lib/molecules/forms/Grid.svelte';
	import getValidationSchema, { type ValidationSchemaTypes } from './validationSchema';
	import Header from './Header.svelte';

	let { data }: { data: { form: Infer<ValidationSchemaTypes> } } = $props();

	const form = superForm(data.form, {
		dataType: 'json',
		onError: () => {
			console.log('error');
		},
		scrollToError: 'smooth',
		// SPA: true,
		validators: zodClient(getValidationSchema($LL))
	});

	const { enhance, delayed, form: debugData } = form;
</script>

<SuperDebug data={$debugData} />

<form class="mb-10" method="POST" action="?/submit" use:enhance>
	<Header />
	<Badge {form} />
	<FieldsetTitle>{$LL.pages.dashboard.beverage.brandInfo()}</FieldsetTitle>
	<Name {form} />

	<Grid>
		<Button class="col-start-3 justify-self-end" isDelayed={$delayed} type="submit">
			{$LL.pages.login.submit()}
		</Button>
	</Grid>
</form>
