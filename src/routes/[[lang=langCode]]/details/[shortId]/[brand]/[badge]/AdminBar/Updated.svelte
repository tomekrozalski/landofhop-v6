<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';

	const { updated }: { updated: string } = $props();
	const lastTimeUpdated = $LL.pages.details.adminBar.lastTimeUpdated();
</script>

<dl class="my-5 text-base text-gray-400">
	<dt class="inline after:mr-1 after:content-[':']">{lastTimeUpdated}</dt>
	<dd class="inline">{updated}</dd>
</dl>
