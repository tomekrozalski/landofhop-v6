<script lang="ts">
	export let classNames: string = '';
	export let errors: string[] | undefined = undefined;
	export let value: string;

	$: console.log('!', errors);
</script>

<span class="relative {classNames}">
	<input
		class="h-10 w-full border-b-2 border-b-gray-300 bg-gray-100 px-2 text-lg leading-10
  focus:border-b-black focus:outline-none"
		bind:value
		{...$$restProps}
	/>
	{#if errors}
		<span class="absolute left-0 right-0 top-full z-10 bg-yellow-light px-4 py-2 text-sm">
			{errors}
		</span>
	{/if}
</span>
