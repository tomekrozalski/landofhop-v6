<script lang="ts">
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';

	import Article from '$lib/atoms/Article.svelte';
	import Header from '$lib/atoms/headers/Primary.svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import Button from '$lib/atoms/forms/Button.svelte';
	import getValidationSchema from './validationSchema';
	import type { Infer } from 'sveltekit-superforms';
	import ErrorMessage from './ErrorMessage.svelte';
	import SuccessMessage from './SuccessMessage.svelte';

	const schema = getValidationSchema($LL);
	let { data } = $props<{ data: { form: Infer<typeof schema> } }>();
	let isError = $state(false);

	const form = superForm(data.form, {
		onError: (e) => {
			console.log('e', e);
			isError = true;
		},
		validators: zodClient(schema)
	});
	const { enhance, delayed } = form;

	const formName = 'login';
</script>

<svelte:head>
	<title>{$LL.pages.login.title()}</title>
</svelte:head>

<Article>
	<Header>{$LL.pages.login.title()}</Header>
	{#if $page.data.authenticated}
		<SuccessMessage />
	{/if}
	{#if isError}
		<ErrorMessage />
	{/if}
	<form method="POST" use:enhance>
		<div class="my-3 grid grid-cols-5 gap-4">
			<Label class="col-span-2" id="{formName}-email" isRequired>
				{$LL.pages.login.email()}
			</Label>
			<TextInput class="col-span-2" field="email" {form} {formName} type="email" />
		</div>
		<div class="my-3 grid grid-cols-5 gap-4">
			<Label class="col-span-2" id="{formName}-password" isRequired>
				{$LL.pages.login.password()}
			</Label>
			<TextInput class="col-span-2" field="password" {form} {formName} type="password" />
		</div>
		<div class="my-3 grid grid-cols-5 gap-4">
			<Button class="col-start-4" isDelayed={$delayed} type="submit">
				{$LL.pages.login.submit()}
			</Button>
		</div>
	</form>
</Article>
