<script>
	import { Header, Footer, Carousel } from '../lib/widgets';
	import { be } from '../lib/shared/';

	let lang = be;
</script>

<div class="min-h-screen bg-black">
	<Header />

	<main
		class="container mx-auto flex flex-col space-y-6 px-6 py-4 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16"
	>
		<Carousel {lang} />

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
