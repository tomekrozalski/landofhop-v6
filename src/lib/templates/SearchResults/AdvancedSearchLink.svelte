<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="container relative">
	<a
		href="/advanced-search"
		class="absolute right-0 top-0 bg-white p-5 transition-colors hover:bg-gray-200"
	>
		{$LL.header.advancedSearchLink()}
	</a>
</div>
