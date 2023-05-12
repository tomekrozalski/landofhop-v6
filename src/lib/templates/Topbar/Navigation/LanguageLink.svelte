<script lang="ts">
	export let lang: string;
	export let link: string;

	const changeHtmlLangAttribute = () => {
		const html = document.querySelector('html') as HTMLHtmlElement;
		html.setAttribute('lang', lang);
	};
</script>

<li class="flex">
	<a
		class="flex w-full items-center justify-end p-2 px-4 uppercase transition-colors
		hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none
		md:w-auto md:px-2"
		data-sveltekit-preload-data="off"
		on:click={changeHtmlLangAttribute}
		href={link}
	>
		{lang}
	</a>
</li>
