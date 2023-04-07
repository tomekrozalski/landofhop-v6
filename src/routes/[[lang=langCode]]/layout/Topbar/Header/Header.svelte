<script lang="ts">
	import layoutStore from '../../utils/store';
	import Logo from './Logo.svelte';
	// import SearchBar from './Searchbar/Searchbar.svelte';
	import NavigationSwitcher from './NavigationSwitcher.svelte';
</script>

<header
	class:translate-y-80={$layoutStore.isNavigationOpened}
	class:md:translate-y-16={$layoutStore.isNavigationOpened}
	class="fixed left-0 top-0 z-10 h-28 w-full translate-y-0 bg-black transition-transform duration-200"
>
	<div class="container grid h-28 grid-cols-header">
		<div />
		<Logo />
		<NavigationSwitcher />
	</div>
</header>
