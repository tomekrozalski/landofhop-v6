<svelte:head>
	<style>
		body {
			overflow: hidden;
		}
	</style>
</svelte:head>

<div class="absolute inset-0 h-screen w-full bg-white">
	<ul class="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45">
		<li
			class="relative float-left h-1/2 w-1/2 scale-110
      before:absolute before:inset-0 before:origin-bottom-right before:bg-black before:content-['']"
		/>
		<li
			class="relative float-left h-1/2 w-1/2 rotate-90 scale-110
      before:absolute before:inset-0 before:origin-bottom-right before:bg-black before:content-['']"
		/>
		<li
			class="relative float-left h-1/2 w-1/2 rotate-[270deg] scale-110
      before:absolute before:inset-0 before:origin-bottom-right before:bg-black before:content-['']"
		/>
		<li
			class="relative float-left h-1/2 w-1/2 rotate-180 scale-110
      before:absolute before:inset-0 before:origin-bottom-right before:bg-black before:content-['']"
		/>
	</ul>
</div>

<style>
	@keyframes animation {
		0%,
		10% {
			-webkit-transform: perspective(140px) rotateX(-180deg);
			transform: perspective(140px) rotateX(-180deg);
			opacity: 0;
		}
		25%,
		75% {
			-webkit-transform: perspective(140px) rotateX(0deg);
			transform: perspective(140px) rotateX(0deg);
			opacity: 1;
		}
		90%,
		100% {
			-webkit-transform: perspective(140px) rotateY(180deg);
			transform: perspective(140px) rotateY(180deg);
			opacity: 0;
		}
	}

	li::before {
		animation: animation 2.4s infinite linear both;
	}

	li:nth-child(2)::before {
		animation-delay: 0.3s;
	}

	li:nth-child(3)::before {
		animation-delay: 0.9s;
	}

	li:nth-child(4)::before {
		animation-delay: 0.6s;
	}
</style>
