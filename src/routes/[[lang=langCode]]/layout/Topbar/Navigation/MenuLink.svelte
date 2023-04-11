<script lang="ts">
	export let link: string;
	export let label: string;
	export let preload: 'hover' | 'off' = 'hover';
</script>

<li class="flex">
	<a
		class="flex w-full items-center p-2 px-4 transition-colors hover:bg-black hover:text-white md:w-auto md:px-2"
		class:justify-end={preload === 'off'}
		data-sveltekit-preload-data={preload}
		href={link}
	>
		{label}
	</a>
</li>
