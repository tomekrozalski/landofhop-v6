<script lang="ts">
	import { page } from '$app/stores';
	import MenuLink from './MenuLink.svelte';

	const path = $page.url.pathname.replace(/^\/en/, '') || '/';

	console.log('path', path);
</script>

<ul class="languages mr-5 flex flex-col py-1 md:flex-row">
	<MenuLink label="PL" link={path} preload="off" />
	<MenuLink label="EN" link="/en{path}" preload="off" />
</ul>
