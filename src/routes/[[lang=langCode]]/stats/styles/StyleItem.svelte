<script lang="ts">
	// import authentication from '$lib/utils/stores/authentication';
	import MarkLanguage from '$lib/atoms/MarkLanguage.svelte';
	import type { RawStylesStats } from './RawStylesStats.d';
	// import FindAll from '../elements/FindAll.svelte';
	// import UpdateButton from '../elements/UpdateButton.svelte';

	const { item }: { item: RawStylesStats } = $props();
</script>

<li class="list-inside list-disc">
	<MarkLanguage tag="span" name={item.name} />
	<span class="mx-px text-base text-gray-400">({item.amount})</span>
	<!-- <FindAll query="styleTags={item.badge}" /> -->
	<!-- {#if $authentication.isLoggedIn}
		<UpdateButton badge={item.badge} {onUpdateClick} />
	{/if} -->
</li>
