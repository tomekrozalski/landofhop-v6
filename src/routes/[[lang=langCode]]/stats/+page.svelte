<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';

	import StatsWrapper from './elements/Wrapper.svelte';
	import AlcoholChart from './landing/AlcoholChart/AlcoholChart.svelte';
	import AddTimeline from './landing/AddTimeline/AddTimeline.svelte';
	import TopBrandsTimeline from './landing/TopBrandsTimeline/TopBrandsTimeline.svelte';
</script>

<svelte:head>
	<title>{$LL.pages.stats.landing.title()}</title>
</svelte:head>

<StatsWrapper>
	<AlcoholChart />
	<AddTimeline />
	<!-- <FermentationTimeline /> -->
	<TopBrandsTimeline />
	<!-- <RatingsChart /> -->
</StatsWrapper>
