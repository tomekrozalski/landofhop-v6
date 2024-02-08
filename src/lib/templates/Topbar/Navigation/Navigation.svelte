<script lang="ts">
	import navigation from '$lib/templates/Main/navigation.svelte';
	import Languages from './Languages.svelte';
	import Pages from './Pages.svelte';
</script>

<nav
	id="navigation"
	aria-hidden={!navigation.isNavigationOpened}
	class="fixed left-0 top-0 z-20 w-full bg-white transition-transform"
	class:-translate-y-full={!navigation.isNavigationOpened}
>
	<div class="container flex h-80 w-full flex-row justify-between md:h-20 md:flex-row-reverse">
		<Pages />
		<Languages />
	</div>
</nav>
