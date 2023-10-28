<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="container relative">
	<a
		href="/advanced-search"
		class="block bg-gray-200 p-3 text-center transition-colors
			sm:absolute sm:right-0 sm:top-0 sm:bg-white sm:p-5 sm:hover:bg-gray-200
		"
	>
		{$LL.header.advancedSearchLink()}
	</a>
</div>
