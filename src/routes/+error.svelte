<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} {$page.error?.message || 'Not found'}</title>
</svelte:head>

<div class="container py-10 text-center">
	<h1 class="m-10 text-4xl font-bold text-gray-800">
		{$page.status}
		{$page.error?.message || 'Not found'}
	</h1>
</div>
