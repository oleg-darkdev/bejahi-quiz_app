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

<header class="bg-black">
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
</header>
