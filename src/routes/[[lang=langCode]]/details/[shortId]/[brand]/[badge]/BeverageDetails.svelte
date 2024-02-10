<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from './Navigation.svelte';
	import Gallery from './Gallery/Gallery.svelte';
	import Header from './Header.svelte';
	import Tale from './Tale/Tale.svelte';
	import Testimony from './Testimony/Testimony.svelte';
	import Impressions from './Impressions/Impressions.svelte';
	import FootNotes from './FootNotes.svelte';
	import AdminBar from './AdminBar/AdminBar.svelte';
	import Rating from './Rating/Rating.svelte';

	const { authenticated, details } = $derived($page.data);
</script>

{#if details}
	<article
		class="details container grid px-3 pb-10 pt-0 md:pb-16 lg:gap-x-14 lg:px-0 lg:pt-5 xl:pb-36"
	>
		<Gallery />
		<div class="details-main">
			<Header />
			<Tale />
			<Testimony />
			<Impressions />
			<FootNotes />
			{#if authenticated}
				<AdminBar />
			{/if}
		</div>
		<aside>
			<Navigation />
			{#if details.ratings}
				<Rating />
			{/if}
		</aside>
	</article>
{/if}
