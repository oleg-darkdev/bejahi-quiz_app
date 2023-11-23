<script>
	import { bel, answersNumbers } from '../../lib/shared/';

	let lang = bel;

	$: step = 1;
	$: selectedTemp = 0;
	$: resultQuiz = [];

	function increaseStep() {
		resultQuiz.push(selectedTemp);
		step++;
		selectedTemp = 0;
	}
</script>

<div class="flex h-auto min-h-screen items-center justify-center bg-black">
	<main
		class="container flex min-h-[32rem] max-w-7xl flex-col space-y-6 px-6 py-4 lg:flex-row lg:items-center lg:py-16"
	>
		{#each lang.quiz.steps as content (content.id)}
			{#if content.id == step}
				<div class="flex w-full flex-col items-center lg:w-1/2 lg:flex-row">
					<div class="max-w-lg lg:order-2 lg:mx-12">
						<h2 class="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
							<span class="text-5xl font-black text-gray-400">{content.id}</span>
							{content.title}
						</h2>
						<p class="text-sm font-thin tracking-wide text-gray-400 ">
							{content.desc}
						</p>
						{#each content.options as option}
							<button
								class="my-4  flex transform items-center  rounded-xl bg-neutral-900 px-4 py-4 transition duration-500  ease-in-out hover:bg-zinc-800 focus:ring-2 focus:ring-neutral-100 focus:ring-offset-2"
								on:click={() => (selectedTemp = option.id)}
							>
								<div class="mr-2 items-center rounded-xl bg-white  px-6 py-2">
									<p class="text-4xl font-black text-black ">{option.id}</p>
								</div>
								<span class="text-left text-gray-300 ">
									{option.text}
								</span>
							</button>
						{/each}

						{#if selectedTemp}
							<div class="mt-6">
								<button
									on:click={increaseStep}
									class="transform rounded-xl bg-white px-5 py-4 text-center text-base font-medium text-black transition duration-500 ease-in-out hover:bg-gray-100  focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 lg:px-10"
									>{lang.nextStepBtn}</button
								>
							</div>
						{/if}
					</div>
				</div>

				<div class="flex h-96 w-full flex-col items-center justify-center lg:w-1/2">
					<img
						class="h-full w-full max-w-lg rounded-lg object-cover"
						src={content.img ? `./images/quiz/${content.img}` : './images/banner.svg'}
						alt={content.imgTitle}
					/>
					<figcaption class="font-semibold tracking-wide text-gray-400">
						{content.imgTitle}
					</figcaption>
				</div>
			{/if}
		{/each}

		{#if step == 18}
			<div class="flex w-full flex-col items-center lg:w-1/2 lg:flex-row">
				<div class="max-w-lg lg:order-2 lg:mx-12">
					<h2 class="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
						<span class="text-5xl font-black text-gray-400">{lang.endQuizBtn} </span>
					</h2>
					<!-- {#each content.options as option}
							<button
								class="my-4  flex transform items-center  rounded-xl bg-neutral-900 px-4 py-4 transition duration-500  ease-in-out hover:bg-zinc-800 focus:ring-2 focus:ring-neutral-100 focus:ring-offset-2"
								on:click={() => (selectedTemp = option.id)}
							>
								<div class="mr-2 items-center rounded-xl bg-white  px-6 py-2">
									<p class="text-4xl font-black text-black ">{option.id}</p>
								</div>
								<span class="text-left text-gray-300 ">
									{option.text}
								</span>
							</button>
						{/each}
 -->
					<div class="mt-6">
						<button
							class="transform rounded-xl bg-white px-5 py-4 text-center text-base font-medium text-black transition duration-500 ease-in-out hover:bg-gray-100  focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 lg:px-10"
							>{lang.showAnswersBtn}</button
						>
					</div>
				</div>
			</div>

			<div class="flex h-96 w-full flex-col items-center justify-center lg:w-1/2">
				<p class="text-[120px] font-black">7</p>
				<!-- 						class="h-full w-full max-w-lg rounded-lg object-cover"
 -->
			</div>
		{/if}
	</main>
</div>
