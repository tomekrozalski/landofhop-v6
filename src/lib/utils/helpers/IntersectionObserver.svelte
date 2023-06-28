<script lang="ts">
	import { onMount } from 'svelte';

	export let once = false;
	export let threshold = 0;

	let intersecting = false;
	let container: HTMLDivElement;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const observer = new IntersectionObserver(
				(entries) => {
					console.log('entries', entries);
					intersecting = entries[0].isIntersecting;
					if (intersecting && once) {
						observer.unobserve(container);
					}
				},
				{ threshold }
			);

			observer.observe(container);
			return () => observer.unobserve(container);
		} else {
			console.warn('IntersectionObserver is not supported');
		}
	});
</script>

<div bind:this={container} class="h-full w-full">
	test {intersecting ? 'tak' : 'no'}
	<slot {intersecting} />
</div>
