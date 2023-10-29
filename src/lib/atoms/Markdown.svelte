<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let style: string = '';
	export let value: string;
</script>

<span {style}>
	<SvelteMarkdown source={value} />
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
