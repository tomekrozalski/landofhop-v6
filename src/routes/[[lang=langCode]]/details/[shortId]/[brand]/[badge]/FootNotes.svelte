<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<dl class="my-5 text-base text-gray-400">
	<dt class="inline after:mr-1 after:content-[':']">{$LL.pages.details.footNotes.added()}</dt>
	<dd class="inline">{$page.data.details.added}</dd>
</dl>
