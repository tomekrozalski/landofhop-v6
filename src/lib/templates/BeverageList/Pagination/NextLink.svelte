<script lang="ts">
	import { afterUpdate, tick } from 'svelte';
	import { format } from 'date-fns';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import formatListMonth from '$lib/utils/helpers/formatListMonth';
	import Icon from '$lib/atoms/Icon.svelte';

	export let month: number;
	export let year: number;

	$: nextMonth = new Date(year, month);
	$: nextMonthPath = '/list/' + format(nextMonth, 'yyyy-MM');

	const locale = $page.params.lang || 'pl';

	afterUpdate(async () => {
		await tick();

		window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' });
	});
</script>

<a
	href={$LL.link(nextMonthPath)}
	class="flex items-center justify-center
  border-2 border-black bg-black py-2 pl-4 pr-3
  text-base text-white transition-colors
  hover:bg-white hover:text-black"
	data-sveltekit-noscroll
>
	<Icon name="caretLeft" class="mr-3" style="solid" />
	{formatListMonth(nextMonth, locale)}
</a>
