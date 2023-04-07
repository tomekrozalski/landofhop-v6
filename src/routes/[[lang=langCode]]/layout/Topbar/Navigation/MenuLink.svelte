<script lang="ts">
	export let link: string;
	export let label: string;
	export let preload: 'hover' | 'off' = 'hover';
</script>

<li class="flex">
	<a
		class="flex items-center p-2 transition-colors hover:bg-black hover:text-white"
		data-sveltekit-preload-data={preload}
		href={link}
	>
		{label}
	</a>
</li>
