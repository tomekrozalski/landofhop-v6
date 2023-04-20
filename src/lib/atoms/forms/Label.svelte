<script lang="ts">
	export let id: string;
	export let inlined: boolean = false;
	export let isRequired: boolean = false;
</script>

<label
	for={id}
	class="h-10 w-full cursor-pointer leading-10 after:content-[':'] lg:text-right"
	class:text-left={inlined}
>
	<slot />
	{#if isRequired}
		<span class="text-red">*</span>
	{/if}
</label>

<style>
	@media (min-width: 1024px) {
		label {
			grid-column: 1 / 2;
		}
	}
</style>
