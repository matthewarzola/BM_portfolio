<!-- Hero.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Shield, Layout, FileDown, ArrowDown, X, Mail, Linkedin, Github } from 'lucide-vue-next'


// ─── Typewriter ───────────────────────────────────────────────────────────────

const roles = [
	'UI/UX Software Engineer',
	'Cybersecurity Enthusiast',
	'Designer',
	'Frontend Developer',
]


const socialLinks = [
	{ icon: Github, href: 'https://github.com/matthewarzola', label: 'GitHub' },
	{ icon: Linkedin, href: 'https://www.linkedin.com/in/benedict-matthew-arzola/', label: 'LinkedIn' },
	{ icon: Mail, href: 'mailto:benedicy12@gmail.com', label: 'Email' },
]

const displayed = ref('')
const roleIndex = ref(0)
const deleting = ref(false)
const paused = ref(false)

let timer: ReturnType<typeof setTimeout> | null = null

const tick = () => {
	const current = roles[roleIndex.value]

	if (paused.value) {
		timer = setTimeout(() => {
			paused.value = false
			deleting.value = true
			tick()
		}, 1400)
		return
	}

	const next = deleting.value
		? current.slice(0, displayed.value.length - 1)
		: current.slice(0, displayed.value.length + 1)

	displayed.value = next

	if (!deleting.value && next === current) {
		paused.value = true
		timer = setTimeout(tick, 0)
		return
	}

	if (deleting.value && next === '') {
		deleting.value = false
		roleIndex.value = (roleIndex.value + 1) % roles.length
	}

	timer = setTimeout(tick, deleting.value ? 35 : 75)
}

onMounted(() => {
	tick()
})

onBeforeUnmount(() => {
	if (timer) clearTimeout(timer)
})

// ─── Scroll helpers ───────────────────────────────────────────────────────────

const scrollTo = (id: string) =>
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// ─── Resume iframe ──────────────────────────────────────────

const resumeUrl = ref('/resume.pdf')
const showResume = ref(false)

const openResume = () => {
	showResume.value = true
}

const closeResume = () => {
	showResume.value = false
}
</script>

<template>
	<section class="min-h-screen flex flex-col items-center justify-center py-24 relative overflow-hidden"
		aria-label="Hero">

		<!-- ── Background decoration ──────────────────────────────────────────── -->
		<div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
			<!-- Cyber grid -->
			<div class="absolute inset-0
        bg-[linear-gradient(to_right,hsl(188_94%_43%/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(188_94%_43%/0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]" />

			<!-- Radial glow -->
			<div class="absolute inset-0
        bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(188_94%_43%/0.08),transparent)]" />

			<!-- Ambient orbs -->
			<div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
			<div class="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl animate-pulse"
				style="animation-delay: 2s" />
		</div>

		<!-- ── Main content ───────────────────────────────────────────────────── -->
		<div class="max-w-6xl mx-auto px-4 sm:px-6 w-full
             flex flex-col md:flex-row items-center gap-12 md:gap-16">

			<!-- Left: copy -->
			<div class="flex-1 space-y-7 text-center md:text-left order-2 md:order-1">

				<!-- Available badge -->
				<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                 bg-primary/10 text-primary text-xs font-mono
                 border border-primary/20" role="status" aria-label="Currently available for opportunities">
					<span class="relative flex h-2 w-2" aria-hidden="true">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
						<span class="relative inline-flex rounded-full h-2 w-2 bg-primary" />
					</span>
					Available for opportunities
				</div>

				<!-- Name -->
				<div>
					<p class="text-muted-foreground text-base font-medium mb-2">
						Hi, I'm
					</p>

					<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
						Matthew Arzola<span class="text-primary" aria-hidden="true">.</span>
					</h1>
				</div>

				<!-- Typewriter -->
				<div class="h-8 flex items-center justify-center md:justify-start" aria-live="polite"
					aria-atomic="true">
					<span class="text-lg sm:text-xl text-primary font-light">
						{{ displayed }}
						<span class="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle animate-pulse"
							aria-hidden="true" />
					</span>
				</div>

				<!-- Description -->
				<p class="text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
					Crafting interfaces that are beautiful, intuitive, and secure by
					design. I work at the intersection of UX engineering and cybersecurity
					— where empathy meets precision.
				</p>

				<!-- CTAs -->
				<div class="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">

					<!-- Resume Button -->
					<button @click="openResume" class="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-lg
                   bg-primary text-primary-foreground font-medium text-sm
                   hover:bg-primary/90 hover:-translate-y-0.5
                   shadow-[0_0_25px_rgba(6,182,212,0.25)]
                   hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]
                   transition-all duration-200">
						Resume
						<FileDown class="w-4 h-4" aria-hidden="true" />
					</button>

					<!-- Projects -->
					<!-- <button @click="scrollTo('projects')" class="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-border
                   text-foreground font-medium text-sm
                   hover:bg-secondary hover:border-primary/30
                   hover:-translate-y-0.5 transition-all duration-200">
						View Projects
					</button> -->

					<div class="flex items-center gap-2" role="list" aria-label="Social links">
						<a v-for="link in socialLinks" :key="link.label" :href="link.href" :aria-label="link.label"
							:data-testid="`link-footer-${link.label.toLowerCase()}`"
							:target="link.href.startsWith('http') ? '_blank' : undefined"
							:rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined" role="listitem"
							class="w-10 h-10 rounded-md border border-border
							flex items-center justify-center
							text-muted-foreground
							hover:text-foreground hover:bg-secondary hover:border-primary/30
							transition-colors duration-150">
							<component :is="link.icon" class="w-4 h-4" aria-hidden="true" />
						</a>
					</div>

				</div>
			</div>

			<!-- Right: avatar orb -->
			<div class="flex-shrink-0 order-1 md:order-2 flex items-center justify-center">
				<div class="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80" aria-hidden="true">

					<!-- Spinning rings -->
					<div
						class="absolute inset-0 rounded-full border border-primary/20 animate-[spin_18s_linear_infinite]" />
					<div
						class="absolute inset-3 rounded-full border border-primary/15 animate-[spin_25s_linear_infinite_reverse]" />
					<div
						class="absolute inset-6 rounded-full border border-primary/10 animate-[spin_35s_linear_infinite]" />

					<!-- Centre disc -->
					<div class="absolute inset-10 rounded-full
                   bg-gradient-to-br from-card to-card/60
                   border border-border shadow-2xl backdrop-blur-sm
                   flex items-center justify-center">
						<div class="flex flex-col items-center gap-3">
							<div class="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30
                       flex items-center justify-center
                       shadow-[0_0_30px_rgba(6,182,212,0.2)]">
								<Shield class="w-8 h-8 text-primary" />
							</div>

							<div class="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20
                       flex items-center justify-center">
								<Layout class="w-5 h-5 text-primary/80" />
							</div>
						</div>
					</div>

					<!-- Floating tags -->
					<div class="absolute top-2 right-6 w-8 h-8 rounded-lg bg-card border border-primary/30
                   flex items-center justify-center text-xs font-mono text-primary shadow-md">
						UX
					</div>

					<div class="absolute bottom-4 left-4 w-8 h-8 rounded-lg bg-card border border-primary/30
                   flex items-center justify-center text-xs font-mono text-primary shadow-md">
						UI
					</div>

					<div class="absolute top-8 left-2 w-8 h-8 rounded-lg bg-card border border-primary/30
                   flex items-center justify-center text-xs font-mono text-primary shadow-md">
						Sec
					</div>
				</div>
			</div>
		</div>

		<!-- ── Resume Modal ───────────────────────────────────────────────────── -->
		<div v-if="showResume" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm
             flex items-center justify-center p-4">

			<div class="relative w-full max-w-6xl h-[90vh]
               bg-background border border-border rounded-2xl overflow-hidden">

				<!-- Close -->
				<button @click="closeResume" class="absolute top-4 right-4 z-10
                 w-10 h-10 rounded-lg
                 bg-background/80 hover:bg-secondary
                 border border-border
                 flex items-center justify-center">
					<X class="w-5 h-5" />
				</button>

				<!-- PDF -->
				<iframe v-if="resumeUrl" :src="resumeUrl" class="w-full h-full" />

				<!-- Empty state -->
				<div v-else class="w-full h-full flex items-center justify-center text-muted-foreground">
					Resume not found in localStorage.
				</div>

			</div>
		</div>

		<!-- ── Scroll indicator ───────────────────────────────────────────────── -->
		<button @click="scrollTo('about')" class="absolute bottom-8 left-1/2 -translate-x-1/2
             flex flex-col items-center gap-1
             text-muted-foreground hover:text-primary
             transition-colors duration-150" aria-label="Scroll to About section">
			<span class="text-xs font-mono tracking-[0.2em] uppercase">
				scroll
			</span>

			<ArrowDown class="w-4 h-4 animate-bounce" aria-hidden="true" />
		</button>

	</section>
</template>