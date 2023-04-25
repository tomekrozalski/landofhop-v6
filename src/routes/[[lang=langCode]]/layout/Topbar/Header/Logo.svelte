<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import layoutStore from '../../utils/store';
</script>

<a
	on:click={layoutStore.closeNavbar}
	href={$LL.link('/')}
	class="logo group flex focus:outline-none"
>
	<h1 class="flex w-full items-center justify-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 271.3 127"
			class="h-[1.7rem] w-[3.7rem] md:h-[2.5rem] md:w-[5.3rem] lg:h-[4.4rem] lg:w-[7.9rem]"
		>
			<title>Land of Hop</title>
			<path
				class="fill-black transition-colors duration-200 group-hover:fill-white group-focus:fill-white"
				fill="#222"
				d="M49.9 96.35h-9v-28.8h-32v28.8H0v-66.2h8.9v29.2h32v-29.2h9v66.2z"
			/>
			{#if $layoutStore.isLoading}
				<path
					class="letter-o animate-spin fill-none stroke-orange"
					fill="#f9c74f"
					d="M92.35 31.39a55.5 55.5 0 1 0 18.77-16.68"
				/>
			{:else}
				<circle cx="137.6" cy="63.5" r="55.5" fill="#f9c74f" class="letter-o fill-none" />
			{/if}
			<path
				class="fill-black transition-colors duration-200 group-hover:fill-white group-focus:fill-white"
				fill="#222"
				d="M251.6 30.15c14 0 19.7 10.4 19.7 20.7 0 10.5-5.7 20.6-19.7 20.6h-17.4v24.8h-9v-66.1h26.4zm-17.3 8.4v24.7h16.8c8.1 0 11.3-6.1 11.3-12.3 0-6-3.2-12.4-10.8-12.4h-17.3z"
			/>
		</svg>
	</h1>
</a>
