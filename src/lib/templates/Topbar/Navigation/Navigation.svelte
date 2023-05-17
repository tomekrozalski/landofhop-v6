<script lang="ts">
	import { slide } from 'svelte/transition';
	import Languages from './Languages.svelte';
	import Pages from './Pages.svelte';
</script>

<nav out:slide={{ duration: 500 }} class="fixed left-0 top-0 z-10 w-full bg-white">
	<div class="container flex h-80 w-full flex-row justify-between md:h-20 md:flex-row-reverse">
		<Pages />
		<Languages />
	</div>
</nav>
