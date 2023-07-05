<script lang="ts">
	// import { translate } from 'svelte-intl';
	import { tweened } from 'svelte/motion';
	import LL from '$lib/i18n/i18n-svelte';
	// import { Confetti } from 'svelte-confetti';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import RatingDetails from './RatingDetails.svelte';
	import Stars from './Stars.svelte';

	$: ({ ratings, shortId } = $page.data.details);
	let isDetailsOpened = false;

	const ratingStore = tweened<number>(0);

	afterNavigate(() => {
		ratingStore.set(ratings.total.value, { duration: $ratingStore ? 400 : 0 });
	});
</script>

<section class="mx-3">
	<header
		class:cursor-pointer={!isDetailsOpened}
		class="group relative rounded-t bg-green px-3 pb-5 pt-3 text-center text-white"
	>
		<h3 class="mb-3 text-base">{$LL.pages.details.ratings.title()}</h3>
		{#if ratings.total.value >= 4}
			{#key shortId}
				<div>Confetti</div>
				<!-- <Confetti /> -->
			{/key}
		{/if}
		<Stars {isDetailsOpened} score={$ratingStore || ratings.total.value} />
	</header>
	{#if isDetailsOpened}
		<RatingDetails />
	{/if}
	<button
		class:bg-green={isDetailsOpened}
		class:text-white={isDetailsOpened}
		class:hover:text-black={isDetailsOpened}
		class:bg-gray-100={!isDetailsOpened}
		class="block w-full rounded-b p-1 text-sm transition-colors hover:bg-gray-200"
		on:click={() => {
			isDetailsOpened = !isDetailsOpened;
		}}
		type="button"
	>
		{isDetailsOpened
			? $LL.pages.details.ratings.hideDetails()
			: $LL.pages.details.ratings.showDetails()}
	</button>
</section>
