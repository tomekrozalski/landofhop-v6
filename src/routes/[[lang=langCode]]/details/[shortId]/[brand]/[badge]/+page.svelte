<script lang="ts">
	import Breadcrumbs from '$lib/atoms/Breadcrumbs.svelte';

	export let data;

	$: [month, year] = data.details.added
		.split('.')
		.slice(1)
		.map((value) => +value);
</script>

<Breadcrumbs {month} {year} link="/" />
<div>Test</div>
