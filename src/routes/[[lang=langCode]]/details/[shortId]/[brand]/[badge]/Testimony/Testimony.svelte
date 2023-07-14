<script lang="ts">
	import Barcode from './Barcode.svelte';
	import City from './City.svelte';
	import Country from './Country.svelte';
	import Fermentation from './Fermentation.svelte';
	import Extract from './Extract.svelte';
	import Alcohol from './Alcohol.svelte';
	import Filtration from './Filtration.svelte';
	import Pasteurization from './Pasteurization.svelte';
	import Aged from './Aged/Aged.svelte';
	import BeverageStyle from './BeverageStyle.svelte';
	// import StyleTags from './StyleTags.svelte';
	import DryHopped from './DryHopped.svelte';
	import HopRate from './HopRate.svelte';
	// import ExpirationTime from './ExpirationTime.svelte';
	// import Ingredients from './Ingredients.svelte';
	// import IngredientTags from './IngredientTags.svelte';
	// import Nitrogen from './Nitrogen.svelte';
	// import SmokedMalt from './SmokedMalt.svelte';
	// import Temperature from './Temperature.svelte';
	// import Container from './Container.svelte';
	// import Price from './Price.svelte';
</script>

<dl class="mb-5 mt-8 grid grid-cols-1 gap-x-5 lg:grid-cols-3">
	<City />
	<Country />
	<Barcode />
	<Fermentation />
	<Extract />
	<Alcohol />
	<Filtration />
	<Pasteurization />
	<Aged />
	<BeverageStyle />
	<!-- <StyleTags /> -->
	<DryHopped />
	<HopRate />
	<!-- <Nitrogen /> -->
	<!-- <ExpirationTime /> -->
	<!-- <Ingredients /> -->
	<!-- <IngredientTags /> -->
	<!-- <SmokedMalt /> -->
	<!-- <Temperature /> -->
	<!-- <Container /> -->
	<!-- <Price /> -->
</dl>
