<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';

	const navItems = [
		{
			link: '/stats',
			name: $LL.pages.stats.common.navigation.general(),
			url: '^/stats$'
		},
		{
			link: '/stats/styles',
			name: $LL.pages.stats.common.navigation.styles(),
			url: '^/stats/styles$'
		},
		{
			link: '/stats/ingredients/malt',
			name: $LL.pages.stats.common.navigation.ingredients(),
			url: '^/stats/ingredients(/.*)?$'
		}
	];
</script>

<nav>
	<ul class="flex w-full flex-col gap-2 px-5 lg:flex-row lg:px-0">
		{#each navItems as { link, name, url }}
			<li class="flex-1">
				<a
					class:bg-gray-100={$page.url.pathname.match(new RegExp(url))}
					class="flex justify-center border border-gray-300 px-3 py-2 transition-colors hover:bg-gray-100"
					href={link}>{name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
