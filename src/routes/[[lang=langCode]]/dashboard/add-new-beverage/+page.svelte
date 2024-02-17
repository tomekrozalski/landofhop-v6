<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import ProgressBar from '../beverage/ProgressBar/ProgressBar.svelte';
</script>

<svelte:head>
	<title>Land of Hop 🔒 Dashboard, {'dashboard.title.addNewBeverage'}</title>
</svelte:head>

<article class="container">
	<h1 class="pb-5 pt-10 text-center text-3xl font-bold">
		{$LL.pages.dashboard.beverage.addNewBeverage()}
	</h1>
	<ProgressBar />

	<form on:submit={() => {}} novalidate>
		<header>
			<h2>{$LL.pages.dashboard.beverage.labelInfo.title()}</h2>
			<p>{$LL.pages.dashboard.beverage.labelInfo.description()}</p>
		</header>
		<!-- <Grid>
			<Badge {formName} {formData} />
		</Grid> -->
		<!-- <h3><span>{$translate('dashboard.beverage.brandInfo')}</span></h3> -->
		<!-- <Grid columns={2}>
			<NameGroup {formName} {formData} />
		</Grid> -->
		<!-- <Grid columns={2}>
			<Series {formName} {formData} />
		</Grid> -->
		<!-- <Grid>
			<Brand {formName} {formData} />
		</Grid> -->
	</form>

	<form action={$LL.link('/api/logout')} method="POST">
		<button class="btn btn-primary">Logout</button>
	</form>
</article>
