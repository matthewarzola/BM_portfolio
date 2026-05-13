<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
	ExternalLink,
	Github,
	BookOpen,
	Shield,
	Layers,
	Lock,
	Code2,
	Eye,
} from "lucide-vue-next";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectColor = "cyan" | "emerald" | "purple";
type ProjectCategory = "Cybersecurity" | "UI/UX Design" | "Research" | 'Web Development' | 'Full Stack';

interface Project {
	title: string;
	description: string;
	tags: string[];
	category: ProjectCategory;
	subcategory?: ProjectCategory;
	icon: any;
	color: ProjectColor;
	liveUrl?: string;
	githubUrl?: string;
	caseUrl?: string;
	maintenance: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
	{
		title: "Biñan Analytica Dashboard",
		description:
			"Designed and implemented a descriptive analytics dashboard presenting charts and graphs for easy visualization and decision-making",
		tags: ["Vue.js", "Laravel", "Tailwind CSS"],
		category: "Web Development",
		subcategory: "UI/UX Design",
		icon: Code2,
		color: "cyan",
		liveUrl: "#",
		githubUrl: "#",
		maintenance: true,
	},
	{
		title: "Omnifood Project",
		description:
			"A fictional food-delivery website a personalized meal plans and meal delivery, while teaching the essentials of a responsive, real-world layout without unnecessary complexity.",
		tags: ["HTML", "CSS", "Web Design"],
		category: "Web Development",
		subcategory: "UI/UX Design",
		icon: Layers,
		color: "emerald",
		liveUrl: "https://omnifood-arzola.netlify.app/",
		githubUrl: "#",
		maintenance: false,
	},
	{
		title: "Personal Portfolio",
		description: "A self-designed portfolio showcasing my work at the intersection of UI/UX and cybersecurity — built from scratch with Vue and Tailwind, with a little help from AI.",
		tags: ["Vue.js", "Tailwind CSS", "Web Design"],
		category: "Web Development",
		subcategory: "UI/UX Design",
		icon: Code2,
		color: "cyan",
		liveUrl: "#",
		githubUrl: "#",
		maintenance: false,
	},
];

// ─── Style maps ───────────────────────────────────────────────────────────────

const iconBadge: Record<ProjectColor, string> = {
	cyan: "text-cyan-500    bg-cyan-500/10    border-cyan-500/20",
	emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
	purple: "text-purple-500  bg-purple-500/10  border-purple-500/20",
};

const categoryBadge: Record<ProjectCategory, string> = {
	'Cybersecurity': "bg-cyan-500/10   text-cyan-500",
	'UI/UX Design': "bg-primary/10    text-primary",
	'Research': "bg-purple-500/10 text-purple-500",
	'Web Development': 'bg-amber-500/10  text-amber-500',
	'Full Stack': 'bg-rose-500/10   text-rose-500',
};

// ─── Scroll animation ─────────────────────────────────────────────────────────

const containerRef = ref<HTMLElement | null>(null);
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
	if (containerRef.value) observer.observe(containerRef.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
	<section id="projects" class="py-24 px-4 sm:px-6">
		<div ref="containerRef" class="max-w-6xl mx-auto">
			<!-- ── Header ──────────────────────────────────────────────────────── -->
			<div class="mb-16 transition-all duration-700 ease-out" :class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				">
				<p class="text-primary text-sm font-mono tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
					<span class="inline-block w-4 h-px bg-primary" aria-hidden="true" />
					projects
				</p>

				<h2 class="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
					Selected works
				</h2>
			</div>

			<!-- ── Grid ───────────────────────────────────────────────────────── -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
				<article v-for="(project, index) in projects" :key="project.title"
					:data-testid="`card-project-${index}`"
					class="group flex flex-col p-6 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
					:class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
						" :style="{ transitionDelay: `${index * 80}ms` }">
					<!-- Card header -->
					<div class="flex items-start justify-between mb-4">
						<div class="w-10 h-10 rounded-lg border flex items-center justify-center shrink-0"
							:class="iconBadge[project.color]">
							<component :is="project.icon" class="w-4 h-4" aria-hidden="true" />
						</div>

						<div class="flex flex-col items-end gap-1">
							<span class="text-xs px-2 py-0.5 rounded-full font-medium"
								:class="categoryBadge[project.category]">
								{{ project.category }}
							</span>
							<span v-if="project.subcategory" class="text-xs px-2 py-0.5 rounded-full font-medium"
								:class="categoryBadge[project.subcategory]">
								{{ project.subcategory }}
							</span>
						</div>
					</div>

					<!-- Title + description -->
					<h3
						class="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
						{{ project.title }}
					</h3>

					<p class="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
						{{ project.description }}
					</p>

					<!-- Tags -->
					<div class="flex flex-wrap gap-1.5 mb-5">
						<span v-for="tag in project.tags" :key="tag"
							class="px-2 py-0.5 text-xs rounded border border-border bg-muted/40 text-muted-foreground font-mono">
							{{ tag }}
						</span>
					</div>

					<!-- Actions — only render links that exist -->
					<div v-if="project.liveUrl" class="flex items-center gap-2 mt-auto">
						<span v-if="project.maintenance"
							class="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs rounded-md font-medium bg-muted text-muted-foreground cursor-not-allowed border border-border"
							:aria-label="`${project.title} — under maintenance`">
							<ExternalLink class="w-3 h-3" aria-hidden="true" />
							Under Maintenance
						</span>

						<a v-else :href="project.liveUrl" :data-testid="`link-project-live-${index}`" target="_blank"
							rel="noopener noreferrer" :aria-label="`Live demo — ${project.title}`"
							class="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150">
							<ExternalLink class="w-3 h-3" aria-hidden="true" />
							Live Demo
						</a>

						<!-- GitHub -->
						<a v-if="project.githubUrl" :href="project.githubUrl"
							:data-testid="`link-project-github-${index}`" target="_blank" rel="noopener noreferrer"
							:aria-label="`GitHub repository — ${project.title}`"
							class="flex items-center justify-center w-9 h-9 rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-primary/30 transition-colors duration-150">
							<Github class="w-4 h-4" aria-hidden="true" />
						</a>

						<!-- Case study -->
						<a v-if="project.caseUrl" :href="project.caseUrl" :data-testid="`link-project-case-${index}`"
							:aria-label="`Case study — ${project.title}`"
							class="flex items-center justify-center w-9 h-9 rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-primary/30 transition-colors duration-150">
							<BookOpen class="w-4 h-4" aria-hidden="true" />
						</a>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
