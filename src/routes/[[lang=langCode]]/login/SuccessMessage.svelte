<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="relative mb-8 overflow-clip bg-green p-8 text-right text-white">
	<Fa icon={faBadgeCheck} size="5x" class="absolute -top-5" />
	{$LL.pages.login.loggedIn()}
</div>
