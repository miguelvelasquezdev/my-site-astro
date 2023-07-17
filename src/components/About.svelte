<script>
    import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

    import '../styles/base.css'

    const time = tweened(0);

	let duration = 2000;

	time.set(200, { duration, easing: (x) => x })

    const codeStyle = "bg-zinc-800 py-[0.2rem] px-[0.3rem] before:content-none after:content-none font-semibold text-sm rounded"
</script>

<section class="h-full sm:h-screen flex flex-col justify-center items-center px-14 md:px-28 gap-y-4 text-left py-24 md:pt-0">
    <h1 class="font-bold text-4xl">About me</h1>
    <article class="flex flex-col gap-y-2">
        <p>
            Hi there! I am Miguel Velásquez and I am an autodidact Software Developer.
        </p>
        <p>
            I am into the latest technologies and the OSS world. I am curious about <code class={codeStyle}>SSR</code>, <code class={codeStyle}>Edge Runtime ⚡️</code>, <code class={codeStyle}>Devops Workflows</code>, <code class={codeStyle}>How to reduce costs when the project scales 📈</code> and <code class={codeStyle}>Distributed Systems vs Monoliths 🥊</code>.
        </p>
        <p>
            In my free time, I like to go to natural spaces 🍂🌞, do exercise, and enjoy the now.<br /> Also, I like to meet foreign people, btw I speak 3 idioms (Spanish, Portuguese, and English) and learning German. I like to know new cultures and be aware of social problems around the world.
        </p>
        <!-- <a href="#history" class="text-center text-zinc-700 animate-pulse cursor-pointer underline">More about me...</a> -->
    </article>
</section>

<!-- <div class="relative flex flex-col items-center gap-y-4 px-14 md:px-28 py-24" id="history">
    <div class="absolute flex gap-x-8 md:gap-x-24">
        {#if $time > 10 && $time < 180}
		<div transition:fade class="text-4xl" style="transform: translateY({$time}px)">🔥</div>
        {/if}
        {#if $time > 10 && $time < 180}
            <div transition:fade class="text-4xl" style="transform: translateY({$time - 50}px)">🔥</div>
        {/if}
        {#if $time > 10 && $time < 180}
            <div transition:fade class="text-4xl" style="transform: translateY({$time +80}px)">🔥</div>
        {/if}
        {#if $time > 10 && $time < 180}
            <div transition:fade class="text-4xl" style="transform: translateY({$time +20}px)">🔥</div>
        {/if}
        {#if $time > 10 && $time < 180}
            <div transition:fade class="text-4xl" style="transform: translateY({$time -100}px)">🔥</div>
        {/if}
    </div>
    <h2 class="font-bold text-4xl py-4">History</h2>
    <p>
        Once upon a time a little introvert boy who liked to be creative and the idea of creating things from 0, just imagining a new world, trying to draw on paper everything that came to his mind, believing that he was an architect and drew some houses, humans, and some imaginary things like new kind of species.
    </p>

    <p>
        One day, computers went into his life, finding games and social media, it was perfect. He spent thousands of hours there, just expanding his creativity and thinking about the possibilities a computer could give us, discovering games that could give him the opportunity to create new stuff.
    </p>
    <p>
        Games weren’t enough and discovering programming was like a dream, pure contact with computers, the perfect combination between intelligence and creativity, it’s like being behind a game, to him it was like another perspective of Art.
    </p>
</div> -->