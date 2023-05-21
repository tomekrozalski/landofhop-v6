<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { Validation } from 'sveltekit-superforms';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import Button from '$lib/atoms/forms/Button.svelte';
	import type { ValidationSchemaTypes } from './validationSchema';

	$: data = $page.data.form as Validation<ValidationSchemaTypes>;

	const { form, errors, enhance, constraints, delayed } = superForm(data, {
		onUpdated: ({ form }) => {
			if (form.valid) {
				// authentication.setLoginStatus('fulfilled');
			}
		},
		onError: () => {
			// authentication.setLoginStatus('rejected');
		}
	});

	const formName = 'login';
</script>

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
