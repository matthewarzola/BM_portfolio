<!-- About.vue -->
<script setup>
import { Layers, Lock, Cpu, Globe } from 'lucide-vue-next'

const highlights = [
  {
    icon: Layers,
    title: 'Design Thinking',
    description:
      'Systems-level thinking applied to every interface — from user research to high-fidelity prototypes.',
  },
  {
    icon: Lock,
    title: 'Security by Design',
    description:
      "Building products that are intuitive and safe. Security isn't an afterthought — it's embedded in the UX.",
  },
  {
    icon: Cpu,
    title: 'Technical Depth',
    description:
      'Comfortable across the full stack from Figma wireframes to network-layer analysis.',
  },
  {
    icon: Globe,
    title: 'Holistic Perspective',
    description:
      'Understanding how users, systems, and threats interact creates better, more resilient products.',
  },
]

const tags = [
  'User Research',
  'Figma',
  'Vue.js',
  'Penetration Testing',
  'Design Systems',
  'Linux',
  'Tailwind CSS',
]
</script>

<template>
  <section
    id="about"
    class="py-24 px-4 sm:px-6"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Heading -->
      <div class="mb-16">
        <p
          class="text-primary text-sm font-mono tracking-widest uppercase mb-2"
        >
          / about
        </p>

        <h2
          class="text-3xl sm:text-4xl font-bold text-foreground"
        >
          Where design meets defense
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left Content -->
        <div
          class="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p class="text-lg">
            I'm
            <span class="text-foreground font-semibold">
              Matthew Arzola
            </span>
            — a UI/UX Engineer who believes that great design and strong
            security are not opposites. They're the same discipline approached
            from different angles.
          </p>

          <p>
            My journey started in graphic design, evolved through front-end
            engineering, and expanded into cybersecurity when I realized that
            the systems I was building needed to be as thoughtfully protected as
            they were designed. Today, I work at the intersection of both.
          </p>

          <p>
            I'm deeply passionate about user-centered research, accessibility,
            and design systems. On the security side, I'm drawn to penetration
            testing, threat modeling, and the fascinating overlap between social
            engineering and UX psychology.
          </p>

          <!-- Tags -->
          <div class="pt-2 flex flex-wrap gap-2">
            <span
              v-for="tag in tags"
              :key="tag"
              class="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-mono"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Right Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="item in highlights"
            :key="item.title"
            class="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
          >
            <!-- Icon -->
            <div
              class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors"
            >
              <component
                :is="item.icon"
                class="w-5 h-5 text-primary"
              />
            </div>

            <!-- Title -->
            <h3
              class="font-semibold text-foreground text-sm mb-1"
            >
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p
              class="text-muted-foreground text-xs leading-relaxed"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>