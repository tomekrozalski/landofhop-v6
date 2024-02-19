<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTag } from '@fortawesome/pro-solid-svg-icons';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<header class="mb-10">
	<h2
		class="mx-5 mb-3 mt-10 flex justify-between border-b border-gray-200 pb-2 text-xl font-bold lg:mx-0"
	>
		<span class="flex items-center">
			<Fa icon={faTag} class="mr-2 text-green" />
			{$LL.pages.dashboard.beverage.labelInfo.title()}
		</span>
		<span class="text-sm font-normal text-gray-600">1/3</span>
	</h2>
	<p class="text-right text-sm text-gray-400">
		{$LL.pages.dashboard.beverage.labelInfo.description()}
	</p>
</header>
