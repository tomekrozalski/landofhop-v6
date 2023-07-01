<script lang="ts">
	import { tick } from 'svelte';
	import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
	import { setLocale } from '$lib/i18n/i18n-svelte';
	import type { Locales } from '$lib/i18n/i18n-types';
	import { invalidateAll } from '$app/navigation';

	export let lang: Locales;
	export let link: string;

	const changeHtmlLangAttribute = async () => {
		await invalidateAll();
		await loadLocaleAsync(lang);
		setLocale(lang);

		const html = document.querySelector('html') as HTMLHtmlElement;
		html.setAttribute('lang', lang);
	};
</script>

<li class="flex">
	<a
		class="flex w-full items-center justify-end p-2 px-4 uppercase transition-colors
		hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none
		md:w-auto md:px-2"
		on:click={changeHtmlLangAttribute}
		href={link}
	>
		{lang}
	</a>
</li>
