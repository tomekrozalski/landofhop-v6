<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';

	export let formName: string;
	export let formData: any;
	let { errors, form, handleChange, touched } = formData;
	let fieldName = 'email';
	let id = `${formName}-${fieldName}`;
</script>

<div class="my-3 grid">
	<Label {id} inlined isRequired>{$LL.pages.login.email()}</Label>
	<TextInput
		errors={$errors.email}
		focusOnMount
		{handleChange}
		{id}
		isTouched={$touched.email}
		{fieldName}
		type="email"
		bind:value={$form.email}
	/>
</div>

<style>
	div {
		grid-gap: 1rem;
		grid-template-columns: 1fr 2fr;
	}
</style>
