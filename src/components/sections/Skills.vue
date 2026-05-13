<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
	{
		label: 'Frontend Development',
		icon: '✦',
		skills: [
			{ name: 'HTML / CSS', level: 95 },
			{ name: 'JavaScript', level: 80 },
			{ name: 'Sass', level: 76 },
		],
	},
	{
		label: 'UI/UX Design',
		icon: '✦',
		skills: [
			{ name: 'Figma', level: 95 },
			{ name: 'Wireframing', level: 90 },
			{ name: 'Prototyping', level: 92 },
			{ name: 'User Research', level: 78 },
		],
	},
	{
		label: 'Frontend Frameworks',
		icon: '⟨⟩',
		skills: [
			{ name: 'Vue.js', level: 66 },
			{ name: 'Tailwind CSS', level: 82 },
			{ name: 'UIkit', level: 83 },
		],
	},
	{
		label: 'Backend Development',
		icon: '⟨⟩',
		skills: [
			{ name: 'Python', level: 48 },
			{ name: 'SQL', level: 50 },
		],
	},
	{
		label: 'Cybersecurity',
		icon: '◈',
		skills: [
			{ name: 'Networking', level: 48 },
			{ name: 'Linux', level: 50 },
		],
	},
	{
		label: 'Tools & Software',
		icon: '⚙',
		skills: [
			{ name: 'Git', level: 90 },
			{ name: 'GitHub', level: 90 },
			{ name: 'VS Code', level: 95 },

		],
	},
]

// ─── Intersection Observer ────────────────────────────────────────────────────

const sectionRef = ref(null)
const inView = ref(false)

let observer = null

onMounted(() => {
	observer = new IntersectionObserver(
		([entry]) => { if (entry.isIntersecting) inView.value = true },
		{ threshold: 0.15 }
	)
	if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => observer?.disconnect())

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Colour-code the level badge */
function levelColor(level) {
	if (level >= 90) return 'text-emerald-400'
	if (level >= 80) return 'text-primary'
	if (level >= 70) return 'text-amber-400'
	return 'text-muted-foreground'
}

/** Stagger delay in ms */
function delay(ci, si) {
	return `${ci * 120 + si * 60 + 200}ms`
}
</script>

<template>
	<section id="skills" class="py-24 px-4 sm:px-6 bg-muted/20">
		<div class="max-w-6xl mx-auto" ref="sectionRef">

			<!-- ── Header ──────────────────────────────────────────────────────── -->
			<div class="mb-16 transition-all duration-700 ease-out"
				:class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
				<p class="text-primary text-sm font-mono tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
					<span class="inline-block w-4 h-px bg-primary" aria-hidden="true" />
					skills
				</p>

				<h2 class="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
					Technical Expertise
				</h2>
			</div>

			<!-- ── Grid ───────────────────────────────────────────────────────── -->
			<div class="grid sm:grid-cols-2 gap-5">
				<div v-for="(cat, ci) in categories" :key="cat.label" class="group relative p-6 rounded-2xl border border-border/60 bg-card/50
                 backdrop-blur-sm overflow-hidden
                 hover:border-primary/40 hover:bg-card/80
                 transition-all duration-300 ease-out">
					<!-- Subtle top-right glow on hover -->
					<div class="pointer-events-none absolute -top-8 -right-8 w-24 h-24 rounded-full
                   bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

					<!-- Category header -->
					<div class="flex items-center gap-2.5 mb-6">
						<span class="flex items-center justify-center w-7 h-7 rounded-md
                     bg-primary/10 text-primary text-sm leading-none select-none" aria-hidden="true">{{ cat.icon
					}}</span>

						<h3 class="font-semibold text-foreground text-sm tracking-wide">
							{{ cat.label }}
						</h3>
					</div>

					<!-- Skills -->
					<div class="space-y-4">
						<div v-for="(skill, si) in cat.skills" :key="skill.name">
							<!-- Label row -->
							<div class="flex items-center justify-between mb-2">
								<span class="text-sm text-foreground/80 font-medium">
									{{ skill.name }}
								</span>

								<span class="text-xs font-mono tabular-nums transition-colors duration-300"
									:class="levelColor(skill.level)">
									{{ skill.level }}%
								</span>
							</div>

							<!-- Track -->
							<div class="relative h-1 rounded-full bg-muted/60 overflow-hidden">
								<!-- Fill -->
								<div class="absolute inset-y-0 left-0 rounded-full
                         bg-gradient-to-r from-primary via-primary/90 to-primary/60
                         shadow-[0_0_6px_theme(colors.primary.DEFAULT/0.5)]
                         transition-[width] duration-700 ease-out" :style="{
							width: inView ? skill.level + '%' : '0%',
							transitionDelay: delay(ci, si),
						}" />

								<!-- Shimmer overlay (CSS-only, runs once on load) -->
								<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                         -translate-x-full animate-[shimmer_1.8s_ease_forwards]"
									:style="{ animationDelay: delay(ci, si) }" />
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	</section>
</template>

<style scoped>
@keyframes shimmer {
	from {
		transform: translateX(-100%);
	}

	to {
		transform: translateX(300%);
	}
}
</style>
