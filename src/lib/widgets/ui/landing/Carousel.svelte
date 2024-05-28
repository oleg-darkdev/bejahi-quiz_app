<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let step = 0;

	onMount(() => {
		const interval = setInterval(() => {
			step = (step + 1) % lang.features.length;
			console.log('timer');
		}, 3000);

    console.log('slide');
		return () => clearInterval(interval);
	});

	export let lang;
</script>

<div class="flex w-full flex-col items-center p-4 lg:w-1/2 lg:flex-row">
	<div class="order-2 mt-6 flex hidden justify-center lg:mt-0 lg:flex-col lg:space-y-3">
		{#each lang.features as feature, i (feature.id)}
			<button
				on:click={() => {
					step = i;
				}}
				class="mx-2 rounded-full {step == i
					? 'h-4 w-4 bg-white'
					: 'h-3 w-3 bg-gray-700'} hover:bg-white focus:outline-none lg:mx-0"
			/>
		{/each}
	</div>
	<!-- lg:mx-12 max-w-2xl -->
	<div class=" lg:order-2">
		{#each lang.features as feature, i (feature)}
			{#if feature.id == step}
				<div class="" in:fly={{ y: 10, duration: 800 }}>
					<!-- text-2xl font-semibold tracking-wide text-white lg:text-4xl -->
					<h3 class="">
						{feature.title}
					</h3>
					{#each feature.desc as text}
						<p class="my-1 text-gray-300">
							{text}
						</p>
					{/each}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	h3 {
		font-size: 2em;
		font-weight: 700;
		line-height: 1em;
		text-transform: uppercase;
	}
</style>
