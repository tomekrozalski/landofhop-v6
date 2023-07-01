<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="container">
	Admin dashboard

	<form action={$LL.link('/api/logout')} method="POST">
		<button class="btn btn-primary">Logout</button>
	</form>
</div>
