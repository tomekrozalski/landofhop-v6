<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';

	const { innerWidth, yScale } = $props<{ innerWidth: number; yScale: any }>();
</script>

<g>
	<text x="0" y="-60" style="transform: rotate(-90deg)" text-anchor="end">
		{$LL.pages.stats.landing.numberOfBeverages()}
	</text>
	{#each yScale.ticks() as tick, index}
		<g style="transform: translate(0, {yScale(tick)}px)">
			<line x2={innerWidth} class:stroke-gray-200={index > 0} class="stroke-black" />
			{#if index !== 0}
				<text x="-15" y="-5" text-anchor="end" class="text-xs">{tick}</text>
			{/if}
		</g>
	{/each}
</g>
