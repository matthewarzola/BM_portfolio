<!-- Hero.vue -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Shield, Layout, Download, ArrowDown } from 'lucide-vue-next'

const roles = [
  'UI/UX Engineer',
  'Cybersecurity Enthusiast',
  'Design Systems Architect',
  'Frontend Developer',
  'Security Enthusiast',
]

const roleIndex = ref(0)
const displayed = ref('')
const deleting = ref(false)
const pause = ref(false)

let timeout = null

const typeEffect = () => {
  if (pause.value) {
    timeout = setTimeout(() => {
      pause.value = false
      typeEffect()
    }, 1200)
    return
  }

  const current = roles[roleIndex.value]
  const speed = deleting.value ? 40 : 80

  timeout = setTimeout(() => {
    if (!deleting.value) {
      const next = current.slice(0, displayed.value.length + 1)
      displayed.value = next

      if (next === current) {
        pause.value = true
        deleting.value = true
      }
    } else {
      const next = current.slice(0, displayed.value.length - 1)
      displayed.value = next

      if (next === '') {
        deleting.value = false
        roleIndex.value = (roleIndex.value + 1) % roles.length
      }
    }

    typeEffect()
  }, speed)
}

onMounted(() => {
  typeEffect()
})

onBeforeUnmount(() => {
  clearTimeout(timeout)
})

const scrollToProjects = () => {
  document
    .getElementById('projects')
    ?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToAbout = () => {
  document
    .getElementById('about')
    ?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="min-h-screen flex flex-col items-center justify-center py-24 relative overflow-hidden">
    <!-- CyberGrid -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,hsl(188_94%_43%/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(188_94%_43%/0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(188_94%_43%/0.08),transparent)]" />

      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />

      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/3 blur-3xl animate-pulse"
        style="animation-delay: 2s" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
      <!-- Left Content -->
      <div class="flex-1 space-y-7 text-center md:text-left order-2 md:order-1">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>

          Available for opportunities
        </div>

        <!-- Heading -->
        <div>
          <p class="text-muted-foreground text-base font-medium mb-2">
            Hi, I'm
          </p>

          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Matthew Arzola<span class="text-primary">.</span>
          </h1>
        </div>

        <!-- Typewriter -->
        <div
          class="text-lg sm:text-xl text-muted-foreground font-light h-8 flex items-center justify-center md:justify-start">
          <span class="text-primary">
            {{ displayed }}

            <span class="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
          </span>
        </div>

        <!-- Description -->
        <p class="text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
          Crafting interfaces that are beautiful, intuitive, and secure by
          design. I work at the intersection of UX engineering and cybersecurity
          — where empathy meets precision.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
          <button @click="scrollToProjects"
            class="w-full sm:w-auto px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] hover:-translate-y-0.5">
            View Projects
          </button>

          <button
            class="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary hover:border-primary/30 transition-all hover:-translate-y-0.5">
            <Download class="w-4 h-4" />
            Download Resume
          </button>
        </div>
      </div>

      <!-- Right Content -->
      <div class="flex-shrink-0 order-1 md:order-2 flex items-center justify-center">
        <div class="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
          <div class="absolute inset-0 rounded-full border border-primary/20 animate-[spin_18s_linear_infinite]" />

          <div
            class="absolute inset-3 rounded-full border border-primary/15 animate-[spin_25s_linear_infinite_reverse]" />

          <div class="absolute inset-6 rounded-full border border-primary/10 animate-[spin_35s_linear_infinite]" />

          <div
            class="absolute inset-10 rounded-full bg-gradient-to-br from-card to-card/60 border border-border shadow-2xl backdrop-blur-sm flex items-center justify-center">
            <div class="relative flex flex-col items-center gap-3">
              <div
                class="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <Shield class="w-8 h-8 text-primary" />
              </div>

              <div class="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Layout class="w-5 h-5 text-primary/80" />
              </div>
            </div>
          </div>

          <!-- Floating Tags -->
          <div
            class="absolute top-2 right-6 w-8 h-8 rounded-lg bg-card border border-primary/30 flex items-center justify-center text-xs font-mono text-primary shadow-md">
            UX
          </div>

          <div
            class="absolute bottom-4 left-4 w-8 h-8 rounded-lg bg-card border border-primary/30 flex items-center justify-center text-xs font-mono text-primary shadow-md">
            CTF
          </div>

          <div
            class="absolute top-8 left-2 w-8 h-8 rounded-lg bg-card border border-primary/30 flex items-center justify-center text-xs font-mono text-primary shadow-md">
            Sec
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Down -->
    <button @click="scrollToAbout"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
      <span class="text-xs font-mono tracking-widest uppercase">
        scroll
      </span>

      <ArrowDown class="w-4 h-4 animate-bounce" />
    </button>
  </section>
</template>