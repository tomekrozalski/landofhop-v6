<script lang="ts" generics="T extends Record<string, unknown>">
	import type { SuperForm } from 'sveltekit-superforms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import LabelA from '$lib/atoms/forms/Label.svelte';
	import AddNewBrew from '$lib/molecules/forms/modals/AddNewBrand.svelte';
	import InstitutionSelect from '../selects/Institution.svelte';
	import Grid from '../Grid.svelte';

	let { form }: { form: SuperForm<T> } = $props();
	const formId = form.formId;
</script>

<Grid>
	<LabelA class="col-span-2" field="brand" formId={$formId} isRequired>
		{$LL.pages.dashboard.label.brand()}
	</LabelA>
	<div class="col-start-3">
		<InstitutionSelect field="brand" {form} />
	</div>
	<AddNewBrew />
</Grid>
