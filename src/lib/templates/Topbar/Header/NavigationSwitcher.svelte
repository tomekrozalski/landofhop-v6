<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Icon from '$lib/atoms/Icon.svelte';
	import layoutStore from '$lib/templates/Main/store';
</script>

<button
	on:click={layoutStore.toggleNavbar}
	class="more group flex items-center justify-center text-xs
	focus:border-2 focus:border-black focus:bg-white focus:outline-none md:text-sm
	lg:text-base"
	aria-label={$layoutStore.isNavigationOpened
		? $LL.header.closeNavigation()
		: $LL.header.openNavigation()}
>
	<Icon
		name="ellipsis"
		size="2x"
		class="text-white transition-colors group-hover:text-gray-400 group-focus:text-black md:h-[0.37rem]"
	/>
</button>
