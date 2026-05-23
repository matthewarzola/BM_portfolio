<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/components/useTheme'

// ─── Theme ───────────────────────────────────────────────────────────────────

const { theme, setTheme } = useTheme()
const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

// ─── State ───────────────────────────────────────────────────────────────────

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

// ─── Nav links ───────────────────────────────────────────────────────────────

const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Certifications', href: '#certifications' },
	{ label: 'Contact', href: '#contact' },
]

// ─── Header class ────────────────────────────────────────────────────────────

const headerClass = computed(() =>
	scrolled.value
		? 'bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm'
		: 'bg-transparent'
)

// ─── Link class ──────────────────────────────────────────────────────────────

const getLinkClass = (label) => {
	const isActive = activeSection.value === label.toLowerCase()
	return isActive
		? 'text-primary bg-primary/10'
		: 'text-muted-foreground hover:text-foreground hover:bg-secondary'
}

// ─── Actions ─────────────────────────────────────────────────────────────────

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const handleNavClick = (href) => {
	mobileOpen.value = false
	document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

// ─── Scroll + IntersectionObserver ───────────────────────────────────────────

let scrollHandler = null
let observer = null

onMounted(() => {
	// Scroll detection
	scrollHandler = () => { scrolled.value = window.scrollY > 20 }
	window.addEventListener('scroll', scrollHandler, { passive: true })

	// Active section detection
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) activeSection.value = entry.target.id
			})
		},
		{ rootMargin: '-40% 0px -55% 0px' }
	)

	navLinks.forEach(({ href }) => {
		const el = document.getElementById(href.slice(1))
		if (el) observer.observe(el)
	})
})

onUnmounted(() => {
	window.removeEventListener('scroll', scrollHandler)
	observer?.disconnect()
})
</script>

<template>
	<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6" :class="headerClass">
		<div class="max-w-6xl mx-auto h-16 flex items-center justify-between">

			<!-- ── Logo ─────────────────────────────────────────────────────────── -->
			<button @click="scrollToTop" class="flex items-center gap-2.5 text-foreground font-bold text-lg group"
				data-testid="nav-logo" aria-label="Scroll to top">
				<div class="w-8 h-8 rounded-md bg-primary/10 border border-primary/30
                 flex items-center justify-center
                 group-hover:bg-primary/20 group-hover:border-primary/50
                 transition-all duration-200">
					<!-- Shield icon -->
					<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						aria-hidden="true">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
					</svg>
				</div>

				<span class="tracking-tight">
					Matthew<span class="text-primary">.</span>
				</span>
			</button>

			<!-- ── Desktop nav ──────────────────────────────────────────────────── -->
			<nav class="hidden md:flex items-center gap-2" aria-label="Main navigation">
				<button v-for="link in navLinks" :key="link.href" @click="handleNavClick(link.href)"
					:data-testid="`nav-link-${link.label.toLowerCase()}`"
					class="px-3 py-1.5 text-sm rounded-md transition-colors duration-150 font-medium"
					:class="getLinkClass(link.label)">
					{{ link.label }}
				</button>
			</nav>

			<!-- ── Right controls ───────────────────────────────────────────────── -->
			<div class="flex items-center gap-2">

				<!-- Theme toggle -->
				<button @click="toggleTheme" data-testid="button-theme-toggle" class="w-9 h-9 rounded-md border border-border
                 flex items-center justify-center
                 text-muted-foreground hover:text-foreground hover:bg-secondary
                 transition-all duration-150"
					:aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
					<!-- Sun (shown in dark mode) -->
					<svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
						fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" aria-hidden="true">
						<circle cx="12" cy="12" r="5" />
						<line x1="12" y1="1" x2="12" y2="3" />
						<line x1="12" y1="21" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="3" y2="12" />
						<line x1="21" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					</svg>

					<!-- Moon (shown in light mode) -->
					<svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						aria-hidden="true">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				</button>

				<!-- Mobile menu toggle -->
				<button @click="mobileOpen = !mobileOpen" class="md:hidden w-9 h-9 rounded-md border border-border
                 flex items-center justify-center
                 text-muted-foreground hover:text-foreground hover:bg-secondary
                 transition-colors duration-150" data-testid="button-mobile-menu"
					:aria-label="mobileOpen ? 'Close menu' : 'Open menu'" :aria-expanded="mobileOpen">
					<!-- X icon -->
					<svg v-if="mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
						fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" aria-hidden="true">
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>

					<!-- Hamburger icon -->
					<svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						aria-hidden="true">
						<line x1="4" y1="6" x2="20" y2="6" />
						<line x1="4" y1="12" x2="20" y2="12" />
						<line x1="4" y1="18" x2="20" y2="18" />
					</svg>
				</button>

			</div>
		</div>

		<!-- ── Mobile menu ──────────────────────────────────────────────────────── -->
		<Transition enter-active-class="transition-all duration-200 ease-out"
			enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition-all duration-150 ease-in" leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 -translate-y-2">
			<nav v-if="mobileOpen" class="md:hidden bg-background/95 backdrop-blur-xl
               border-b border-border/60
               px-4 py-3 flex flex-col gap-0.5" aria-label="Mobile navigation">
				<button v-for="link in navLinks" :key="link.href" @click="handleNavClick(link.href)"
					class="text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150"
					:class="getLinkClass(link.label)">
					{{ link.label }}
				</button>
			</nav>
		</Transition>

	</header>
</template>