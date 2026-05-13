<!-- Education.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { GraduationCap, Award, ChevronRight } from "lucide-vue-next";

interface Education {
	institution: string;
	degree: string;
	from: string;
	to: string;
	gpa?: string;
	honor?: string;
	courses?: string[];
	highlights: string[];
}

const education: Education[] = [
	{
		institution: "Polytechnic University of the Philippines Biñan Campus",
		degree: "Bachelor of Science in Information Technology",
		from: "2020",
		to: "2024",
		gpa: "??/??",
		honor: "Magna Cum Laude",
		courses: [
			"Human-Computer Interaction",
			"Network Security",
			"User Research Methods",
			"Interactive Device Design",
			"Data Structures & Algorithms",
			"Operating Systems",
		],
		highlights: [
			"Magna Cum Laude A.Y. 2023-2024",
			"President's List Academic Achievement Award",
			"Video Editor of Central Student Council - Biñan Campus",
		],
	},
	{
		institution: "Biñan Integrated National High School",
		degree: "Accountancy Business and Management",
		from: "2018",
		to: "2020",
		gpa: "",
		honor: "",
		courses: [
		],
		highlights: [
			"Academic Achievement Award",
			"Video Editor of ABM Organization",
		],
	},
];

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
	<section id="education" class="py-24 px-4 sm:px-6">
		<div ref="sectionRef" class="max-w-6xl mx-auto">
			<!-- ── Header ──────────────────────────────────────────────────────── -->
			<div class="mb-16 transition-all duration-700 ease-out"
				:class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
				<p class="text-primary text-sm font-mono tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
					<span class="inline-block w-4 h-px bg-primary" aria-hidden="true" />
					education
				</p>

				<h2 class="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
					Academic background
				</h2>
			</div>

			<!-- ── Education entries ──────────────────────────────────────────── -->
			<div class="space-y-8">
				<div v-for="(edu, i) in education" :key="edu.institution"
					class="grid md:grid-cols-5 gap-6 items-start transition-all duration-700 ease-out" :class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
						" :style="{ transitionDelay: `${100 + i * 120}ms` }">
					<!-- Degree card — col 1-3 -->
					<article
						class="md:col-span-3 p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all"
						:style="{ transitionDelay: `${100 + i * 100}ms` }">
						<!-- Institution row -->
						<div class="flex items-start gap-4 mb-5">
							<div
								class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
								<GraduationCap class="w-6 h-6 text-primary" aria-hidden="true" />
							</div>

							<div>
								<h3 class="text-foreground font-semibold text-lg leading-snug">
									{{ edu.institution }}
								</h3>
								<p class="text-muted-foreground text-sm mt-0.5">
									{{ edu.degree }}
								</p>
							</div>
						</div>

						<!-- Meta pills -->
						<div class="flex flex-wrap gap-2 mb-5">
							<span class="px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground font-mono text-xs">
								{{ edu.from }} – {{ edu.to }}
							</span>
							<span v-if="edu.gpa"
								class="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono text-xs border border-primary/20">
								GPA {{ edu.gpa }}
							</span>
							<span v-if="edu.honor"
								class="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs border border-emerald-500/20">
								{{ edu.honor }}
							</span>
						</div>

						<!-- Highlights -->
						<ul class="space-y-2.5" aria-label="Academic highlights">
							<li v-for="(highlight, j) in edu.highlights" :key="j"
								class="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
								<ChevronRight class="text-primary shrink-0 mt-[3px] size-3.5" aria-hidden="true" />
								<span>{{ highlight }}</span>
							</li>
						</ul>
					</article>

					<!-- Coursework card — col 4-5 -->
					<aside v-if="edu.courses?.length"
						class="md:col-span-2 p-5 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-700 ease-out"
						:class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
							" style="transition-delay: 200ms" aria-label="Relevant coursework">
						<div class="flex items-center gap-2 mb-4">
							<Award class="w-4 h-4 text-primary" aria-hidden="true" />
							<h4 class="text-sm font-semibold text-foreground">
								Relevant Coursework
							</h4>
						</div>

						<div class="flex flex-wrap gap-2" role="list">
							<span v-for="course in edu.courses" :key="course" role="listitem"
								class="px-2.5 py-1 text-xs rounded-full border border-border/60 bg-muted/40 text-muted-foreground font-mono hover:border-primary/30 hover:text-foreground transition-colors duration-150 cursor-default">
								{{ course }}
							</span>
						</div>
					</aside>
				</div>
			</div>
		</div>
	</section>
</template>
