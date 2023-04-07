<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';

	console.log('page', $page);
</script>

<h1>{$LL.about.header()}</h1>
