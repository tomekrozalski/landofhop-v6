<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from './Navigation.svelte';
	import Gallery from './Gallery/Gallery.svelte';
	import Header from './Header.svelte';
	import Tale from './Tale/Tale.svelte';
	import Testimony from './Testimony/Testimony.svelte';
	import Impressions from './Impressions/Impressions.svelte';
	// import FootNotes from './FootNotes.svelte';
	// import AdminBar from './AdminBar/AdminBar.svelte';
	import Rating from './Rating/Rating.svelte';

	$: ({ authenticated, details } = $page.data);
</script>

<article class="details container grid px-3 py-0 lg:gap-x-14 lg:px-0 lg:pb-36 lg:pt-5">
	<Gallery />
	<div class="details-main">
		<Header />
		<Tale />
		<Testimony />
		<Impressions />
		<div>FootNotes</div>
		<!-- <FootNotes /> -->
		{#if authenticated}
			<div>AdminBar</div>
			<!-- <AdminBar /> -->
		{/if}
	</div>
	<aside>
		<Navigation />
		{#if details.ratings}
			<Rating />
		{/if}
	</aside>
</article>
