<script lang="ts">
	import { format, subMonths } from 'date-fns';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Icon from '$lib/atoms/Icon.svelte';

	export let month: number;
	export let year: number;
	export let isTheMostRecent: boolean = false;

	const locale = $page.params.lang || 'pl';
	const previousMonth = subMonths(new Date(year, month), 2);
	const previousMonthLink = '/list/' + format(previousMonth, 'yyyy-MM');
	const isTheOldest = month === 6 && year === 2017;
</script>

<ul class="container mb-24 flex justify-between px-3">
	<li class="flex">
		<Icon name="leaf" style="solid" />
	</li>
	<li class="flex">
		<a
			href={$LL.link(previousMonthLink)}
			class="relative border-2 border-black bg-black py-2 pl-4 pr-8 text-base text-white transition-colors hover:bg-white hover:text-black"
		>
			{new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(previousMonth)}
			<Icon name="caretRight" class="absolute right-4 top-3" style="solid" />
		</a>
	</li>
</ul>
