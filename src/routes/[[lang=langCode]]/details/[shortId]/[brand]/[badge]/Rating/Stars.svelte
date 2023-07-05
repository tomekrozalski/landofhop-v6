<script lang="ts">
	import StarElement from './StarElement.svelte';

	export let isDetailsOpened: boolean;
	export let score: number;

	$: valuesArray = new Array(5).fill(0).map((_, index) => {
		if (score > index && score < index + 1) {
			return Number((score - index).toFixed(5));
		}

		return score >= index + 1 ? 1 : 0;
	});
</script>

<strong
	class="absolute left-1/2 top-auto -translate-x-1/2 text-xl font-bold leading-tight"
	class:opacity-100={isDetailsOpened}
	class:opacity-0={!isDetailsOpened}
	class:transition-opacity={!isDetailsOpened}
	class:group-hover:opacity-100={!isDetailsOpened}
>
	{Number(score.toString().slice(0, 4)).toLocaleString('pl', { maximumFractionDigits: 2 })}
</strong>
<ul
	class="flex justify-center gap-1"
	class:opacity-0={isDetailsOpened}
	class:opacity-100={!isDetailsOpened}
	class:group-hover:opacity-0={!isDetailsOpened}
	class:transition-opacity={!isDetailsOpened}
>
	{#each valuesArray as value}
		<StarElement {value} />
	{/each}
</ul>
