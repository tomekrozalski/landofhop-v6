<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import navigation from '$lib/templates/Main/navigation.svelte';
	import { navigating } from '$app/stores';
</script>

<a
	on:click={navigation.closeNavbar}
	href={$LL.link('/')}
	class="logo group flex items-center justify-center focus-visible:outline-none"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 271.3 127"
		class="h-[1.7rem] w-[3.7rem] md:h-[2.5rem] md:w-[5.3rem] lg:h-[4.4rem] lg:w-[7.9rem]"
	>
		<title>Land of Hop</title>
		<path
			class="fill-black transition-colors duration-200 group-hover:fill-white group-focus-visible:fill-white"
			fill="#222"
			d="M49.9 96.35h-9v-28.8h-32v28.8H0v-66.2h8.9v29.2h32v-29.2h9v66.2z"
		/>
		<circle
			cx="137.6"
			cy="63.5"
			r="55.5"
			fill="#f9c74f"
			class="letter-o fill-none"
			style:stroke-dasharray={$navigating ? '280' : '360'}
			style:transition="stroke-dasharray 1s"
		>
			<animateTransform
				attributeType="xml"
				attributeName="transform"
				type="rotate"
				from="360 0 0"
				to="0 0 0"
				dur="1s"
				additive="sum"
				repeatCount="indefinite"
			/>
		</circle>
		<path
			class="fill-black transition-colors duration-200 group-hover:fill-white group-focus-visible:fill-white"
			fill="#222"
			d="M251.6 30.15c14 0 19.7 10.4 19.7 20.7 0 10.5-5.7 20.6-19.7 20.6h-17.4v24.8h-9v-66.1h26.4zm-17.3 8.4v24.7h16.8c8.1 0 11.3-6.1 11.3-12.3 0-6-3.2-12.4-10.8-12.4h-17.3z"
		/>
	</svg>
</a>
