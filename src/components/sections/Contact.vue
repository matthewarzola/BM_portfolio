<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-vue-next";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactLink {
	label: string;
	value: string;
	href: string;
	description: string;
	icon: any;
}

interface ContactForm {
	name: string;
	email: string;
	message: string;
}

// ─── Contact links ────────────────────────────────────────────────────────────

const contactLinks: ContactLink[] = [
	{
		label: "Email",
		value: "benedicy12@gmail.com",
		href: "mailto:benedicy12@gmail.com",
		description: "Best for project inquiries and collaboration",
		icon: Mail,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/benedict-matthew-arzola/",
		href: "https://www.linkedin.com/in/benedict-matthew-arzola/",
		description: "Professional background and endorsements",
		icon: Linkedin,
	},
	{
		label: "GitHub",
		value: "github.com/matthewarzola",
		href: "https://github.com/matthewarzola",
		description: "Open source work and code samples",
		icon: Github,
	},
];

// ─── Form state ───────────────────────────────────────────────────────────────

const form = reactive<ContactForm>({ name: "", email: "", message: "" });

type Status = "idle" | "sending" | "sent" | "error";
const status = ref<Status>("idle");
const showSuccessModal = ref(false);

const handleSubmit = async () => {
	status.value = "sending";
	try {
		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				access_key: "652c7635-94d7-4fea-bba1-f49fda316377",
				name: form.name,
				email: form.email,
				message: form.message,
			}),
		});

		const data = await res.json();

		if (data.success) {
			status.value = "sent";
			showSuccessModal.value = true;
		} else {
			status.value = "error";
		}
	} catch {
		status.value = "error";
	}
};

const closeSuccessModal = () => {
	showSuccessModal.value = false;
	reset();
};

const reset = () => {
	form.name = "";
	form.email = "";
	form.message = "";
	status.value = "idle";
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
		{ threshold: 0.15 },
	);
	if (sectionRef.value) observer.observe(sectionRef.value);
});

onBeforeUnmount(() => observer?.disconnect());

// ─── Shared input classes ─────────────────────────────────────────────────────

const inputClass = `
  w-full px-3 py-2.5 text-sm rounded-lg
  border border-border bg-card/60 text-foreground
  placeholder:text-muted-foreground/40
  focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-colors duration-150
`.trim();
</script>

<template>
	<section id="contact" class="py-24 px-4 sm:px-6">
		<div ref="sectionRef" class="max-w-6xl mx-auto">
			<!-- ── Header ──────────────────────────────────────────────────────── -->
			<div class="mb-16 transition-all duration-700 ease-out" :class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				">
				<p class="text-primary text-sm font-mono tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
					<span class="inline-block w-4 h-px bg-primary" aria-hidden="true" />
					contact
				</p>

				<h2 class="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
					Let's work together
				</h2>

				<p class="text-muted-foreground mt-3 max-w-xl leading-relaxed">
					I'm open to freelance engagements, full-time opportunities, and
					research collaborations at the intersection of design and security.
				</p>
			</div>

			<!-- ── Grid ───────────────────────────────────────────────────────── -->
			<div class="grid md:grid-cols-5 gap-10">
				<!-- ── Contact links ─────────────────────────────────────────────── -->
				<div class="md:col-span-2 space-y-3 transition-all duration-700" :class="inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
					">
					<a v-for="(link, index) in contactLinks" :key="link.label" :href="link.href"
						:aria-label="`${link.label}: ${link.value}`"
						:target="link.href.startsWith('http') ? '_blank' : undefined" :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined
							" :data-testid="`link-contact-${link.label.toLowerCase()}`"
						class="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 group"
						:class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
							" :style="{ transitionDelay: `${200 + index * 100}ms` }">
						<!-- Icon -->
						<div
							class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
							<component :is="link.icon" class="w-4 h-4 text-primary" aria-hidden="true" />
						</div>

						<!-- Text -->
						<div class="min-w-0 flex-1">
							<p class="text-xs text-muted-foreground mb-0.5 font-medium tracking-wide uppercase">
								{{ link.label }}
							</p>
							<p class="text-sm font-medium text-foreground truncate">
								{{ link.value }}
							</p>
							<p class="text-xs text-muted-foreground/70 mt-0.5 leading-relaxed">
								{{ link.description }}
							</p>
						</div>

						<!-- Arrow -->
						<ArrowRight
							class="w-4 h-4 text-muted-foreground shrink-0 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
							aria-hidden="true" />
					</a>
				</div>

				<!-- ── Form panel ─────────────────────────────────────────────────── -->
				<div class="md:col-span-3 transition-all duration-700" :class="inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
					" style="transition-delay: 150ms">
					<!-- Success state -->
					<Transition enter-active-class="transition-all duration-300 ease-out"
						enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
						<div v-if="showSuccessModal"
							class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
							@click.self="closeSuccessModal">
							<div
								class="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl text-center">
								<div
									class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
									<Send class="w-6 h-6 text-primary" aria-hidden="true" />
								</div>
								<h3 class="text-2xl font-semibold text-foreground mb-2">
									Message sent!
								</h3>
								<p class="text-sm text-muted-foreground mb-6">
									Thanks for reaching out — I'll respond within 48 hours.
								</p>
								<button @click="closeSuccessModal"
									class="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
									Close
								</button>
							</div>
						</div>
					</Transition>

					<!-- Error banner -->
					<div v-if="status === 'error'"
						class="mb-4 px-4 py-3 rounded-lg border border-destructive/40 bg-destructive/10 text-destructive text-sm"
						role="alert">
						Something went wrong — please try again or email me directly.
					</div>

					<!-- Contact form -->
					<form v-if="status !== 'sent'" class="space-y-4" data-testid="form-contact" novalidate
						@submit.prevent="handleSubmit">
						<!-- Name + Email -->
						<div class="grid sm:grid-cols-2 gap-4">
							<div>
								<label for="contact-name"
									class="block text-xs font-medium text-muted-foreground mb-1.5">
									Your name
								</label>
								<input id="contact-name" v-model="form.name" type="text" required autocomplete="name"
									placeholder="Jane Smith" data-testid="input-contact-name"
									:disabled="status === 'sending'" :class="inputClass" />
							</div>

							<div>
								<label for="contact-email"
									class="block text-xs font-medium text-muted-foreground mb-1.5">
									Email address
								</label>
								<input id="contact-email" v-model="form.email" type="email" required
									autocomplete="email" placeholder="jane@company.com"
									data-testid="input-contact-email" :disabled="status === 'sending'"
									:class="inputClass" />
							</div>
						</div>

						<!-- Message -->
						<div>
							<label for="contact-message" class="block text-xs font-medium text-muted-foreground mb-1.5">
								Message
							</label>
							<textarea id="contact-message" v-model="form.message" required rows="6"
								placeholder="Tell me about the project or opportunity..."
								data-testid="input-contact-message" :disabled="status === 'sending'"
								:class="[inputClass, 'resize-none']" />
						</div>

						<!-- Submit -->
						<button type="submit" data-testid="button-contact-submit" :disabled="status === 'sending'"
							class="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-200">
							<svg v-if="status === 'sending'" class="w-4 h-4 animate-spin"
								xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
									stroke-width="4" />
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
							</svg>
							<Send v-else class="w-4 h-4" aria-hidden="true" />

							{{ status === "sending" ? "Sending…" : "Send Message" }}
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
