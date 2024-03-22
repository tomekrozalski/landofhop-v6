<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy, type SuperForm, type FormPathLeaves } from 'sveltekit-superforms';
	import cn from '$lib/utils/cn';

	const {
		class: classNames,
		field,
		form,
		label = '',
		type = 'text',
		...rest
	}: {
		class?: string;
		field: string;
		form: SuperForm<T>;
		label?: string;
		type?: 'text' | 'number' | 'email' | 'password';
		[value: string]: unknown;
	} = $props();

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}

	const { value, errors } = formFieldProxy(form, field as FormPathLeaves<T, any>);
	const formId = form.formId;
</script>

<span class={cn('relative', classNames)}>
	<input
		class="h-10 w-full border-b-2 border-b-gray-300 bg-gray-100 px-2 text-lg leading-10
  focus:border-b-black focus:outline-none"
		id={$formId + '-' + field}
		name={field}
		use:typeAction
		aria-invalid={$errors ? 'true' : undefined}
		bind:value={$value}
		{...rest}
	/>
	{#if $errors}
		<span class="absolute left-0 right-0 top-full z-10 bg-yellow-light px-4 py-2 text-sm">
			{$errors}
		</span>
	{/if}
</span>
