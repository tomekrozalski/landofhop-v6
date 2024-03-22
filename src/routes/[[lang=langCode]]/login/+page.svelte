<script lang="ts">
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Article from '$lib/atoms/Article.svelte';
	import Header from '$lib/atoms/headers/Primary.svelte';
	import getValidationSchema from './validationSchema';
	import type { Infer } from 'sveltekit-superforms';
	import ErrorMessage from './ErrorMessage.svelte';
	import SuccessMessage from './SuccessMessage.svelte';
	import Email from './Email.svelte';
	import Password from './Password.svelte';
	import SubmitButton from './SubmitButton.svelte';

	const schema = getValidationSchema($LL);
	let { data }: { data: { form: Infer<typeof schema> } } = $props();
	let isError = $state(false);

	const form = superForm(data.form, {
		onError: () => {
			isError = true;
		},
		validators: zodClient(schema)
	});
	const { enhance, delayed } = form;
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
		<Email field="email" {form} />
		<Password field="password" {form} />
		<SubmitButton isDelayed={$delayed} />
	</form>
</Article>
