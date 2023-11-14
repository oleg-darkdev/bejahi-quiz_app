<script>
	import { Header, Footer } from '../lib/widgets';
	import { be } from '../lib/shared/';

	$: step = 0;
</script>

<div class="h-screen bg-black">
	<Header />

	<main
		class="container mx-auto flex flex-col space-y-6 px-6 py-4 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16"
	>
		<div class="flex w-full flex-col items-center lg:w-1/2 lg:flex-row">
			<div class="order-2 mt-6 flex justify-center lg:mt-0 lg:flex-col lg:space-y-3">
				{#each be.features as feature, i (feature.id)}
					<button
						on:click={() => {
							step = i;
							// console.log(step);
						}}
						class="mx-2  rounded-full {step == i
							? 'h-4 w-4 bg-white'
							: 'h-3 w-3 bg-gray-700'} hover:bg-white focus:outline-none lg:mx-0"
					/>
				{/each}
			</div>

			<div class="max-w-lg lg:order-2 lg:mx-12">
				{#each be.features as feature}
					{#if feature.id == step}
						<h1 class="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
							{feature.title}
						</h1>
						<p class="mt-4 text-gray-600 dark:text-gray-300">
							{feature.desc}
						</p>
					{/if}
				{/each}

				<div class="mt-20">
					<a
						target="_blank"
						href="./quiz"
						class="transform rounded-xl bg-white px-5 py-4 text-center text-base font-medium text-black transition duration-500 ease-in-out hover:bg-gray-100 focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 lg:mx-0 lg:w-auto lg:px-10"
						>Перейти к квесту
					</a>
				</div>
			</div>
		</div>

		<div class="flex h-96 w-full items-center justify-center lg:w-1/2">
			<img
				class="h-full w-full max-w-2xl rounded-md object-cover"
				src="./images/banner.svg"
				alt="Banner image"
			/>
		</div>
	</main>
	<Footer />
</div>
