<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import Article from '$lib/atoms/Article.svelte';
	import Header from '$lib/atoms/headers/Primary.svelte';
	import ErrorMessage from './ErrorMessage.svelte';
	import SuccessMessage from './SuccessMessage.svelte';

	import { superForm } from 'sveltekit-superforms/client';
	import type { Validation } from 'sveltekit-superforms';

	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import Button from '$lib/atoms/forms/Button.svelte';
	import type { ValidationSchemaTypes } from './validationSchema';

	$: data = $page.data.form as Validation<ValidationSchemaTypes>;

	let isError = false;

	const { form, errors, enhance, constraints, delayed } = superForm(data, {
		onUpdated: ({ form }) => {
			if (form.valid) {
				// authentication.setLoginStatus('fulfilled');
				console.log('valid', form);
			}

			console.log('form', form);
		},
		onError: ({ result, message }) => {
			console.log('!', { result, message });

			isError = true;
		}
	});

	const formName = 'login';

	$: ({ authenticated } = $page.data);
</script>

<svelte:head>
	<title>{$LL.pages.login.title()}</title>
</svelte:head>

<Article>
	<Header>{$LL.pages.login.title()}</Header>
	{#if authenticated}
		<SuccessMessage />
	{/if}
	{#if isError}
		<ErrorMessage />
	{/if}
	<form method="POST" use:enhance class="mx-auto max-w-xl">
		<div class="my-3 grid grid-cols-3 gap-4">
			<Label id="{formName}-email" isRequired>{$LL.pages.login.email()}</Label>
			<TextInput
				classNames="col-span-2"
				errors={$errors.email}
				id="{formName}-email"
				name="email"
				type="email"
				bind:value={$form.email}
				{...$constraints.email}
			/>
		</div>
		<div class="my-3 grid grid-cols-3 gap-4">
			<Label id="{formName}-password" isRequired>{$LL.pages.login.password()}</Label>
			<TextInput
				classNames="col-span-2"
				errors={$errors.password}
				id="{formName}-password"
				name="password"
				type="password"
				bind:value={$form.password}
				{...$constraints.password}
			/>
		</div>
		<div class="flex justify-end">
			<Button isDelayed={$delayed} type="submit">{$LL.pages.login.submit()}</Button>
		</div>
	</form>
</Article>
