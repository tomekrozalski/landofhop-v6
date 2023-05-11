<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';

	export let month: number;
	export let year: number;

	const locale = $page.params.lang || 'pl';
	const date = new Date(year, month - 1);
</script>

<nav class="bg-gray-200 text-base">
	<ul class="container px-3">
		<li class="px-3 py-2">
			<em class="font-medium not-italic">{$LL.breadcrumbs.list()}</em>,
			{new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date)}
		</li>
	</ul>
</nav>
