<script lang="ts">
	import { goto } from '$app/navigation';

	const logOut = () =>
		fetch('/api/logout')
			.then(() => {
				goto('/login', { invalidateAll: true });
			})
			.catch((err) => {
				console.log('err', err);
			});
</script>

<div class="container">
	Admin dashboard

	<button on:click={logOut}>Wyloguj</button>
</div>
