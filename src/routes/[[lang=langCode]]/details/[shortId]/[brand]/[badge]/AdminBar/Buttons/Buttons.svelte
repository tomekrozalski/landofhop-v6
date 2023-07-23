<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import Remove from './Remove.svelte';
	import UpdateRatings from './UpdateRatings.svelte';
	import LinkButton from './LinkButton.svelte';

	$: ({ badge, brand, shortId } = $page.data.details);
	$: params = `${shortId}/${brand.badge}/${badge}`;
</script>

<div class="mb-3 flex flex-col flex-wrap gap-3 lg:flex-row">
	<LinkButton href={`/dashboard/update-beverage/${params}`}>
		{$LL.pages.details.adminBar.updateContent()}
	</LinkButton>
	<LinkButton href={`/dashboard/update-beverage-photos/${params}`}>
		{$LL.pages.details.adminBar.updateImages()}
	</LinkButton>
	{#await $page.data.streamed.adminData then adminData}
		<UpdateRatings {adminData} />
	{/await}
</div>
<div class="mb-3 flex flex-col flex-wrap gap-3 lg:flex-row">
	<Remove />
</div>
