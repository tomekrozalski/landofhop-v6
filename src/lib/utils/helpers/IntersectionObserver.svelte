<script lang="ts">
	import { onMount } from 'svelte';

	export let once = false;
	export let threshold = 0;

	let intersecting = false;
	let container: HTMLDivElement;

	let info1 = 'info1';
	let info2 = 'info2';

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const observer = new IntersectionObserver(
				(entries) => {
					info1 = JSON.stringify(entries);
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
			info2 = 'IntersectionObserver is not supported';
		}
	});
</script>

<div bind:this={container} class="h-full w-full">
	test {intersecting ? 'tak' : 'no'}
	{info1}
	{info2}
	<slot {intersecting} />
</div>
