<script lang="ts">
	const { badge }: { badge: string } = $props();
</script>

<a
	href="/stats/ingredients/{badge}"
	class="absolute -left-6 top-2 z-10 flex h-4 w-4 items-center justify-center border border-gray-300
	bg-white pb-1 text-sm text-gray-300 transition-colors hover:border-black hover:text-black"
	data-sveltekit-noscroll
>
	+
</a>
