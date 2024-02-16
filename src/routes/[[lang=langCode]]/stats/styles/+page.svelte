<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { StyleGroups } from '$lib/db/enums/StyleGroups.enum';
	import StatsWrapper from '../elements/Wrapper.svelte';
	import StyleItem from './StyleItem.svelte';

	const { data } = $props();

	const styleGroups = (Object.keys(StyleGroups) as Array<keyof typeof StyleGroups>).map(
		(key) => key
	);
</script>

<svelte:head>
	<title>{$LL.pages.stats.landing.title()}</title>
</svelte:head>

<StatsWrapper>
	<ul>
		{#each styleGroups as group}
			<li>
				<h2 class="mx-5 mb-5 mt-8 border-b border-gray-200 pb-2 text-xl font-bold lg:mx-0">
					{$LL.styleGroup[group]()}
				</h2>
				<ul>
					{#each data.statsData.filter((props) => props.group === group) as item}
						<StyleItem {item} />
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
	<!-- {#if isModalOpen && modalData}
		<UpdateStyle
			initialValues={{
				...modalData,
				name: formatLanguageValueFromDb(modalData.name)
			}}
			close={() => (isModalOpen = false)}
		/>
	{/if} -->
</StatsWrapper>
