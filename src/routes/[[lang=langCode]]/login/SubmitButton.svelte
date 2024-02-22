<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Button from '$lib/atoms/forms/Button.svelte';

	const { isDelayed } = $props<{ isDelayed: boolean }>();
</script>

<div class="my-3 grid grid-cols-5 gap-4">
	<Button class="col-start-4" {isDelayed} type="submit">
		{$LL.pages.login.submit()}
	</Button>
</div>
