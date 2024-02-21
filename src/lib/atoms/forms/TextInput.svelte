<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { formFieldProxy, type SuperForm, type FormPathLeaves } from 'sveltekit-superforms';
	import cn from '$lib/utils/cn';

	const {
		class: classNames,
		field,
		formName,
		form,
		label = '',
		...rest
	} = $props<{
		class?: string;
		field: FormPathLeaves<T>;
		form: SuperForm<T>;
		formName: string;
		label?: string;
		[value: string]: unknown;
	}>();

	const { value, errors, constraints } = formFieldProxy(form, field);
</script>

<span class={cn('relative', classNames)}>
	<input
		class="h-10 w-full border-b-2 border-b-gray-300 bg-gray-100 px-2 text-lg leading-10
  focus:border-b-black focus:outline-none"
		id={formName + '-' + field}
		name={field}
		type="text"
		aria-invalid={$errors ? 'true' : undefined}
		bind:value={$value}
		{...$constraints}
		{...rest}
	/>
	{#if $errors}
		<span class="absolute left-0 right-0 top-full z-10 bg-yellow-light px-4 py-2 text-sm">
			{$errors}
		</span>
	{/if}
</span>
