<script lang="ts" generics="T extends Record<string, unknown>">
	import { onMount } from 'svelte';
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';

	import { page } from '$app/stores';
	import Select from './Select.svelte';

	onMount(async () => {
		const response = await fetch('/api/institutions');
		const institutions: unknown[] = await response.json();

		console.log('1', institutions);
	});

	let brandList = [
		{ value: 'pl', label: 'Polski' },
		{ value: 'en', label: 'English' }
	];

	const {
		field,
		form
	}: {
		field: string;
		form: SuperForm<T>;
	} = $props();

	let { value, errors } = formFieldProxy(form, field as FormPathLeaves<T>);
</script>

<Select errors={$errors} items={brandList} name="institution" {value} />
