<script lang="ts">
	export let innerHeight: number;
	export let innerWidth: number;
	export let label: string;
	export let xScale: any;
	export let xScaleTicks: string[];
	export let unit: string = '';
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
