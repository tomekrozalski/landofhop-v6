<script lang="ts">
	import { page } from '$app/stores';
	const logOut = () => fetch('/api/logout');

	$: console.log('!', $page);
</script>

<div class="container">
	Admin dashboard

	<button on:click={logOut}>Wyloguj</button>
</div>
