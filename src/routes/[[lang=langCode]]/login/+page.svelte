<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Article from '$lib/atoms/Article.svelte';
	import Header from '$lib/atoms/headers/Primary.svelte';
	import authentication from '$lib/utils/stores/authentication';
	import LoginForm from './loginForm/LoginForm.svelte';
	import ErrorMessage from './ErrorMessage.svelte';
	import SuccessMessage from './SuccessMessage.svelte';
</script>

<svelte:head>
	<title>{$LL.pages.login.title()}</title>
</svelte:head>

<Article>
	<Header>{$LL.pages.login.title()}</Header>
	{#if $authentication.loginStatus === 'fulfilled'}
		<SuccessMessage />
	{:else if $authentication.loginStatus === 'rejected'}
		<ErrorMessage />
	{/if}
	{#if ['idle', 'rejected'].includes($authentication.loginStatus)}
		<LoginForm />
	{/if}
</Article>
