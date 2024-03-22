<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves, FormPathType } from 'sveltekit-superforms';
	import { slide } from 'svelte/transition';
	import { Combobox, type Selected } from 'bits-ui';
	import { LL } from '$lib/i18n/i18n-svelte';
	import languages, { getAlpha2Codes } from '@cospired/i18n-iso-languages/index.js';
	import pl from '@cospired/i18n-iso-languages/langs/pl.json';
	import en from '@cospired/i18n-iso-languages/langs/en.json';
	import Fa from 'svelte-fa';
	import { faLanguage, faAnglesUpDown, faCheck } from '@fortawesome/pro-solid-svg-icons';
	import { page } from '$app/stores';

	languages.registerLocale(en);
	languages.registerLocale(pl);

	let inputValue = $state('');
	let selected = $state('');

	let languageList = $derived(
		Object.keys(getAlpha2Codes())
			.map((value) => ({
				value,
				label: languages.getName(value, $page.data.locale) ?? ''
			}))
			.sort((a, b) => (['pl', 'en'].includes(a.value) ? -1 : 1))
	);

	let filteredLanguageList = $derived(
		inputValue
			? languageList.filter((langauge) => langauge.label.includes(inputValue.toLowerCase()))
			: languageList
	);

	const {
		class: classNames,
		field,
		form,
		label = '',
		type = 'text',
		...rest
	}: {
		class?: string;
		field: string;
		form: SuperForm<T>;
		label?: string;
		type?: 'text' | 'number' | 'email' | 'password';
		[value: string]: unknown;
	} = $props();

	let { value, errors } = formFieldProxy(form, field as FormPathLeaves<T>);

	const onSelectedChange = (e: Selected<string> | undefined) => {
		if (e?.value) {
			const newValue = e.value as FormPathType<T, FormPathLeaves<T>>;
			value.set(newValue);
		}
	};
</script>

<Combobox.Root items={filteredLanguageList} bind:inputValue {onSelectedChange}>
	<div class="group relative h-10">
		<Fa
			icon={faLanguage}
			class="absolute start-2 top-1/2 size-6 -translate-y-1/2 text-gray-300 transition-colors group-has-[input:focus]:text-black"
		/>
		<Combobox.Input
			class="h-10 w-full border-b-2 border-b-gray-300 bg-gray-100 pl-10 pr-2 text-lg leading-10
      focus:border-b-black focus:outline-none"
			placeholder={$LL.pages.dashboard.selects.language()}
			aria-label={$LL.pages.dashboard.selects.language()}
		/>
		<Fa
			icon={faAnglesUpDown}
			class="pointer-events-none absolute end-3 top-1/2 size-6 -translate-y-1/2 text-gray-300 transition-colors group-has-[[aria-expanded='true']]:text-black"
		/>
		{#if $errors}
			<span class="absolute left-0 right-0 top-full z-10 bg-yellow-light px-4 py-2 text-sm">
				{$errors}
			</span>
		{/if}
	</div>

	<Combobox.Content
		class="max-h-80 overflow-hidden overflow-y-auto bg-white shadow-md outline-none"
		transition={slide}
		sideOffset={8}
	>
		{#each filteredLanguageList as { label, value }, index (value)}
			<Combobox.Item
				class="flex h-10 w-full cursor-pointer select-none items-center py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-black data-[highlighted]:text-white"
				{value}
				{label}
			>
				{label}
				<Combobox.ItemIndicator class="ml-auto" asChild={false}>
					<Fa icon={faCheck} />
				</Combobox.ItemIndicator>
			</Combobox.Item>
			{#if filteredLanguageList.length === languageList.length && index === 1}
				<hr />
			{/if}
		{:else}
			<span class="block px-5 py-2 text-sm bg-yellow-light">
				{$LL.pages.dashboard.selects.nothingFound()}
			</span>
		{/each}
	</Combobox.Content>
	<Combobox.HiddenInput name="language" />
</Combobox.Root>
