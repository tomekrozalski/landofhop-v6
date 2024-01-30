<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons';
	import { slide } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="relative mb-8 overflow-clip bg-yellow-light p-8 text-right" in:slide>
	<Fa icon={faTriangleExclamation} size="5x" class="absolute -top-5 text-yellow" />
	{$LL.pages.login.tryAgain()}
</div>
