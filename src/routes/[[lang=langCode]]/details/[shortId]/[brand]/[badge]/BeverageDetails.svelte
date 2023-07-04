<script lang="ts">
	import { page } from '$app/stores';
	// import Navigation from './Navigation.svelte';
	import Gallery from './Gallery/Gallery.svelte';
	// import Header from './Header.svelte';
	// import Tale from './Tale/Tale.svelte';
	// import Testimony from './Testimony/Testimony.svelte';
	// import FootNotes from './FootNotes.svelte';
	// import Impressions from './Impressions.svelte';
	// import AdminBar from './AdminBar/AdminBar.svelte';
	// import Rating from './Rating/Rating.svelte';

	$: ({ authenticated, details } = $page.data);
</script>

<article class="details container grid gap-x-10 px-3 py-0 lg:pt-5">
	<Gallery />
	<div class="details-main">
		<div>Header</div>
		<!-- <Header /> -->
		<div>Tale</div>
		<!-- <Tale /> -->
		<div>Testimony</div>
		<!-- <Testimony /> -->
		<div>Impressions</div>
		<!-- <Impressions /> -->
		<div>FootNotes</div>
		<!-- <FootNotes /> -->
		{#if authenticated}
			<div>AdminBar</div>
			<!-- <AdminBar /> -->
		{/if}
	</div>
	<aside>
		<div class="details-navigation">Navigation</div>
		<!-- <Navigation /> -->
		{#if details.ratings}
			<div>Rating</div>
			<!-- <Rating /> -->
		{/if}
	</aside>
</article>
