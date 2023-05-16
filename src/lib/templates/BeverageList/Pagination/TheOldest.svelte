<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Icon from '$lib/atoms/Icon.svelte';
</script>

<div
	class="flex items-center justify-center
	bg-gray-400 py-2 pl-3 pr-4 text-base text-white transition-colors"
>
	{$LL.pages.listing.theOldestMonth()}
	<Icon name="finish" class="ml-3" style="light" />
</div>
