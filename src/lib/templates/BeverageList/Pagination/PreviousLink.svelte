<script lang="ts">
	import { format, subMonths } from 'date-fns';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import formatListMonth from '$lib/utils/helpers/formatListMonth';
	import Icon from '$lib/atoms/Icon.svelte';

	export let month: number;
	export let year: number;

	$: previousMonth = subMonths(new Date(year, month), 2);
	$: previousMonthPath = '/list/' + format(previousMonth, 'yyyy-MM');

	const locale = $page.params.lang || 'pl';
</script>

<a
	href={$LL.link(previousMonthPath)}
	class="flex items-center justify-center
  border-2 border-black bg-black py-2 pl-4 pr-3
  text-base text-white transition-colors
  hover:bg-white hover:text-black"
	data-sveltekit-noscroll
>
	{formatListMonth(previousMonth, locale)}
	<Icon name="caretRight" class="ml-3" style="solid" />
</a>
