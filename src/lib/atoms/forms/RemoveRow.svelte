<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import Fa from 'svelte-fa';
	import { faMinus } from '@fortawesome/pro-solid-svg-icons';

	let { field, form, index }: { field: string; form: SuperForm<T>; index: number } = $props();
	const { value } = formFieldProxy(form, field as FormPathLeaves<T>);

	function onClick() {
		$value.splice(index, 1);
		$value = $value;
	}
</script>

<button
	type="button"
	on:click={onClick}
	class="flex aspect-square h-full items-center justify-center justify-self-start bg-gray-100 text-gray-300 transition-colors
  hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white"
>
	<Fa icon={faMinus} />
</button>
