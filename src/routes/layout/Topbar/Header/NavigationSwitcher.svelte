<script lang="ts">
	// import { translate } from 'svelte-intl';
	import layoutStore from '../../utils/store';
</script>

<button
	on:click={layoutStore.toggleNavbar}
	class="group flex items-center justify-center focus:border-2 focus:border-black focus:bg-white"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 40 9"
		class="h-[0.25rem] w-[1.25rem] md:h-[0.37rem] md:w-[1.87rem] lg:h-[0.5rem] lg:w-[2.5rem]"
	>
		<title>
			{#if $layoutStore.isNavigationOpened}
				header.closeNavigation
			{:else}
				header.openNavigation
			{/if}
		</title>
		<circle
			fill="#fff"
			cx="35.5"
			cy="4.5"
			r="4.5"
			class="fill-white transition group-hover:fill-gray-400 group-focus:fill-black"
		/>
		<circle
			fill="#fff"
			cx="20"
			cy="4.5"
			r="4.5"
			class="fill-white transition group-hover:fill-gray-400 group-focus:fill-black"
		/>
		<circle
			fill="#fff"
			cx="4.5"
			cy="4.5"
			r="4.5"
			class="fill-white transition group-hover:fill-gray-400 group-focus:fill-black"
		/>
	</svg>
</button>
