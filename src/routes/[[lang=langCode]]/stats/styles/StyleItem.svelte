<script lang="ts">
	// import authentication from '$lib/utils/stores/authentication';
	import type { RawStylesStats } from './RawStylesStats.d';
	// import FindAll from '../elements/FindAll.svelte';
	// import UpdateButton from '../elements/UpdateButton.svelte';

	const { item } = $props<{ item: RawStylesStats }>();
</script>

<li class="list-inside list-disc">
	<span lang={item.name.language}>{item.name.value}</span>
	<span class="mx-px text-base text-gray-400">({item.amount})</span>
	<!-- <FindAll query="styleTags={item.badge}" /> -->
	<!-- {#if $authentication.isLoggedIn}
		<UpdateButton badge={item.badge} {onUpdateClick} />
	{/if} -->
</li>
