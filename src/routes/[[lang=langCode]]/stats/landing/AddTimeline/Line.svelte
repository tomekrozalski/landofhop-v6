<script lang="ts">
	import { draw } from 'svelte/transition';
	import { curveBasis, line } from 'd3-shape';
	import type { AddTimelineBar } from '../utils/normalizers/Output.d';

	let {
		addTimelineData,
		isBarSelected = false,
		selectedLine,
		xScale,
		xValue,
		yScale
	} = $props<{
		addTimelineData: AddTimelineBar[];
		isBarSelected: boolean;
		selectedLine: 'bottles' | 'cans' | 'total' | null;
		xScale: any;
		xValue: (value: AddTimelineBar) => string;
		yScale: any;
	}>();

	const bottles = (d: AddTimelineBar) => d.bottle;
	const cans = (d: AddTimelineBar) => d.can;
	const total = (d: AddTimelineBar) => d.bottle + d.can;

	function linePath(type: any) {
		return line<AddTimelineBar>()
			.x((d: any) => xScale(xValue(d)) || 0)
			.y((d: any) => yScale(type(d)))
			.curve(curveBasis);
	}
</script>

<g
	style="transform: translate({Math.round(xScale.bandwidth() / 2)}px, 0)"
	class:opacity-20={isBarSelected}
>
	<path
		class="cursor-pointer fill-none stroke-green stroke-3 opacity-100 transition-opacity"
		class:opacity-20={selectedLine && selectedLine !== 'bottles'}
		d={linePath(bottles)(addTimelineData)}
		in:draw
		on:mouseenter={() => (selectedLine = 'bottles')}
		on:mouseleave={() => (selectedLine = null)}
		role="presentation"
	/>
	<path
		class="cursor-pointer fill-none stroke-yellow stroke-3 opacity-100 transition-opacity"
		class:opacity-20={selectedLine && selectedLine !== 'cans'}
		d={linePath(cans)(addTimelineData)}
		in:draw
		on:mouseenter={() => (selectedLine = 'cans')}
		on:mouseleave={() => (selectedLine = null)}
		role="presentation"
	/>
	<path
		class="cursor-pointer fill-none stroke-turquoise stroke-3 opacity-100 transition-opacity"
		class:opacity-20={selectedLine && selectedLine !== 'total'}
		d={linePath(total)(addTimelineData)}
		in:draw
		on:mouseenter={() => (selectedLine = 'total')}
		on:mouseleave={() => (selectedLine = null)}
		role="presentation"
	/>
</g>
