<script lang="ts">
	import storeLayout from '../utils/store';
	import Header from './Header/Header.svelte';
	import Navigation from './Navigation/Navigation.svelte';
</script>

<Header />
{#if $storeLayout.isNavigationOpened}
	<Navigation />
{/if}
