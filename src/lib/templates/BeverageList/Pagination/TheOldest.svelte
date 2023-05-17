<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFlagCheckered } from '@fortawesome/pro-light-svg-icons';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div
	class="flex items-center justify-center
	py-2 pl-3 pr-4 text-base transition-colors"
>
	{$LL.pages.listing.theOldestMonth()}
	<Fa icon={faFlagCheckered} class="ml-3" />
</div>
