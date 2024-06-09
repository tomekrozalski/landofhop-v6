<script lang="ts" generics="T extends Record<string, unknown>">
	import { fade, fly } from 'svelte/transition';
	import { Dialog, Separator, Label } from 'bits-ui';
	import { superForm } from 'sveltekit-superforms/client';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/pro-solid-svg-icons';
	import Badge from '$lib/molecules/forms/fields/Badge.svelte';
	import Name from '$lib/molecules/forms/fields/Name.svelte';

	const form = superForm(
		{ badge: '', name: [{ value: '', language: '' }] },
		{
			dataType: 'json',
			onError: () => {
				console.log('error');
			},
			scrollToError: 'smooth'
			// SPA: true,
			// validators: zodClient(getValidationSchema($LL))
		}
	);

	const { enhance, delayed, form: formData } = form;
</script>

<Dialog.Root>
	<Dialog.Trigger class="bg-gray-100 transition-colors hover:bg-gray-200">
		{$LL.pages.dashboard.add()}
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-black/80"
		/>
		<Dialog.Content
			transition={fly}
			transitionConfig={{ y: 500 }}
			class="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white p-5"
		>
			<Dialog.Title class="text-lg font-medium">Dodaj nową markę</Dialog.Title>
			<Separator.Root class="-mx-5 mb-6 mt-5 block h-px bg-gray-200" />
			<Badge {form} />
			<Name {form} />

			<div class="flex w-full justify-end">
				<Dialog.Close
					class="h-input rounded-input font-semibold text-background shadow-mini hover:bg-dark/95 focus-visible:ring-dark focus-visible:ring-offset-background active:scale-98 inline-flex items-center justify-center bg-black px-[50px] text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
				>
					Save
				</Dialog.Close>
			</div>
			<Dialog.Close
				class="focus-visible:ring-foreground focus-visible:ring-offset-background active:scale-98 absolute right-5 top-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
			>
				<div>
					<Fa icon={faXmark} />
					<!-- <X class="text-foreground size-5" /> -->
					<span class="sr-only">Close</span>
				</div>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
