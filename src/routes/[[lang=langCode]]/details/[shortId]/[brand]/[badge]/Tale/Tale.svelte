<script lang="ts">
	import { page } from '$app/stores';
	import Markdown from '$lib/atoms/Markdown.svelte';
	import Article from './Article.svelte';

	$: ({ tale } = $page.data.details);
</script>

{#if tale}
	{#if tale?.label?.length}
		{#each tale?.label as singleTale}
			<section lang={singleTale.language !== 'pl' ? singleTale.language : null} class="mt-3">
				<Markdown class="block text-pretty" value={singleTale.lead} />
				{#if singleTale.article}
					<Article>
						<Markdown class="block text-pretty" value={singleTale.article} />
					</Article>
				{/if}
			</section>
		{/each}
	{/if}
	{#if tale?.producer}
		<section
			class=" my-5 border-l-8 border-green pl-5"
			lang={tale.producer.language !== 'pl' ? tale.producer.language : null}
		>
			<Markdown class="block text-pretty" value={tale.producer.lead} />
			{#if tale.producer.article}
				<Article>
					<Markdown class="block text-pretty" value={tale.producer.article} />
				</Article>
			{/if}
		</section>
	{/if}
{/if}
