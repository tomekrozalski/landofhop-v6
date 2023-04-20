<script lang="ts">
	export let link: string;
	export let label: string;
</script>

<li class="flex">
	<a
		class="flex w-full items-center p-2 px-4 transition-colors hover:bg-black hover:text-white md:w-auto md:px-2"
		href={link}
	>
		{label}
	</a>
</li>
