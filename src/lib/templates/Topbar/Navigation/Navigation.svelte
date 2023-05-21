<script lang="ts">
	import layoutStore from '$lib/templates/Main/store';

	import Languages from './Languages.svelte';
	import Pages from './Pages.svelte';
</script>

<nav
	id="navigation"
	aria-hidden={!$layoutStore.isNavigationOpened}
	class="fixed left-0 top-0 z-10 w-full bg-white"
>
	<div class="container flex h-80 w-full flex-row justify-between md:h-20 md:flex-row-reverse">
		<Pages />
		<Languages />
	</div>
</nav>
