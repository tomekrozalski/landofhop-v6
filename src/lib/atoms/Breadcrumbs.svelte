<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { format } from 'date-fns';
	import pl from 'date-fns/locale/pl/index.js';

	export let month: number;
	export let year: number;
</script>

<nav class="bg-gray-200 text-base">
	<ul class="container px-3">
		<li class="px-3 py-2">
			<em class="font-medium not-italic">{$LL.breadcrumbs.list()}</em>,
			{format(new Date(year, month - 1), 'LLLL yyyy', { locale: pl })}
		</li>
	</ul>
</nav>
