<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import Languages from './Languages.svelte';
	import Pages from './Pages.svelte';
</script>

<nav
	transition:slide={{ duration: 200, easing: cubicInOut }}
	class="fixed left-0 top-0 w-full bg-white"
>
	<div class="container flex h-80 w-full flex-row justify-between md:h-20 md:flex-row-reverse">
		<Pages />
		<Languages />
	</div>
</nav>
