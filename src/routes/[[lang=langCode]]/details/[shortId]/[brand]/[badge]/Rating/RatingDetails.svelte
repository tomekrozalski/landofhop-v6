<script lang="ts">
	import { slide } from 'svelte/transition';
	import LL from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';

	const { rateBeer, total, untappd } = $derived($page.data.details.ratings);
</script>

<footer transition:slide class="bg-gray-100 p-5 text-base">
	<ul>
		{#if rateBeer}
			<li>
				RateBeer:<br />
				<strong>{rateBeer.value.toLocaleString('pl', { maximumFractionDigits: 2 })}</strong>
				({$LL.pages.details.ratings.quantity(rateBeer.quantity)})
			</li>
		{/if}
		{#if untappd}
			<li class:mt-2={rateBeer}>
				Untappd:<br />
				<strong>{untappd.value.toLocaleString('pl', { maximumFractionDigits: 2 })}</strong>
				({$LL.pages.details.ratings.quantity(untappd.quantity)})
			</li>
		{/if}
	</ul>
	<div class="mt-5 text-right text-sm text-gray-400">
		{$LL.pages.details.ratings.updatedAt(total.date)}
	</div>
</footer>
