<script>
	import Fa from 'svelte-fa';
	import { fa360Degrees } from '@fortawesome/pro-regular-svg-icons';
	import { fade } from 'svelte/transition';
</script>

<div in:fade>
	<Fa icon={fa360Degrees} size="1x" class="absolute right-2 top-1 z-10 text-black" />
</div>
