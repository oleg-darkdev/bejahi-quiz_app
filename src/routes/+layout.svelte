<script lang="ts">
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});

	import '../app.postcss';

	import { language } from '@inlang/sdk-js';
	import {  LocaleSwitcher} from '$shared/';

	export let data;
</script>

	<!-- <a href="/{language}">
		<h1>Home</h1>
	</a> -->

	<!-- <LocaleSwitcher /> -->


<slot />



