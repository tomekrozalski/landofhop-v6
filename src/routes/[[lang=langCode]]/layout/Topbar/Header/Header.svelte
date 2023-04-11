<script lang="ts">
	import layoutStore from '../../utils/store';
	import Logo from './Logo.svelte';
	import SearchBar from './Searchbar.svelte';
	import NavigationSwitcher from './NavigationSwitcher.svelte';
</script>

<header
	class:translate-y-80={$layoutStore.isNavigationOpened}
	class:md:translate-y-20={$layoutStore.isNavigationOpened}
	class="fixed left-0 top-0 z-10 w-full translate-y-0 bg-black transition-transform duration-200"
>
	<div class="header container relative grid h-16 md:h-20 lg:h-28">
		<Logo />
		<SearchBar />
		<NavigationSwitcher />
	</div>
</header>
