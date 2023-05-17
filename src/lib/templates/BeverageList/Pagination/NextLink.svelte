<script lang="ts">
	import { differenceInMonths, format } from 'date-fns';
	import Fa from 'svelte-fa';
	import { faCaretLeft } from '@fortawesome/pro-solid-svg-icons';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import formatListMonth from '$lib/utils/helpers/formatListMonth';

	$: ({ isOneBeforeMostRecent, scope } = $page.data);
	$: nextMonth = new Date(scope.year, scope.month);
	$: nextMontPath = isOneBeforeMostRecent ? '/' : '/list/' + format(nextMonth, 'yyyy-MM');
	$: locale = $page.params.lang || 'pl';
</script>

<a
	href={$LL.link(nextMontPath)}
	class="flex items-center justify-center
  border-2 border-black bg-black py-2 pl-4 pr-3
  text-base text-white transition-colors
  hover:bg-white hover:text-black
	focus:bg-white focus:text-black focus:outline-none"
>
	<Fa icon={faCaretLeft} class="mr-3" />
	{formatListMonth(nextMonth, locale)}
</a>
