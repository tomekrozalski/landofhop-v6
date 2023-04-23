<script lang="ts">
	import { slide } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Icon from '$lib/atoms/Icon.svelte';
</script>

<div class=" relative mb-8 overflow-hidden bg-yellow-light p-8 text-right" in:slide>
	<Icon name="warning" style="solid" size="5x" class="absolute -top-5 text-yellow" />
	{$LL.pages.login.tryAgain()}
</div>
