<script lang="ts">
	const { id, isRequired = false } = $props<{ id: string; isRequired?: boolean }>();
</script>

<label for={id} class="h-10 w-full cursor-pointer text-right leading-10 after:content-[':']">
	<slot />
	{#if isRequired}
		<span class="text-red">*</span>
	{/if}
</label>
