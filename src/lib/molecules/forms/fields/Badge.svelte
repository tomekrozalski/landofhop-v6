<script lang="ts" generics="T extends Record<string, unknown>">
	// import slugify from 'slugify';
	import type { SuperForm } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Label from '$lib/atoms/forms/Label.svelte';
	import TextInput from '$lib/atoms/forms/TextInput.svelte';
	import Grid from '../Grid.svelte';

	let { form }: { form: SuperForm<T> } = $props();
	const formId = form.formId;
</script>

<Grid>
	<Label class="col-span-2" field="badge" formId={$formId} isRequired>
		{$LL.pages.dashboard.label.badge()}
	</Label>
	<TextInput field="badge" {form} />
</Grid>
