<script lang="ts">
	export let innerHeight: number;
	export let xScale: any;

	const xScaleTicks: string[] = xScale.domain();
	const yearTicks = xScaleTicks.filter(
		(value, index) => index === 0 || value.split('-')[1] === '01'
	);
</script>

<g>
	{#each xScaleTicks.filter((value) => !(Number(value.split('-')[1]) % 2)) as tick}
		<g
			style="transform: translate({xScale(tick) + xScale.bandwidth() / 2}px, {innerHeight}px)"
			class="relative"
		>
			<line y2="5" class="stroke-black" />
			<text y="25" text-anchor="middle" class="text-xs">
				{tick.split('-')[1]}
			</text>
		</g>
	{/each}
	{#each yearTicks as tick}
		<g style="transform: translate({xScale(tick)}px, {innerHeight + 22}px)">
			<text y="25" class="text-sm">{tick.split('-')[0]} →</text>
		</g>
	{/each}
</g>
