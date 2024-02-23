<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children } = $props<{ children: Snippet }>();
</script>

<h3
	class="relative px-10 text-base before:absolute before:left-0 before:top-1/2 before:-z-10 before:block before:h-px before:w-full before:bg-gray-200"
>
	<span class="inline-block bg-white px-4">
		{@render children()}
	</span>
</h3>
