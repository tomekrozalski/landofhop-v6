<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLeaf } from '@fortawesome/pro-solid-svg-icons';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="flex items-center justify-center py-2 pl-3 pr-4 text-base transition-colors">
	<Fa icon={faLeaf} class="mr-3 text-green" />
	{$LL.pages.listing.theNewestMonth()}
</div>
