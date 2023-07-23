<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/atoms/forms/Button.svelte';
	import type { AdminData } from '../../utils/types/AdminData.d';

	export let adminData: AdminData | null;
	let isLoading = false;
	$: ({ badge, brand, shortId } = $page.data.details);

	const updateBeverageRatings = async () => {
		if (adminData?.ratings) {
			isLoading = true;

			const data = {
				...(adminData.ratings.rateBeer && { rateBeerId: adminData.ratings.rateBeer }),
				...(adminData.ratings.untappd && { untappdBeverageSlug: adminData.ratings.untappd }),
				beverageShortId: shortId
			};

			await fetch(`/details/${shortId}/${brand.badge}/${badge}/api/updateRatings`, {
				method: 'POST',
				body: JSON.stringify(data)
			});

			await invalidateAll();
			isLoading = false;
		}
	};
</script>

{#if adminData?.ratings}
	<Button handleClick={updateBeverageRatings} isDelayed={isLoading}>
		{$LL.pages.details.adminBar.updateRating()}
	</Button>
{/if}
