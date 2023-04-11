<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

	import authentication from '$lib/utils/stores/authentication';
	import { LL } from '$lib/i18n/i18n-svelte';
	import MenuLink from './MenuLink.svelte';

	function logOut() {
		// fetch('/api/user/logout')
		// 	.then(authentication.logOut)
		// 	.catch(() => console.warn('Log out failed'));
	}
</script>

<ul class="flex flex-grow flex-col py-1 md:flex-grow-0 md:flex-row">
	<li class="flex">
		{#if $authentication.isLoggedIn}
			<button
				class="relative flex w-full items-center py-2 pl-10 pr-2 transition-colors hover:bg-black hover:text-white md:w-auto md:pl-8"
				type="button"
				on:click={logOut}
			>
				<Fa icon={faLockOpen} size="0.8x" class="absolute left-4 md:left-3" />
				{$LL.navigation.logout()}
			</button>
		{:else}
			<a
				class="relative flex w-full items-center py-2 pl-10 pr-2 transition-colors hover:bg-black hover:text-white md:w-auto md:pl-8"
				href="/login"
			>
				<Fa icon={faLock} size="0.8x" class="absolute left-4 md:left-3" />
				{$LL.navigation.login()}
			</a>
		{/if}
	</li>
	<MenuLink label={$LL.navigation.about()} link={$LL.link('/about')} />
	<MenuLink label={$LL.navigation.stats()} link={$LL.link('/stats')} />
	<MenuLink label={$LL.navigation.brands()} link={$LL.link('/brands')} />
	<MenuLink label={$LL.navigation.places()} link={$LL.link('/places')} />
	{#if $authentication.isLoggedIn}
		<MenuLink
			label={$LL.navigation.addNewBeverage()}
			link={$LL.link('/dashboard/add-new-beverage')}
		/>
	{/if}
</ul>
