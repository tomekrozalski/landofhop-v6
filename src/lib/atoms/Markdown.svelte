<script lang="ts">
	import snarkdown from 'snarkdown';

	const {
		style = '',
		value,
		...rest
	}: { style?: string; value: string; [value: string]: unknown } = $props();
</script>

<span {style} {...rest}>
	{@html snarkdown(value)}
</span>

<style>
	span :global(p) {
		margin: 0.5rem 0;
	}

	span :global(a) {
		color: theme('colors.green.DEFAULT');
		text-decoration: underline;
		transition: color 0.2s;
	}

	span :global(a:hover) {
		color: theme('colors.black');
	}
</style>
