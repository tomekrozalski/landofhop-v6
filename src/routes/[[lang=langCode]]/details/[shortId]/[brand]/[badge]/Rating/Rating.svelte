<script lang="ts">
	import { onMount } from 'svelte';
	import { ConfettiBurst } from 'svelte-canvas-confetti';
	import { tweened } from 'svelte/motion';
	import LL from '$lib/i18n/i18n-svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import RatingDetails from './RatingDetails.svelte';
	import Stars from './Stars.svelte';

	let { ratings, shortId } = $derived($page.data.details);
	let isDetailsOpened = $state(false);
	let position = $state<[number, number]>([0, 0]);
	let headerRef = $state<HTMLHeadElement>();

	const ratingStore = tweened<number>(0);

	onMount(() => {
		console.log('headerRef!.getBoundingClientRect', headerRef!.getBoundingClientRect());
		const { height, left, top, width } = headerRef!.getBoundingClientRect();
		position = [left + width / 2, top + height / 2];
	});

	afterNavigate(() => {
		ratingStore.set(ratings.total.value, { duration: $ratingStore ? 400 : 0 });
	});
</script>

<section>
	<header
		bind:this={headerRef}
		class:cursor-pointer={!isDetailsOpened}
		class="group relative flex flex-col items-center rounded-t bg-green px-3 pb-5 pt-3 text-center text-white"
	>
		<h3 class="mb-3 text-base">{$LL.pages.details.ratings.title()}</h3>
		{#if ratings.total.value >= 4 && position[0] && position[1]}
			{#key shortId}
				<ConfettiBurst origin={position} />
			{/key}
		{/if}
		<Stars {isDetailsOpened} score={$ratingStore || ratings.total.value} />
	</header>
	{#if isDetailsOpened}
		<RatingDetails />
	{/if}
	<button
		class:bg-green={isDetailsOpened}
		class:bg-gray-100={!isDetailsOpened}
		class:text-white={isDetailsOpened}
		class:hover:text-black={isDetailsOpened}
		class="block w-full rounded-b p-1 text-sm transition-colors hover:bg-gray-200 focus:outline-0"
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
