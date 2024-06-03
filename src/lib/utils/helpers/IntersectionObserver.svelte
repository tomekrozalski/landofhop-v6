<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		figure,
		once = false,
		threshold = 0
	}: {
		figure: Snippet<[boolean]>;
		once?: boolean;
		threshold?: number;
	} = $props();
	let intersecting = $state(false);
	let container = $state<HTMLDivElement>();

	$effect(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const observer = new IntersectionObserver(
				(entries) => {
					intersecting = entries[0].isIntersecting;
					if (intersecting && once) {
						observer.unobserve(container!);
					}
				},
				{ threshold }
			);

			observer.observe(container!);
			return () => observer.unobserve(container!);
		}
	});
</script>

<div bind:this={container} class="h-full w-full">
	{#if figure}
		{@render figure(intersecting)}
	{/if}
</div>
