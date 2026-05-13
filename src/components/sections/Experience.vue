<!-- Experience.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Briefcase, ChevronRight } from "lucide-vue-next";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Experience {
	company: string;
	role: string;
	duration: string;
	location: string;
	type: "Full-time" | "Contract" | "Part-time" | "Internship";
	achievements: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences: Experience[] = [
	{
		company: "Qstrike Innovation Phils. OPC",
		role: "Associate Software Engineer",
		duration: "July 2024 - Present",
		location: "San Fernando, Pampanga",
		type: "Full-time",
		achievements: [
			"Investigated and resolved frontend and functional issues, reducing recurring UI defects and improving application stability through systematic root-cause analysis and validation of fixes",
			"Debugged frontend and functional issues using Vue.js, resolving UI inconsistencies and improving cross-platform stability and overall user experience",
			"Conducted UI and functional audits to identify broken, inconsistent, or potentially vulnerable components, supporting QA efforts and maintaining reliable, user-ready builds",
		],
	},
	{
		company: "Qstrike Innovation Phils. OPC",
		role: "UI/UX Software Engineer",
		duration: "March 2024 - June 2024",
		location: "San Fernando, Pampanga",
		type: "Internship",
		achievements: [
			"Created wireframes, mockups, and interactive prototypes in Figma, bridging design and frontend to deliver implementable UI solutions that accelerated frontend development",
			"Assisted in debugging UI and functional issues, improving cross-browser compatibility and reducing user-reported interface problems",
			"Developed responsive, reusable UI components using HTML, SCSS, and UIkit, enabling faster feature implementation and simplifying frontend integration",
		],
	},
];

// ─── Type badge styles ────────────────────────────────────────────────────────

const typeBadge: Record<Experience["type"], string> = {
	"Full-time": "bg-primary/10 text-primary border-primary/20",
	Contract: "bg-amber-500/10 text-amber-400 border-amber-500/20",
	"Part-time": "bg-purple-500/10 text-purple-400 border-purple-500/20",
	Internship: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

// ─── Scroll animation ─────────────────────────────────────────────────────────

const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
	observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				inView.value = true;
				observer?.disconnect();
			}
		},
		{ threshold: 0.1 },
	);
	if (sectionRef.value) observer.observe(sectionRef.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
	<section id="experience" class="py-24 px-4 sm:px-6 bg-muted/20">
		<div ref="sectionRef" class="max-w-6xl mx-auto">
			<!-- ── Header ──────────────────────────────────────────────────────── -->
			<div class="mb-16 transition-all duration-700 ease-out" :class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				">
				<p class="text-primary text-sm font-mono tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
					<span class="inline-block w-4 h-px bg-primary" aria-hidden="true" />
					experience
				</p>

				<h2 class="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
					Career timeline
				</h2>
			</div>

			<!-- ── Timeline ────────────────────────────────────────────────────── -->
			<div class="relative">
				<!-- Vertical rule -->
				<div class="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent"
					aria-hidden="true" />

				<ol class="space-y-8" role="list" aria-label="Work history">
					<li v-for="(exp, i) in experiences" :key="exp.company"
						class="relative pl-6 md:pl-24 transition-all duration-700 ease-out" :class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
							" :style="{ transitionDelay: `${i * 120}ms` }">
						<!-- Timeline dot -->
						<div class="absolute left-[-5px] md:left-[27px] top-6 w-[11px] h-[11px] rounded-full bg-primary border-2 border-background shadow-[0_0_0_3px] shadow-primary/20 transition-transform duration-300 group-hover:scale-125"
							aria-hidden="true" />

						<!-- Briefcase icon (desktop) -->

						<!-- Card -->
						<article
							class="group p-6 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
							<!-- Card header -->
							<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
								<div class="flex items-start gap-4 mb-5">
									<div
										class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
										<Briefcase class="w-4 h-4 text-primary" />
									</div>
									<div>
										<h3
											class="text-foreground font-semibold text-lg leading-snug group-hover:text-primary transition-colors duration-200">
											{{ exp.role }}
										</h3>
										<p class="text-primary/80 text-sm font-medium mt-0.5">
											{{ exp.company }}
										</p>
									</div>
								</div>

								<div class="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
									<!-- Employment type badge -->
									<span class="text-xs font-mono px-2 py-0.5 rounded-full border"
										:class="typeBadge[exp.type]">
										{{ exp.type }}
									</span>

									<!-- Duration -->
									<span
										class="text-xs font-mono text-muted-foreground bg-muted/60 px-2 py-0.5 rounded">
										{{ exp.duration }}
									</span>

									<!-- Location -->
									<span class="text-xs text-muted-foreground/70 hidden sm:block">
										{{ exp.location }}
									</span>
								</div>
							</div>

							<!-- Location (mobile) -->
							<p class="text-xs text-muted-foreground/70 mb-4 sm:hidden">
								{{ exp.location }}
							</p>

							<!-- Achievements -->
							<ul class="space-y-2.5" aria-label="Key achievements">
								<li v-for="(ach, j) in exp.achievements" :key="j"
									class="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
									<ChevronRight class="text-primary shrink-0 mt-[3px] size-3.5" aria-hidden="true" />
									<span>{{ ach }}</span>
								</li>
							</ul>
						</article>
					</li>
				</ol>
			</div>
		</div>
	</section>
</template>
