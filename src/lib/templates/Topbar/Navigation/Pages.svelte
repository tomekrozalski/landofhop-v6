<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLock } from '@fortawesome/pro-solid-svg-icons';
	import { LL } from '$lib/i18n/i18n-svelte';
	import PageLink from './PageLink.svelte';
</script>

<ul class="flex flex-grow flex-col py-1 md:flex-grow-0 md:flex-row">
	<PageLink label={$LL.navigation.about()} link={$LL.link('/about')} />
	<PageLink label={$LL.navigation.stats()} link={$LL.link('/')} />
	<PageLink label={$LL.navigation.brands()} link={$LL.link('/')} />
	<PageLink label={$LL.navigation.places()} link={$LL.link('/')} />
	<PageLink
		label={$LL.navigation.addBeverage()}
		link={$LL.link('/dashboard/add-new-beverage')}
		classNames="relative pl-9 md:pl-8"
		underlined
	>
		<Fa icon={faLock} size="0.8x" class="absolute left-4 md:left-3" />
	</PageLink>
</ul>
