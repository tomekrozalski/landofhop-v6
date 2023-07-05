<script lang="ts">
	export let value: number;
</script>

<li class="h-6 w-6">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 122.9 117.2"
		class:fill-white={value > 0}
		class:fill-green-medium={value === 0}
	>
		{#if value !== 1 && value !== 0}
			<defs>
				<linearGradient id="gradient">
					<stop offset={`${Number((value * 100).toFixed(5))}%`} stop-color="#ffffff" />
					<stop stop-color="#9dcd79" />
				</linearGradient>
			</defs>
			<path
				fill="url('#gradient')"
				d="M64.4 2 80 38.8l39.9 3.5a3.2 3.2 0 0 1 1.8 5.6L91.6 74.3l9 39a3.2 3.2 0 0 1-5 3.4L61.5 96.2l-34.3 20.5a3.2 3.2 0 0 1-4.8-3.4l9-39L1 47.9A3.2 3.2 0 0 1 3 42.3l39.7-3.5L58.5 2a3.2 3.2 0 0 1 5.9 0z"
			/>
		{:else}
			<path
				d="M64.4 2 80 38.8l39.9 3.5a3.2 3.2 0 0 1 1.8 5.6L91.6 74.3l9 39a3.2 3.2 0 0 1-5 3.4L61.5 96.2l-34.3 20.5a3.2 3.2 0 0 1-4.8-3.4l9-39L1 47.9A3.2 3.2 0 0 1 3 42.3l39.7-3.5L58.5 2a3.2 3.2 0 0 1 5.9 0z"
			/>
		{/if}
	</svg>
</li>
