<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { Validation } from 'sveltekit-superforms';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import Button from '$lib/atoms/forms/Button.svelte';

	import type { LoginSchema } from './loginSchema';
	// import authentication from '$lib/utils/stores/authentication';

	$: data = $page.data.form as Validation<LoginSchema>;

	const { form, errors, enhance, constraints, delayed } = superForm(data, {
		validationMethod: 'onblur'
	});

	const formName = 'login';

	// 	const formData = createForm({
	// 		initialValues: {
	// 			email: '',
	// 			password: ''
	// 		},
	// 		validationSchema: yup.object().shape({
	// 			email: yup
	// 				.string()
	// 				.email($LL.pages.login.incorrectEmail())
	// 				.required($LL.forms.validation.required()),
	// 			password: yup.string().required($LL.forms.validation.required())
	// 		}),
	// 		onSubmit: (values) => {
	// 			return fetch('/login/api/signin', {
	// 				method: 'POST',
	// 				body: JSON.stringify(values)
	// 			})
	// 				.then(async (response) => {
	// 					if (response.status >= 300) {
	// 						const data = await response.json();
	// 						throw new Error(data.message);
	// 					}
	//
	// 					authentication.setLoginStatus('fulfilled');
	// 				})
	// 				.catch(() => {
	// 					authentication.setLoginStatus('rejected');
	// 				});
	// 		}
	// 	});
	//
	// 	const { isSubmitting } = formData;
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
		<Button isSubmitting={$delayed} type="submit">{$LL.pages.login.submit()}</Button>
	</div>
</form>
