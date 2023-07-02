<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import formatListMonth from '$lib/utils/helpers/formatListMonth';

	export let link: string = '';
	export let month: number;
	export let year: number;

	$: locale = $page.params.lang || 'pl';
	$: date = new Date(year, month - 1);
</script>

<nav class="bg-gray-200 text-base">
	<ul class="container flex px-3">
		{#if link}
			<li class="flex">
				<a href={link} class="border-b-2 border-black px-3 py-2">
					<em class="font-medium not-italic">{$LL.breadcrumbs.list()}</em>,
					{formatListMonth(date, locale)}
				</a>
			</li>
		{:else}
			<li class="px-3 py-2">
				<em class="font-medium not-italic">{$LL.breadcrumbs.list()}</em>,
				{formatListMonth(date, locale)}
			</li>
		{/if}
		{#if link}
			<li class="px-3 py-2">detale</li>
		{/if}
	</ul>
</nav>

<style>
	li:not(:first-of-type)::marker {
		content: '»';
	}
</style>
