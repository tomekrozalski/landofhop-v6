<script lang="ts">
	import Fa from 'svelte-fa';
	import { faEllipsis } from '@fortawesome/pro-regular-svg-icons';
	import { LL } from '$lib/i18n/i18n-svelte';
	import navigation from '$lib/templates/Main/navigation.svelte';
</script>

<button
	on:click={navigation.toggleNavbar}
	class="more group flex items-center justify-center
	text-xs focus-visible:border-2 focus-visible:border-black focus-visible:bg-white focus-visible:outline-none
	md:text-sm lg:text-base"
	aria-label={navigation.isNavigationOpened
		? $LL.header.closeNavigation()
		: $LL.header.openNavigation()}
	aria-controls="navigation"
	aria-expanded={navigation.isNavigationOpened}
>
	<Fa
		icon={faEllipsis}
		size="2x"
		class="text-white transition-colors group-hover:text-gray-400 group-focus-visible:text-black md:h-[0.37rem]"
	/>
</button>
