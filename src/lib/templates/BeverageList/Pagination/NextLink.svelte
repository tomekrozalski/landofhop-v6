<script lang="ts">
	import { differenceInMonths, format } from 'date-fns';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import formatListMonth from '$lib/utils/helpers/formatListMonth';
	import Icon from '$lib/atoms/Icon.svelte';

	$: ({ latestMonth, scope } = $page.data);
	$: latestMonthDate = new Date(latestMonth.year, latestMonth.month);
	$: nextMonth = new Date(scope.year, scope.month);
	$: nextMontPath =
		differenceInMonths(latestMonthDate, nextMonth) === 1
			? '/'
			: '/list/' + format(nextMonth, 'yyyy-MM');

	const locale = $page.params.lang || 'pl';
</script>

<a
	href={$LL.link(nextMontPath)}
	class="flex items-center justify-center
  border-2 border-black bg-black py-2 pl-4 pr-3
  text-base text-white transition-colors
  hover:bg-white hover:text-black"
>
	<Icon name="caretLeft" class="mr-3" style="solid" />
	{formatListMonth(nextMonth, locale)}
</a>
