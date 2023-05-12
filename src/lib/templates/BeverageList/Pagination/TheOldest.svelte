<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Icon from '$lib/atoms/Icon.svelte';
</script>

<div
	class="flex items-center justify-center bg-green
	py-2 pl-3 pr-4 text-base text-white transition-colors"
>
	<Icon name="leaf" class="mr-3" style="solid" />
	{$LL.pages.listing.theNewestMonth()}
</div>
