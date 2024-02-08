<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	const { style = '', value, ...rest } = $props<{ style: string; value?: string }>();
</script>

<span {style} {...rest}>
	<SvelteMarkdown source={value} isInline />
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
