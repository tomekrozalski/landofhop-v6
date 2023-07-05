<script lang="ts">
	import Fa from 'svelte-fa';
	import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-solid-svg-icons';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';

	$: ({ next, previous } = $page.data);
</script>

<nav
	class="details-navigation my-5 flex items-center justify-center gap-3 md:justify-end lg:my-0 lg:justify-center lg:pb-3 lg:pl-3 lg:pr-3"
>
	<svelte:element
		this={next ? 'a' : 'span'}
		class="flex aspect-square flex-grow items-center justify-center rounded {next
			? 'group transition-colors hover:bg-green'
			: ''}"
		href={next && `/details/${next.shortId}/${next.brand}/${next.badge}`}
		aria-label={next && $LL.pages.details.navigation.next()}
	>
		<Fa
			icon={faChevronCircleLeft}
			size="2.5x"
			class="transition-colors {next ? 'text-green group-hover:text-white' : 'text-gray-200'}"
		/>
	</svelte:element>
	<svelte:element
		this={previous ? 'a' : 'span'}
		class="flex aspect-square flex-grow items-center justify-center rounded {previous
			? 'group transition-colors hover:bg-green'
			: ''}"
		href={previous && `/details/${previous.shortId}/${previous.brand}/${previous.badge}`}
		aria-label={previous && $LL.pages.details.navigation.previous()}
	>
		<Fa
			icon={faChevronCircleRight}
			size="2.5x"
			class="transition-colors {previous ? 'text-green group-hover:text-white' : 'text-gray-200'}"
		/>
	</svelte:element>
</nav>
