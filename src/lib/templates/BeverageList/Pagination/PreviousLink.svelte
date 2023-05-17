<script lang="ts">
	import { format, subMonths } from 'date-fns';
	import Fa from 'svelte-fa';
	import { faCaretRight } from '@fortawesome/pro-solid-svg-icons';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import formatListMonth from '$lib/utils/helpers/formatListMonth';

	$: ({ year, month } = $page.data.scope);
	$: previousMonth = subMonths(new Date(year, month), 2);
	$: previousMonthPath = '/list/' + format(previousMonth, 'yyyy-MM');
	$: locale = $page.params.lang || 'pl';
</script>

<a
	href={$LL.link(previousMonthPath)}
	class="flex items-center justify-center
  border-2 border-black bg-black py-2 pl-4 pr-3
  text-base text-white transition-colors
	hover:bg-white hover:text-black
  focus:bg-white focus:text-black focus:outline-none"
>
	{formatListMonth(previousMonth, locale)}
	<Fa icon={faCaretRight} class="ml-3" />
</a>
