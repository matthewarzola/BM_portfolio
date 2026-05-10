<!-- Experience.vue -->
<script setup>
import { Briefcase } from 'lucide-vue-next'

const experiences = [
  {
    company: 'Nexus Digital Studio',
    role: 'Senior UI/UX Engineer',
    duration: 'Jan 2023 – Present',
    location: 'San Francisco, CA',
    type: 'Full-time',
    achievements: [
      'Led redesign of core SaaS dashboard, reducing task completion time by 38% through usability research and iterative prototyping.',
      'Built and maintained a design system used across 4 product teams — 200+ components in Figma and Vue.js.',
      'Introduced security-aware UX patterns including progressive disclosure for sensitive data and contextual permission prompts.',
      'Mentored 3 junior designers on component architecture and accessibility best practices.',
    ],
  },
  {
    company: 'Vortex Security Labs',
    role: 'Security UI Researcher',
    duration: 'Jun 2021 – Dec 2022',
    location: 'Remote',
    type: 'Contract',
    achievements: [
      'Conducted UX research on security notification fatigue — findings informed industry white paper on alert design.',
      'Designed and tested user interfaces for a network intrusion detection system, improving false positive triage time by 52%.',
      'Collaborated with red team to identify UX vectors exploitable through social engineering and redesigned flows to mitigate risk.',
    ],
  },
  {
    company: 'Prism Labs',
    role: 'Frontend Developer & Designer',
    duration: 'Mar 2019 – May 2021',
    location: 'Austin, TX',
    type: 'Full-time',
    achievements: [
      'Built responsive Vue.js + Tailwind applications serving 50K+ monthly active users.',
      'Designed the onboarding flow that increased new-user activation rate from 41% to 67%.',
      'Integrated OWASP best practices into frontend development workflows and component library.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="py-24 px-4 sm:px-6 bg-muted/20">
    <div class="max-w-6xl mx-auto">
      <!-- Heading -->
      <div class="mb-16">
        <p class="text-primary text-sm font-mono tracking-widest uppercase mb-2">
          / experience
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-foreground">
          Career timeline
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div class="space-y-8">
          <div v-for="(exp, i) in experiences" :key="exp.company" class="relative pl-6 md:pl-24">
            <!-- Dot -->
            <div
              class="absolute left-[-5px] md:left-[27px] top-5 w-[11px] h-[11px] rounded-full bg-primary border-2 border-background shadow-[0_0_0_3px] shadow-primary/20" />

            <!-- Icon (desktop only) -->
            <div class="absolute hidden md:flex left-0 top-4 w-16 items-start justify-end">
              <div class="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Briefcase class="w-4 h-4 text-primary" />
              </div>
            </div>

            <!-- Card -->
            <div
              class="p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <!-- Header -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 class="text-foreground font-semibold text-lg">
                    {{ exp.role }}
                  </h3>

                  <p class="text-primary text-sm font-medium">
                    {{ exp.company }}
                  </p>
                </div>

                <div class="flex flex-col items-start sm:items-end gap-1">
                  <span class="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    {{ exp.duration }}
                  </span>

                  <span class="text-xs text-muted-foreground">
                    {{ exp.location }} · {{ exp.type }}
                  </span>
                </div>
              </div>

              <!-- Achievements -->
              <ul class="space-y-2">
                <li v-for="(ach, j) in exp.achievements" :key="j" class="flex gap-2 text-sm text-muted-foreground">
                  <span class="text-primary mt-1.5 shrink-0">
                    ›
                  </span>

                  {{ ach }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>