<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import type { Infer } from 'sveltekit-superforms';
	import Label from '../beverage/Label/Label.svelte';
	import type { ValidationSchemaTypes } from '../beverage/Label/validationSchema';

	let { data }: { data: { form: Infer<ValidationSchemaTypes> } } = $props();
</script>

<svelte:head>
	<title>Land of Hop 🔒 Dashboard, {'dashboard.title.addNewBeverage'}</title>
</svelte:head>

<article class="container">
	<h1 class="pb-5 pt-10 text-center text-3xl font-bold">
		{$LL.pages.dashboard.beverage.addNewBeverage()}
	</h1>
	<Label {data} />

	<form action={$LL.link('?/logout')} method="POST">
		<button class="btn btn-primary">Logout</button>
	</form>
</article>
