<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import MarkLanguage from '$lib/atoms/MarkLanguage.svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';

	const { brand, contract, cooperation, isContract, name, remark, series } = $derived(
		$page.data.details
	);
</script>

<header class="mb-6 mt-3 lg:mb-3">
	<MarkLanguage tag="h1" {name} class="my-5 text-balance text-3xl font-bold" />
	<p>
		{$LL.pages.details.header.brewed()}
		<!-- remark -->
		{#if remark?.label}
			<MarkLanguage label tag="em" name={remark.label} />
		{/if}
		{#if remark?.producer}
			<MarkLanguage producer tag="em" name={remark.producer} />
		{/if}
		{#if remark?.editorial}
			<MarkLanguage editorial tag="em" name={remark.editorial} />
		{/if}
		<!-- contract -->
		{#if contract}
			{$LL.pages.details.header.by()}
			{#if contract.label}
				<MarkLanguage
					href="/brand/{contract.label.shortId}/{contract.label.badge}"
					label
					tag="a"
					name={contract.label.name}
				/>
			{/if}
			{#if contract.producer}
				<MarkLanguage
					href="/brand/{contract.producer.shortId}/{contract.producer.badge}"
					producer
					tag="a"
					name={contract.producer.name}
				/>
			{/if}
			{#if contract.editorial}
				<MarkLanguage
					href="/brand/{contract.editorial.shortId}/{contract.editorial.badge}"
					editorial
					tag="a"
					name={contract.editorial.name}
				/>
			{/if}
		{/if}
		<!-- cooperation -->
		{#if cooperation}
			{$LL.pages.details.header.inCooperationWith()}
			{#if cooperation.label?.length}
				<FormattedList mode="short" let:item data={cooperation.label}>
					<MarkLanguage href="/brand/{item.shortId}/{item.badge}" label tag="a" name={item.name} />
				</FormattedList>
			{/if}
			{#if cooperation.producer?.length}
				<FormattedList mode="short" let:item data={cooperation.producer}>
					<MarkLanguage
						href="/brand/{item.shortId}/{item.badge}"
						producer
						tag="a"
						name={item.name}
					/>
				</FormattedList>
			{/if}
			{#if cooperation.editorial?.length}
				<FormattedList mode="short" let:item data={cooperation.editorial}>
					<MarkLanguage
						href="/brand/{item.shortId}/{item.badge}"
						editorial
						tag="a"
						name={item.name}
					/>
				</FormattedList>
			{/if}
		{/if}
		<!-- brand -->
		{#if contract || isContract}
			{$LL.pages.details.header.for()}
		{:else}
			{$LL.pages.details.header.by()}
		{/if}
		<MarkLanguage
			href="/brand/{brand.shortId}/{brand.badge}"
			label
			tag="a"
			name={brand.name}
		/>{#if series}
			{$LL.pages.details.header.series()}
			{#if series.label?.length}
				<FormattedList mode="narrow" let:item data={series.label}>
					<MarkLanguage label tag="span" name={item} />
				</FormattedList>
			{/if}
			{#if series.producer?.length}
				<FormattedList mode="narrow" let:item data={series.producer}>
					<MarkLanguage producer tag="span" name={item} />
				</FormattedList>
			{/if}
			{#if series.editorial?.length}
				<FormattedList mode="narrow" let:item data={series.editorial}>
					<MarkLanguage editorial tag="span" name={item} />
				</FormattedList>
			{/if}
		{/if}
	</p>
</header>
