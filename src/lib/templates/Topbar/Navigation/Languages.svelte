<script lang="ts">
	import { page } from '$app/stores';
	import LanguageLink from './LanguageLink.svelte';

	const path = $derived($page.url.pathname.replace(/^\/en/, '') || '/');
</script>

<ul class="flex flex-grow flex-col py-1 text-right md:ml-0 md:flex-row">
	<LanguageLink lang="pl" link={path} />
	<LanguageLink lang="en" link="/en{path}" />
</ul>
