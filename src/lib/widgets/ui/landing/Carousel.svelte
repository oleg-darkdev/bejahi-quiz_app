<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let step = 0;

	onMount(() => {
		const interval = setInterval(() => {
			step = (step + 1) % lang.features.length;
			console.log('timer');
		}, 3000);

		return () => clearInterval(interval);
	});

	export let lang;
</script>

<div class="flex w-full flex-col items-center p-4 lg:w-1/2 lg:flex-row">
	<div class="order-2 mt-6 flex justify-center lg:mt-0 lg:flex-col  hidden lg:space-y-3">
		{#each lang.features as feature, i (feature.id)}
			<button
				on:click={() => {
					step = i;
				}}
				class="mx-2  rounded-full {step == i
					? 'h-4 w-4 bg-white'
					: 'h-3 w-3 bg-gray-700'} hover:bg-white focus:outline-none lg:mx-0"
			/>
		{/each}
	</div>
	<div class="max-w-2xl lg:order-2 lg:mx-12 ">
		{#each lang.features as feature, i (feature)}
			{#if feature.id == step}
				<div class="" in:fly={{ y: 10, duration: 800 }} >
					<h1 class="text-2xl font-semibold tracking-wide text-white lg:text-4xl">
						{feature.title}
					</h1>
					{#each feature.desc as text}
						<p class="my-1 text-gray-300">
							{text}
						</p>
					{/each}
				</div>
			{/if}
		{/each}

		<div class="mt-20">
			<a
				target="_blank"
				href="./quiz"
				class="transform rounded-xl bg-white px-5 py-4 text-center text-base font-medium text-black transition duration-500 ease-in-out hover:bg-gray-100 focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 lg:mx-0 lg:w-auto lg:px-10"
				>{lang.goQuizBtn}
			</a>
		</div>
	</div>
</div>

<style>
</style>
