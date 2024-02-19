<script lang="ts">
	// import { getContext } from 'svelte';
	// import { beforeUpdate } from 'svelte';
	// import { translate } from 'svelte-intl';
	// import slugify from 'slugify';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';

	// 	export let formName: string;
	// 	export let formData: any;
	// 	export let labelId: string = 'dashboard.label.badge';
	// 	let { errors, form, handleChange, touched, updateValidateField } = formData;
	// 	let fieldName = 'badge';
	// 	let id = `${formName}-${fieldName}`;
	//
	// 	let firstNameValue = $form.name[0].value;
	// 	const type = getContext('formType');
	//
	// 	beforeUpdate(() => {
	// 		if (formName !== 'label' || type !== 'update') {
	// 			const value = $form.name[0].value;
	// 			if (value !== firstNameValue) {
	// 				updateValidateField(fieldName, slugify(value, { lower: true, strict: true }));
	// 				firstNameValue = value;
	// 			}
	// 		}
	// 	});
</script>

<div class="my-4 grid grid-cols-12 gap-2">
	<Label class="col-span-4" id="test" isRequired>Test label</Label>
	<TextInput class="col-span-6" />
</div>
