<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Article from '$lib/atoms/Article.svelte';
	import Header from '$lib/atoms/headers/Primary.svelte';
	import LoginForm from './loginForm/LoginForm.svelte';
</script>

<svelte:head>
	<title>{$LL.pages.login.title()}</title>
</svelte:head>

<Article>
	<Header>{$LL.pages.login.title()}</Header>
	<LoginForm />
</Article>
