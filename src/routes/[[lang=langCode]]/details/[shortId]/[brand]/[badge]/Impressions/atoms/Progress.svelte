<script lang="ts">
	import { isNumber } from 'lodash-es';

	const { values }: { values: { label?: number; producer?: number } } = $props();
</script>

{#if isNumber(values.label)}
	<div class="flex h-1 w-full overflow-clip rounded-full bg-gray-100">
		<div
			class="flex flex-col justify-center overflow-clip bg-green"
			role="progressbar"
			style:width="{values.label}%"
			aria-valuenow={values.label}
			aria-valuemin={0}
			aria-valuemax={100}
		/>
	</div>
{/if}

{#if isNumber(values.producer)}
	<div
		class="flex h-1 w-full overflow-clip rounded-full bg-gray-100"
		class:mt-1={isNumber(values.label)}
	>
		<div
			class="flex flex-col justify-center overflow-clip bg-orange"
			role="progressbar"
			style:width="{values.producer}%"
			aria-valuenow={values.producer}
			aria-valuemin={0}
			aria-valuemax={100}
		/>
	</div>
{/if}
