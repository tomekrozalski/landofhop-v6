<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';

	const { link = '', phrase } = $props<{ link: string; phrase?: string }>();
</script>

<nav class="bg-gray-200 text-base">
	<ul class="container flex lg:px-3">
		{#if link}
			<li class="flex">
				<a
					href={$LL.link(link)}
					class="border-b-[1px] border-black p-2 transition-colors hover:border-green hover:bg-green hover:text-white"
				>
					<em class="font-medium not-italic">{$LL.breadcrumbs.list()}</em>,
					{phrase}
				</a>
			</li>
		{:else}
			<li class="px-3 py-2">
				<em class="font-medium not-italic">{$LL.breadcrumbs.list()}</em>,
				{phrase}
			</li>
		{/if}
		{#if link}
			<li class="ml-3 px-3 py-2 marker:content-['»']">
				<em class="font-medium not-italic">{$LL.breadcrumbs.details()}</em>
			</li>
		{/if}
	</ul>
</nav>
