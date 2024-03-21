<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { Combobox } from 'bits-ui';
	import languages, { getAlpha2Codes } from '@cospired/i18n-iso-languages/index.js';
	// import pl from '@cospired/i18n-iso-languages/langs/pl.json';
	// import en from '@cospired/i18n-iso-languages/langs/en.json';
	import Fa from 'svelte-fa';
	import { faLanguage, faAnglesUpDown, faCheck } from '@fortawesome/pro-solid-svg-icons';

	onMount(() => {
		const abc = getAlpha2Codes();
		console.log('BUM', languages);
		console.log('!', abc);
		// console.log('getAlpha2Codes()', getAlpha2Codes());
	});

	const fruits = [
		{ value: 'mango', label: 'Mango' },
		{ value: 'watermelon', label: 'Watermelon' },
		{ value: 'apple', label: 'Apple' },
		{ value: 'pineapple', label: 'Pineapple' },
		{ value: 'orange', label: 'Orange' }
	];

	let inputValue = '';

	$: filteredFruits = inputValue
		? fruits.filter((fruit) => fruit.value.includes(inputValue.toLowerCase()))
		: fruits;
</script>

<Combobox.Root items={filteredFruits} bind:inputValue>
	<div class="group relative h-10">
		<Fa
			icon={faLanguage}
			class="absolute start-2 top-1/2 size-6 -translate-y-1/2 text-gray-300 transition-colors group-has-[input:focus]:text-black"
		/>
		<Combobox.Input
			class="h-10 w-full border-b-2 border-b-gray-300 bg-gray-100 pl-10 pr-2 text-lg leading-10
      focus:border-b-black focus:outline-none"
			placeholder="Search a fruit"
			aria-label="Search a fruit"
		/>
		<Fa
			icon={faAnglesUpDown}
			class="pointer-events-none absolute end-3 top-1/2 size-6 -translate-y-1/2 text-gray-300 transition-colors group-has-[[aria-expanded='true']]:text-black"
		/>
	</div>

	<Combobox.Content class="bg-white shadow-md outline-none" transition={slide} sideOffset={8}>
		{#each filteredFruits as fruit (fruit.value)}
			<Combobox.Item
				class="flex h-10 w-full cursor-pointer select-none items-center py-3 pl-5 pr-1.5 text-sm capitalize outline-none transition-all duration-75 data-[highlighted]:bg-black data-[highlighted]:text-white"
				value={fruit.value}
				label={fruit.label}
			>
				{fruit.label}
				<Combobox.ItemIndicator class="ml-auto" asChild={false}>
					<Fa icon={faCheck} />
				</Combobox.ItemIndicator>
			</Combobox.Item>
		{:else}
			<span class="block px-5 py-2 text-sm text-red">No results found</span>
		{/each}
	</Combobox.Content>
	<Combobox.HiddenInput name="favoriteFruit" />
</Combobox.Root>
