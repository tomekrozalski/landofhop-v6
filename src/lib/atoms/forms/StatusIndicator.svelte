<script lang="ts">
	import Icon from '$lib/atoms/Icon.svelte';

	export let classNames: string = '';
	export let isTouched: boolean, isValid: boolean;
</script>

<span class="relative {classNames}">
	{#if isTouched && isValid}
		<Icon name="check" size="1.5x" class="absolute right-3 top-5 -translate-y-1/2 text-green" />
	{:else if isTouched && !isValid}
		<Icon name="xmark" size="1.5x" class="absolute right-3 top-5 -translate-y-1/2 text-red" />
	{/if}
	<slot />
</span>
