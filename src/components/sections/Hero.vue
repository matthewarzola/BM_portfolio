<script setup>
import { DocumentArrowDownIcon } from '@heroicons/vue/24/outline'
import { ref } from "vue";
import Socials from '../Socials.vue';

const showResume = ref(false);
</script>

<template>
	<article class="relative mt-20 flex flex-col gap-16 pb-15 ">
		<section
			class="relative flex flex-col items-start gap-10 md:flex-row-reverse md:items-stretch md:justify-between">
			<div class="relative grid h-[233px] w-[175px] place-items-center ">
				<img src="/Users/qip-innovation/Desktop/training-plan/BM_portfolio/public/images/me-1.jpg" alt=""
					class="w-full h-full object-cover rounded-xl" />
			</div>
			<div class="flex max-w-[320px] flex-col sm:max-w-full">
				<h1 class="title text-balance bg-clip-text text-4xl font-extrabold tracking-tight sm:text-5xl">
					Benedict Matthew Arzola
				</h1>
				<!-- <p class="mt-3 whitespace-nowrap sm:text-base text-sm font-medium uppercase tracking-widest  "> -->
        <p class="mt-2 max-w-lg text-sm text-wrap font-medium uppercase leading-relaxed tracking-widest">
					UI/UX Software Engineer · Cybersecurity Enthusiast
				</p>
				<p
					class="mt-5 max-w-lg text-sm text-wrap leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base">
          <b>UI/UX Engineer</b> by profession, <b>Cybersecurity</b> by passion. Focused on transitioning into SOC analysis to monitor and defend against real-world digital threats.
				</p>
				<section class="mt-6 flex flex-wrap items-center gap-4">
					<button @click="showResume = !showResume"
						class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground  px-4 py-2">
						<span class="font-medium">Resume</span>
						<DocumentArrowDownIcon class="size-6" />
					</button>
					<div v-if="showResume" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
						<button @click="showResume = false"
							class="absolute top-4 right-4 text-white text-2xl font-bold z-50">
							&times;
						</button>
						<iframe src="/src/assets/resume.pdf" class="w-full h-full" frameborder="0"></iframe>
					</div>
					<Socials />
				</section>
			</div>
		</section>
	</article>
</template>