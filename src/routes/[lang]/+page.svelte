<!-- `
<h1 class="text-5xl font-extralight">{i('welcome')}</h1>
<p>{@html i('description')}</p>` -->

<script>
	import { i } from '@inlang/sdk-js';
	// import {HeadHrefLangs} from '$shared';

	import { Header, Footer, Carousel } from '$widgets';
	import { Menu } from '$entities';
	import { bel } from '$shared/';

	import { onMount } from 'svelte';

	let lang = bel;

	let active = false;
</script>

<svelte:head>
	<title>Bejahi</title>
	<!-- <HeadHrefLangs /> -->
</svelte:head>

<section class="showcase" class:active>
	<Header bind:active />

  <!-- https://www.youtube.com/watch?v=ZbD8qbcXjgw -->
	<!-- <video src="/video/bg-video.gif" class='  h-screen' muted loop autoplay /> -->
	<div class="overlay" />
	<div class="text">
		<h2>Гістарычны КВIЗ</h2>
		<Carousel {lang} />
		<!-- <p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi provident unde illum
			fuga culpa enim eos amet ullam explicabo.
		</p> -->
		<div class="mt-14">
			<a class="btn-c" target="_blank" href="/en/quiz">{lang.goQuizBtn}</a>

			<!-- <a

				class="transform rounded-xl bg-white px-5 py-4 text-center text-base font-medium text-black transition duration-500 ease-in-out hover:bg-gray-100 focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 lg:mx-0 lg:w-auto lg:px-10"
				>{lang.goQuizBtn}
			</a> -->
		</div>
	</div>
	<ul class="social flex flex-row items-center justify-center">
		<li class="mr-10">
			<a target="_blank" href="https://darkdev-progect.vercel.app/">
				<h2 class="-mb-2 text-start text-xl font-thin text-black">Development by</h2>
				<img src="/logos/darkdev.svg" class="h-20" alt="" />
			</a>
		</li>
		<li class="mr-2 pt-8 transition duration-300 ease-in-out delay-150 transform hover:-translate-y-6">
			<a target="_blank" href="https://github.com/oleg-darkdev">
				<img src="/images/contact/github.svg" class="h-10" />
			</a>
		</li>
		<li class="mr-2 pt-8 transition duration-300 ease-in-out delay-150 transform hover:-translate-y-6">
			<a target="_blank" href="https://www.linkedin.com/in/oleg-darkdev">
				<img src="/images/contact/linkedin.svg" class="h-10" />
			</a>
		</li>
		<li class="mr-2 pt-8 transition duration-300 ease-in-out delay-150 transform hover:-translate-y-6">
			<a target="_blank" href="mailto:darkdev_brand@riseup.net">
				<img src="/images/contact/email.svg" class="h-10" />
			</a>
		</li>
	</ul>
</section>
<Menu />

<style>
	:root {
		--overlay-color: #000;
	}

	.btn-c {
		display: inline-block;
		font-size: 1em;
		background: #fff;
		padding: 10px 30px;
		text-decoration: none;
		color: #111;
		margin-top: 10px;
		text-transform: uppercase;
		letter-spacing: 2px;
		transition: 0.2s;
	}

	.btn-c:hover {
		letter-spacing: 6px;
	}

	.showcase {
		position: fixed;
		right: 0;
		width: 100%;
		min-height: 100vh;
		padding: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #111;
		color: #fff;
		transition: 0.5s;
		z-index: 2;
	}

	.showcase.active {
		right: 300px;
		z-index: 40;
	}

	.showcase video {
		position: fixed;
		top: 0;
		left: 0;
    /* z-index: 100; */
		width: 100%;
		min-height: 100vh;
		object-fit: cover;
		opacity: 0.8;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		mix-blend-mode: overlay;
	}

	.text {
		/* position: relative; */
		z-index: 10;
	}

	.text h2 {
		font-size: 5em;
		font-weight: 800;
		line-height: 1em;
		text-transform: uppercase;
	}

	.text h3 {
		font-size: 4em;
		font-weight: 700;
		line-height: 1em;
		text-transform: uppercase;
	}

	.text p {
		font-size: 1.1em;
		font-weight: 400;
		margin: 20px 0;
		max-width: 700px;
	}

	.social {
		position: absolute;
		bottom: 20px;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.social li {
		list-style: none;
	}

	.social li a {
		/* display: inline-block;
		 */
		filter: invert(1);
		margin-right: 20px;
		transform: scale(0.5);
		transition: 0.5s;
	}

	.social li a:hover {
		transform: scale(0.5) translateY(-15px);
	}


	@media (max-width: 800px) {
		.showcase,
		.showcase header {
			padding: 40px;
		}

		.text h2 {
			font-size: 3em;
		}

		.text h3 {
			font-size: 2em;
		}
	}
</style>
