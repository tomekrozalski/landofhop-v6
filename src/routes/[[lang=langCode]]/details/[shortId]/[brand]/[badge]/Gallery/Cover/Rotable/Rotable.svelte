<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import Group from './Group.svelte';
	import RotableIcon from './RotableIcon.svelte';
	import RotableSpinner from './RotableSpinner.svelte';

	let areImagesLoaded = $state(false);
	let isRotable = $state(false);
	let dragData = $state({
		beforeXPosition: 0,
		currentXPosition: 0
	});
	let selectedImage = $state<number>(0);

	const imagesInGallery = $derived($page.data.details.photos.gallery);

	const point = tweened<number>(1, {
		delay: 1500,
		duration: 1500,
		easing: sineInOut
	});

	const actualImage = $derived<number>(Math.round(($point + selectedImage) % imagesInGallery));

	$effect(() => {
		if (areImagesLoaded) {
			point.set(imagesInGallery);
		}
	});

	function turnLeft() {
		selectedImage = selectedImage - 1 === 0 ? imagesInGallery : selectedImage - 1;
	}

	function turnRight() {
		selectedImage = selectedImage + 1 > imagesInGallery ? 1 : selectedImage + 1;
	}

	function onWheelMove(e: WheelEvent) {
		e.deltaY > 1 ? turnRight() : turnLeft();
	}

	function onMove(e: MouseEvent) {
		if (isRotable && e.clientX !== dragData.currentXPosition) {
			dragData.beforeXPosition = dragData.currentXPosition;
			dragData.currentXPosition = e.clientX;

			if (dragData.beforeXPosition < dragData.currentXPosition) {
				turnRight();
			} else {
				turnLeft();
			}
		}
	}
</script>

<div
	class="absolute inset-0 z-10 cursor-ew-resize"
	on:pointerup={() => (isRotable = false)}
	on:pointerdown={() => (isRotable = true)}
	on:pointerout={() => (isRotable = false)}
	on:pointermove={onMove}
	on:wheel={onWheelMove}
>
	{#if areImagesLoaded}
		<RotableIcon />
	{:else}
		<RotableSpinner />
	{/if}
	<Group image={actualImage} bind:areImagesLoaded />
</div>
