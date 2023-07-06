<script lang="ts">
	import { parse } from 'marked';

	export let style: string = '';
	export let value: string;
</script>

<span {style}>
	{@html parse(value)}
</span>

<style>
	span :global(p) {
		margin: 0.5rem 0;
	}

	/* span :global(ul) {
		margin-left: 1rem;
	} */

	/* span :global(li) {
		list-style-type: square;
	} */

	/* span :global(a) {
		color: var(--color-success);
		border-bottom: 1px solid var(--color-white);
		transition: border-color var(--transition-default);
	} */

	/* span :global(a:hover) {
		border-color: var(--color-black);
	} */
</style>
