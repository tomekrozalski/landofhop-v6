<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';

	let { field, form }: { field: string; form: SuperForm<T> } = $props();
	const { value } = formFieldProxy(form, field as FormPathLeaves<T>);

	function onClick() {
		$value.push({ value: '', language: '' });
		$value = $value;
	}
</script>

<button
	type="button"
	on:click={onClick}
	class="flex h-full w-full items-center justify-center bg-gray-100 text-gray-300 transition-colors
  hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white"
>
	{$LL.pages.dashboard.addFirstRow()}
</button>
