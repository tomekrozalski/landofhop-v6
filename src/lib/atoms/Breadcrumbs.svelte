<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import formatListMonth from '$lib/utils/helpers/formatListMonth';

	export let month: number;
	export let year: number;

	$: locale = $page.params.lang || 'pl';
	$: date = new Date(year, month - 1);
</script>

<nav class="bg-gray-200 text-base">
	<ul class="container px-3">
		<li class="px-3 py-2">
			<em class="font-medium not-italic">{$LL.breadcrumbs.list()}</em>,
			{formatListMonth(date, locale)}
		</li>
	</ul>
</nav>
