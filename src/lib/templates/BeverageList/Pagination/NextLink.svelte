<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCaretLeft } from '@fortawesome/pro-solid-svg-icons';
	import { LL } from '$lib/i18n/i18n-svelte';

	const { link, phrase } = $props<{ link: string; phrase: string }>();
</script>

<a
	href={$LL.link(link)}
	class="flex items-center justify-center
  border-2 border-black bg-black py-2 pl-4 pr-3
  text-base text-white transition-colors
  hover:bg-white hover:text-black
	focus:bg-white focus:text-black focus:outline-none"
>
	<Fa icon={faCaretLeft} class="mr-3" />
	{phrase}
</a>
