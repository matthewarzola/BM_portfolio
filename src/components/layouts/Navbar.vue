<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
</script>


<template>
	<nav class="sticky top-0 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-md z-50">
		<div class="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
					<button type="button" command="--toggle" commandfor="mobile-menu" 
						class="relative inline-flex items-center justify-center rounded-md p-2 hover:text-zinc-400 focus:outline-2 focus:-outline-offset-1 dark:focus:outline-red-500 focus:outline-sky-500">
						<Bars3Icon class="size-6" />
					</button>
				</div>

				<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<a href="#" class="group flex items-center space-x-3">
						<!-- Logo -->
						<div class="logo">
							<svg width="32px" height="32px" viewBox="0 0 452 490" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M1 222.82V489H344.11C344.11 489 435.803 468.297 450.593 364.783C450.593 364.783 459.466 281.971 394.393 246.48C394.393 246.48 450.593 205.074 450.593 131.135C450.593 131.135 450.593 24.6605 350.026 1H1V154.793H205.091L148.892 216.902L1 222.82ZM148.892 270.138H51.2834V441.676H344.11C384.291 416.227 396.855 398.156 400.309 358.865C398.733 309.542 384.295 291.688 344.11 270.138H284.953L258.333 240.562L284.953 216.902H344.11C382.377 195.11 396.321 177.508 400.309 131.135C393.276 70.8255 372.452 58.6579 326.363 48.3209H51.2834V110.43H326.363L196.218 240.562L326.363 379.567H101.567V326.331H205.091L148.892 270.138Z"
									fill="white" />
								<path
									d="M350.084 0.5L350.141 0.513672C400.617 12.3894 425.865 45.0623 438.481 74.7451C444.787 89.5813 447.94 103.672 449.516 114.054C450.304 119.245 450.698 123.512 450.896 126.481C450.994 127.966 451.043 129.127 451.067 129.918C451.08 130.313 451.087 130.617 451.09 130.821C451.091 130.924 451.091 131.002 451.092 131.055C451.092 131.081 451.093 131.101 451.093 131.114V131.134C451.093 131.135 451.09 131.136 450.593 131.136H451.093C451.093 168.237 436.992 197.173 422.899 216.826C415.853 226.653 408.807 234.163 403.521 239.217C400.877 241.744 398.673 243.658 397.128 244.941C396.356 245.583 395.747 246.067 395.332 246.392C395.322 246.399 395.312 246.406 395.303 246.413C427.529 264.289 441.488 293.778 447.382 318.826C450.349 331.438 451.276 342.934 451.462 351.277C451.555 355.45 451.462 358.835 451.346 361.18C451.288 362.352 451.224 363.264 451.175 363.884C451.15 364.194 451.129 364.431 451.114 364.591C451.107 364.671 451.101 364.731 451.097 364.772C451.095 364.793 451.093 364.809 451.092 364.819C451.091 364.824 451.09 364.828 451.09 364.831C451.09 364.832 451.09 364.833 451.09 364.834L450.593 364.782L451.09 364.836L451.088 364.854C443.671 416.767 416.961 447.934 392.101 466.113C379.674 475.2 367.712 481.041 358.855 484.611C354.427 486.397 350.772 487.615 348.224 488.387C346.95 488.773 345.951 489.047 345.271 489.226C344.93 489.315 344.669 489.38 344.492 489.423C344.404 489.444 344.336 489.461 344.291 489.472C344.268 489.477 344.251 489.481 344.239 489.483C344.234 489.485 344.229 489.486 344.226 489.486C344.224 489.487 344.222 489.487 344.222 489.487L344.11 489L344.221 489.487L344.166 489.5H0.5V222.34L0.980469 222.32L148.662 216.41L203.965 155.293H0.5V0.5H350.084ZM51.7832 109.93H327.57L326.717 110.783L196.913 240.573L326.728 379.226L327.516 380.067H101.066V325.831H203.885L148.686 270.638H51.7832V441.176H343.965C363.969 428.496 377.05 417.679 385.569 405.18C394.095 392.672 398.085 378.433 399.809 358.849C399.02 334.245 395.024 317.568 386.271 304.362C377.528 291.17 363.997 281.379 343.984 270.638H284.73L284.582 270.473L257.961 240.896L257.624 240.522L258 240.188L284.621 216.528L284.763 216.401H343.977C363.027 205.543 375.965 195.755 384.65 182.956C393.344 170.144 397.813 154.26 399.806 131.141C396.292 101.056 389.348 83.0883 377.628 71.3418C365.902 59.5898 349.322 53.9856 326.31 48.8213H51.7832V109.93Z"
									stroke="currentColor" stroke-opacity="0.5" fill="currentColor" />
							</svg>
						</div>
						<!-- Name -->
						<span
						class="flex overflow-hidden logo active font-semibold text-sm tracking-wide hidden sm:inline-flex"
						>
							<span class="flex">
								<span class="logo-letter delay-[0ms]">B</span>
								<span class="logo-letter delay-[50ms]">e</span>
								<span class="logo-letter delay-[100ms]">n</span>
								<span class="logo-letter delay-[150ms]">e</span>
								<span class="logo-letter delay-[200ms]">d</span>
								<span class="logo-letter delay-[250ms]">i</span>
								<span class="logo-letter delay-[300ms]">c</span>
								<span class="logo-letter delay-[350ms]">t</span>
							</span>
							<span class="mx-0.5"></span>
							<span class="flex">
								<span class="logo-letter delay-[400ms]">M</span>
								<span class="logo-letter delay-[450ms]">a</span>
								<span class="logo-letter delay-[500ms]">t</span>
								<span class="logo-letter delay-[550ms]">t</span>
								<span class="logo-letter delay-[600ms]">h</span>
								<span class="logo-letter delay-[650ms]">e</span>
								<span class="logo-letter delay-[700ms]">w</span>
							</span>
						</span>
					</a>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<ul class="flex space-x-6">
						<li>
							<a href="#" class="nav-link active">Home</a>
						</li>
						<li>
							<a href="#" class="nav-link">About</a>
						</li>
						<li>
							<a href="#" class="nav-link">Works</a>
						</li>
						<li>
							<a href="#" class="nav-link">Contact</a>
						</li>
						<li class="flex items-center justify-center">
							<ThemeToggle />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>


