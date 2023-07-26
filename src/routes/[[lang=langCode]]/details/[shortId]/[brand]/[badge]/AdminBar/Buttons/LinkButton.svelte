<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="flex h-10 items-center justify-center border-2 border-black bg-black px-6 text-white transition-colors hover:bg-white hover:text-black"
>
	<slot />
</a>
