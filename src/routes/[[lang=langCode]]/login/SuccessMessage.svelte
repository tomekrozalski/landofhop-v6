<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Icon from '$lib/atoms/Icon.svelte';
</script>

<div class="relative mb-8 overflow-hidden bg-green p-8 text-right text-white">
	<Icon name="badgeCheck" style="solid" size="5x" class="absolute -top-5" />
	{$LL.pages.login.loggedIn()}
</div>
