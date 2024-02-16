<script lang="ts">
	const { once = false, threshold = 0 } = $props();
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
	<slot {intersecting} />
</div>
