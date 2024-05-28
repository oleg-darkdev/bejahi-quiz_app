<script>
	const links = [
		{
			title: 'Беларуская',
			link: '#'
		},
		{
			title: 'Русский',
			link: '#'
		},
		{
			title: 'Deutsch',
			link: '#'
		}
	];
</script>

<!-- <header class="bg-black">
	<nav class="bg-black">
		<div class="container mx-auto flex flex-col items-center p-6">
			<a href="#" class="mx-auto ">
				<img class="h-10 w-auto " src="./images/logo.svg" alt="Logo image" />
			</a>

			<div
				class="mt-6 flex items-center justify-center capitalize text-gray-600 dark:text-gray-300"
			>
				{#each links as link}
					<a href="#" class="mx-2 border-b-2 border-gray-200 text-white sm:mx-6">{link.title}</a>
				{/each}
			</div>
		</div>
	</nav>
</header> -->

<header>
	<h2 class="logo"><img class="h-10 w-auto " src="./images/logo.svg" alt="Logo image" /></h2>
	<div class="toggle" />
</header>

<style>
	.logo {
		text-transform: uppercase;
		cursor: pointer;
	}

	.toggle {
		position: relative;
		width: 60px;
		height: 60px;
		background: url(https://i.ibb.co/HrfVRcx/menu.png);
		background-repeat: no-repeat;
		background-size: 30px;
		background-position: center;
		cursor: pointer;
	}

	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 40px 100px;
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 800px) {
		header {
			padding: 40px;
		}
	}
</style>
