<script lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Button from '$lib/atoms/forms/Button.svelte';
	import Email from './Email.svelte';
	import Password from './Password.svelte';

	const formName = 'login';

	const formData = createForm({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			email: yup
				.string()
				.email($LL.pages.login.incorrectEmail())
				.required($LL.forms.validation.required()),
			password: yup.string().required($LL.forms.validation.required())
		}),
		onSubmit: (values) => {
			console.log('values', values);
			// 			authentication.setLoginStatus(Status.pending);
			//
			// 			fetch('/api/user/login', {
			// 				method: 'POST',
			// 				body: JSON.stringify(values)
			// 			})
			// 				.then(async (response) => {
			// 					if (response.status >= 300) {
			// 						const data = await response.json();
			// 						throw new Error(data.message);
			// 					}
			//
			// 					authentication.setLoginStatus(Status.fulfilled);
			// 				})
			// 				.catch(() => {
			// 					authentication.setLoginStatus(Status.rejected);
			// 				});
		}
	});

	const { isSubmitting } = formData;
</script>

<form class="mx-auto max-w-xl" on:submit={formData.handleSubmit} autocomplete="off" novalidate>
	<Email {formName} {formData} />
	<Password {formName} {formData} />
	<div class="flex justify-end">
		<Button isSubmitting={$isSubmitting} type="submit">{$LL.pages.login.submit()}</Button>
	</div>
</form>
