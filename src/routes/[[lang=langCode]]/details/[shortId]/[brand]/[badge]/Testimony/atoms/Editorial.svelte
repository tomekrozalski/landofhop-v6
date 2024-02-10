<script lang="ts">
	const { tag = 'em', ...rest } = $props<{ tag?: string; [value: string]: unknown }>();
</script>

<svelte:element
	this={tag}
	class="skip-ink-none font-medium underline decoration-sea-light decoration-8 -underline-offset-2"
	{...rest}
>
	<slot />
</svelte:element>
