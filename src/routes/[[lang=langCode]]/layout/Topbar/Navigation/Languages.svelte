<script lang="ts">
	import { page } from '$app/stores';
	import MenuLink from './MenuLink.svelte';

	const path = $page.url.pathname.replace(/^\/en/, '') || '/';

	console.log('path', path);
</script>

<ul class="flex flex-grow flex-col py-1 text-right md:ml-0 md:flex-row">
	<MenuLink label="PL" link={path} preload="off" />
	<MenuLink label="EN" link="/en{path}" preload="off" />
</ul>
