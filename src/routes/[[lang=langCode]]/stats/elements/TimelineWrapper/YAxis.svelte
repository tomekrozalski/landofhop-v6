<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';

	const { innerWidth, yScale, ticks } = $props<{
		innerWidth: number;
		yScale: any;
		ticks: number;
	}>();
	const formattedTicks = yScale.ticks(ticks).filter((tick: number) => Number.isInteger(tick));
</script>

<g>
	<text x="0" y="-60" style="transform: rotate(-90deg)" text-anchor="end">
		{$LL.pages.stats.landing.numberOfBeverages()}
	</text>
	{#each formattedTicks as tick, index}
		<g style="transform: translate(0, {yScale(tick)}px)">
			<line x2={innerWidth} class:stroke-gray-200={index > 0} class="stroke-black" />
			{#if index !== 0}
				<text x="-15" y="-5" text-anchor="end" class="text-sm">{tick}</text>
			{/if}
		</g>
	{/each}
</g>
