<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ShieldCheck, ExternalLink } from "lucide-vue-next";

// ─── Types ────────────────────────────────────────────────────────────────────

type ColorVariant = "cyan" | "emerald" | "purple" | "red" | "orange";

interface Certification {
	name: string;
	org: string;
	year: string;
	credential: string;
	color: ColorVariant;
	badge: string;
	verifyUrl?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const certifications: Certification[] = [
	{
		name: "Introduction to Cybersecurity",
		org: "Cisco",
		year: "2023",
		credential: "",
		color: "cyan",
		badge: "CNA",
		verifyUrl: "https://coursera.org/share/26e7fc584765fd6790f4f374c8f6cc5e",
	},
	{
		name: "Google Foundations of User Experience (UX) Design",
		org: "Google / Coursera",
		year: "2024",
		credential: "9QE JSN22KMYL",
		color: "purple",
		badge: "UX",
		verifyUrl: "https://coursera.org/share/9f7c324fa6395ff497955b3778f2a7c9",
	},
	{
		name: "Cybersecurity Essentials",
		org: "Cisco",
		year: "2023",
		credential: "",
		color: "cyan",
		badge: "CNA",
		verifyUrl: "https://coursera.org/share/26e7fc584765fd6790f4f374c8f6cc5e",
	},
	{
		name: "Google Data Analytics: Foundations Data, Data, Everywhere",
		org: "Google / Coursera",
		year: "2023",
		credential: "4WS6NUKL5333",
		color: "emerald",
		badge: "GDA",
		verifyUrl: "https://coursera.org/share/627f9834b56482e411026d78836b1dd9",
	},
	{
		name: "Google Cybersecurity Specialization",
		org: "Google / Coursera",
		year: "2024",
		credential: "27LL7BKAX26N",
		color: "cyan",
		badge: "GCS",
		verifyUrl: "https://coursera.org/share/26e7fc584765fd6790f4f374c8f6cc5e",
	},
	{
		name: "Build Responsive Real-World Websites with HTML and CSS",
		org: "Udemy",
		year: "2025",
		credential: "UC-UC-40efb13e-d42a-42e9-8a1e-e7439a7ad97d",
		color: "emerald",
		badge: "Dev",
		verifyUrl:
			"https://www.udemy.com/certificate/UC-40efb13e-d42a-42e9-8a1e-e7439a7ad97d/",
	},
	{
		name: "JavaScript",
		org: "sololearn",
		year: "2025",
		credential: "W03TAKDW",
		color: "orange",
		badge: "Dev",
		verifyUrl: "https://www.sololearn.com/en/certificates/CC-W03TAKDW",
	},
];

// ─── Style map ────────────────────────────────────────────────────────────────

const colorMap: Record<ColorVariant, { badge: string; hover: string }> = {
	cyan: {
		badge: "bg-cyan-500/10    text-cyan-400    border-cyan-500/30",
		hover: "hover:border-cyan-500/40    hover:shadow-cyan-500/5",
	},
	emerald: {
		badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
		hover: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
	},
	purple: {
		badge: "bg-purple-500/10  text-purple-400  border-purple-500/30",
		hover: "hover:border-purple-500/40  hover:shadow-purple-500/5",
	},
	red: {
		badge: "bg-red-500/10     text-red-400     border-red-500/30",
		hover: "hover:border-red-500/40     hover:shadow-red-500/5",
	},
	orange: {
		badge: "bg-orange-500/10  text-orange-400  border-orange-500/30",
		hover: "hover:border-orange-500/40  hover:shadow-orange-500/5",
	},
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
	<section id="certifications" class="py-24 px-4 sm:px-6 bg-muted/20">
		<div ref="sectionRef" class="max-w-6xl mx-auto">
			<!-- ── Header ──────────────────────────────────────────────────────── -->
			<div class="mb-16 transition-all duration-700 ease-out" :class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				">
				<p class="text-primary text-sm font-mono tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
					<span class="inline-block w-4 h-px bg-primary" aria-hidden="true" />
					certifications
				</p>

				<h2 class="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
					Credentials &amp; licenses
				</h2>
			</div>

			<!-- ── Grid ───────────────────────────────────────────────────────── -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
				<article v-for="(cert, index) in certifications" :key="cert.name" :data-testid="`card-cert-${index}`"
					class="group flex flex-col p-5 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
					:class="[
						colorMap[cert.color].hover,
						inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
					]" :style="{ transitionDelay: `${index * 80}ms` }">
					<!-- Top row -->
					<div class="flex items-start gap-4">
						<!-- Colour badge -->
						<div class="w-12 h-12 rounded-xl border flex items-center justify-center font-bold text-sm shrink-0 tracking-tight"
							:class="colorMap[cert.color].badge" :aria-label="cert.badge">
							{{ cert.badge }}
						</div>

						<!-- Name + org -->
						<div class="flex-1 min-w-0">
							<h3
								class="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-primary transition-colors duration-200">
								{{ cert.name }}
							</h3>

							<p class="text-xs text-muted-foreground">
								{{ cert.org }}
							</p>
						</div>
					</div>

					<!-- Footer -->
					<div class="mt-auto pt-4 mt-4 border-t border-border/60 flex items-center justify-between gap-2">
						<!-- Meta -->
						<div class="flex items-center gap-1.5 min-w-0">
							<ShieldCheck class="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />

							<span class="text-xs font-mono text-muted-foreground shrink-0">
								{{ cert.year }}
							</span>

							<span class="text-muted-foreground/30 shrink-0" aria-hidden="true">·</span>

							<span class="text-xs font-mono text-muted-foreground/60 truncate" :title="cert.credential">
								{{ cert.credential }}
							</span>
						</div>

						<!-- Verify link -->
						<a v-if="cert.verifyUrl" :href="cert.verifyUrl" :data-testid="`link-cert-verify-${index}`"
							:aria-label="`Verify ${cert.name} credential`" target="_blank" rel="noopener noreferrer"
							class="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/70 transition-colors duration-150 shrink-0">
							<ExternalLink class="w-3 h-3" aria-hidden="true" />
							Verify
						</a>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
