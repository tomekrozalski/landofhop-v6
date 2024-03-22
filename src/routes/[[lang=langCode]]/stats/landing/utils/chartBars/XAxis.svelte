<script lang="ts">
	const {
		innerHeight,
		innerWidth,
		label,
		xScale,
		xScaleTicks,
		unit = ''
	}: {
		innerHeight: number;
		innerWidth: number;
		label: string;
		xScale: any;
		xScaleTicks: string[];
		unit?: string;
	} = $props();
</script>

<g>
	<text x={innerWidth} y={innerHeight + 65} text-anchor="end">{label}</text>
	{#each xScaleTicks as tick}
		<g style="transform: translate({xScale(tick)}px, {innerHeight}px)">
			<line y2="5" class="stroke-black" />
			<text y="25" text-anchor="middle" class="text-xs">{tick}{unit}</text>
		</g>
	{/each}
</g>
