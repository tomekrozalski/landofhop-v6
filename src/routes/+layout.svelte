<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { navigating } from '$app/stores';
	import Main from '$lib/templates/Main/Main.svelte';
	import Topbar from '$lib/templates/Topbar/Topbar.svelte';
	import layoutStore from '$lib/templates/Main/store';
	import '../app.css';

	afterNavigate(() => {
		// when path change, close navigation
		layoutStore.closeNavbar();
	});

	$: $layoutStore.isLoading = !!$navigating;
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
	<meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
	<link rel="manifest" href="/manifest.json" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<Topbar />

<Main>
	<slot />
</Main>
