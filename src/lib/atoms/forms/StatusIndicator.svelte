<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons';
	import { faXmark } from '@fortawesome/pro-regular-svg-icons';

	export let classNames: string = '';
	export let isTouched: boolean, isValid: boolean;
</script>

<span class="relative {classNames}">
	{#if isTouched && isValid}
		<Fa
			icon={faBadgeCheck}
			size="1.5x"
			class="absolute right-3 top-5 -translate-y-1/2 text-green"
		/>
	{:else if isTouched && !isValid}
		<Fa icon={faXmark} size="1.5x" class="absolute right-3 top-5 -translate-y-1/2 text-red" />
	{/if}
	<slot />
</span>
