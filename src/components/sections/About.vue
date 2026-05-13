<!-- About.vue -->
<script setup>
import { Layers, Lock, Cpu, Globe } from 'lucide-vue-next'

const highlights = [
	{
		icon: Layers,
		title: 'Design Thinking',
		description:
			'Started with a self-initiated project — designed it, built it, owned it. That same curiosity drives every interface I create.',
	},
	{
		icon: Lock,
		title: 'Security by Design',
		description:
			"Actively studying cybersecurity because what I build should be as protected as it is intuitive. Security starts at the UX layer.",
	},
	{
		icon: Cpu,
		title: 'Technical Depth',
		description:
			"I don't just design — I build what I design. Figma wireframes to working frontend code, end to end.",
	},
	{
		icon: Globe,
		title: 'Holistic Perspective',
		description:
			'UX psychology and security think alike — both ask how users trust, decide, and act. I design with both in mind.',
	},
]
const tags = [
	'HTML',
	'CSS',
	'JavaScript',
	'Figma',
	'UI Design',
	'Wireframing',
	'Prototyping',
	'User Research',
	'UX Psychology',
	'Security Awareness',
	'Social Engineering',
]
</script>

<template>
	<section id="about" class="py-24 px-4 sm:px-6">
		<div class="max-w-6xl mx-auto">
			<!-- Heading -->

			<div class="mb-16">
				<p class="text-primary text-sm font-mono tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
					<span class="inline-block w-4 h-px bg-primary" aria-hidden="true" />
					about
				</p>

				<h2 class="text-3xl sm:text-4xl font-bold text-foreground">
					Where design meets defense
				</h2>
			</div>

			<div class="grid md:grid-cols-2 gap-12 items-start">
				<!-- Left Content -->
				<div class="space-y-5 text-muted-foreground leading-relaxed">
					<p class="text-md">
						I'm
						<span class="text-foreground font-semibold">
							Matthew Arzola
						</span>
						— a UI/UX Engineer who believes that great design and strong
						security are not opposites. They're the same discipline approached
						from different angles.
					</p>

					<p>
						It started with a single self-initiated project — I designed it, built it, and realized I
						genuinely loved the whole process. That curiosity became my career.
					</p>

					<p>
						Now I'm expanding into cybersecurity, drawn to the overlap between UX psychology and social
						engineering. How users think, trust, and decide isn't just a design problem — it's a security
						one too.
					</p>

					<!-- Tags -->
					<div class="pt-2 flex flex-wrap gap-2">
						<span v-for="tag in tags" :key="tag"
							class="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
							{{ tag }}
						</span>
					</div>
				</div>

				<!-- Right Cards -->
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div v-for="item in highlights" :key="item.title"
						class="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group">
						<!-- Icon -->
						<div
							class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
							<component :is="item.icon" class="w-5 h-5 text-primary" />
						</div>

						<!-- Title -->
						<h3 class="font-semibold text-foreground text-sm mb-1">
							{{ item.title }}
						</h3>

						<!-- Description -->
						<p class="text-muted-foreground text-xs leading-relaxed">
							{{ item.description }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>