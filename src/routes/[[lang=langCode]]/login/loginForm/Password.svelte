<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';

	export let formName: string;
	export let formData: any;
	let { errors, form, handleChange, touched } = formData;
	let fieldName = 'password';
	let id = `${formName}-${fieldName}`;
</script>

<div class="my-3 grid grid-cols-3 gap-4">
	<Label {id} isRequired>{$LL.pages.login.password()}</Label>
	<TextInput
		classNames="col-span-2"
		errors={$errors.password}
		{handleChange}
		{id}
		isTouched={$touched.password}
		{fieldName}
		type="password"
		bind:value={$form.password}
	/>
</div>
