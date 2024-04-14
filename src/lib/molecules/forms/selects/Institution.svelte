<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import type FormattedInstitution from './Institution.d';

	import Select from './Select.svelte';

	let institutions: FormattedInstitution[] = $state([]);
	let brandList = $derived(
		institutions
			.map(({ name, shortId }) => ({
				value: shortId,
				label: name.value
			}))
			.sort((a, b) => a.label.localeCompare(b.label))
	);

	$effect(() => {
		if (!institutions.length) {
			fetch('/api/institutions')
				.then((response) => response.json())
				.then((data) => (institutions = data));
		}
	});

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
