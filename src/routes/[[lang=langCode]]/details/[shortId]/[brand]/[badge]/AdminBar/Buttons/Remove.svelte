<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/atoms/forms/Button.svelte';

	let confirmed = $state(false);
	let isSubmitting = $state(false);
	const { badge, brand, shortId } = $derived($page.data.details);

	function removeBeverage() {
		isSubmitting = true;

		setTimeout(() => {
			isSubmitting = false;
			confirmed = true;
		}, 3000);
	}

	async function confirm() {
		isSubmitting = true;

		try {
			await fetch(`/details/${shortId}/${brand.badge}/${badge}/api/remove`, {
				method: 'DELETE'
			});

			goto('/');
		} catch (err) {
			isSubmitting = false;
			console.warn(err);
		}
	}
</script>

<Button
	isSecondary={!confirmed}
	isWarning={confirmed}
	isDelayed={isSubmitting}
	on:click={confirmed ? confirm : removeBeverage}
>
	{#if confirmed}
		{$LL.pages.details.adminBar.areYouSure()}
	{:else}
		{$LL.pages.details.adminBar.removeBeverage()}
	{/if}
</Button>
