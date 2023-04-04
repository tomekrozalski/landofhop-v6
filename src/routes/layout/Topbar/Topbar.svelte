<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFlag, faCamera } from '@fortawesome/free-solid-svg-icons';
</script>

<main class="container mx-auto">
	<nav class="h-screen w-60 bg-black p-4 text-white">
		<h1>Logo</h1>
		<ul>
			<li>
				<a href="/">
					<Fa icon={faFlag} size="1.0x" color="cornflowerblue" class="mr-3 inline-block" />
					Statystyki
				</a>
			</li>
			<li>
				<a href="/">
					<Fa icon={faCamera} size="1.0x" color="cornflowerblue" class="mr-3 inline-block" />
					Marki
				</a>
			</li>
			<li>
				<a href="/">Miejsca</a>
			</li>
			<li class="mt-4">
				<a href="/">2023</a>
			</li>
			<li>
				2022
				<ul class="ml-4">
					<li><a href="/">grudzień</a></li>
					<li><a href="/">listopad</a></li>
					<li><a href="/">październik</a></li>
					<li><a href="/">wrzesień</a></li>
					<li><a href="/">sierpień</a></li>
					<li><a href="/">lipiec</a></li>
					<li><a href="/">czerwiec</a></li>
					<li><a href="/">maj</a></li>
					<li><a href="/">kwiecień</a></li>
					<li><a href="/">marzec</a></li>
					<li><a href="/">luty</a></li>
					<li><a href="/">styczeń</a></li>
				</ul>
			</li>
			<li class="mt-4">
				<a href="/">2021</a>
			</li>
			<li>
				<a href="/">2020</a>
			</li>
			<li>
				<a href="/">2019</a>
			</li>
			<li>
				<a href="/">2018</a>
			</li>
			<li>
				<a href="/">2017</a>
			</li>
		</ul>
	</nav>
</main>
