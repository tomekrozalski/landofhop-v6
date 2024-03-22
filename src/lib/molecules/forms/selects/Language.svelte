<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import languages, { getAlpha2Codes } from '@cospired/i18n-iso-languages/index.js';
	import pl from '@cospired/i18n-iso-languages/langs/pl.json';
	import en from '@cospired/i18n-iso-languages/langs/en.json';
	import { page } from '$app/stores';
	import Select from './Select.svelte';

	languages.registerLocale(en);
	languages.registerLocale(pl);

	let languageList = $derived(
		Object.keys(getAlpha2Codes())
			.map((value) => ({
				value,
				label: languages.getName(value, $page.data.locale) ?? ''
			}))
			.sort((a) => (['pl', 'en'].includes(a.value) ? -1 : 1))
	);

	const {
		field,
		form
	}: {
		field: string;
		form: SuperForm<T>;
	} = $props();

	let { value, errors } = formFieldProxy(form, field as FormPathLeaves<T>);
</script>

<Select errors={$errors} items={languageList} name="language" markMostPopular {value} />
