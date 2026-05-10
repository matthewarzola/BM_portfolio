<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { GraduationCap, Award } from "lucide-vue-next";

const courses = [
  "Human-Computer Interaction", "Network Security", "Cryptography",
  "User Research Methods", "Ethical Hacking", "Interactive Device Design",
  "Data Structures & Algorithms", "Operating Systems",
];

const highlights = [
  "Senior thesis: 'Exploiting UX Patterns in Phishing Attacks — A Security-Centered UX Analysis'",
  "Dean's List all 8 semesters",
  "President, Human-Computer Interaction Student Society",
];

// Scroll-in-view logic (replaces useScrollInView hook)
const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) inView.value = true;
    },
    { threshold: 0.1 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section id="education" class="py-24 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto" ref="sectionRef">

      <!-- Section Header -->
      <Transition name="fade-up" appear>
        <div v-if="inView" class="mb-16">
          <p class="text-primary text-sm font-mono tracking-widest uppercase mb-2">/ education</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-foreground">Academic background</h2>
        </div>
      </Transition>

      <!-- Main Grid -->
      <Transition name="fade-up-delay" appear>
        <div
          v-if="inView"
          class="grid md:grid-cols-5 gap-8 items-start"
          data-testid="card-education-0"
        >
          <!-- Degree Card -->
          <div class="md:col-span-3 p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all">
            <div class="flex items-start gap-4 mb-5">
              <div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-foreground font-semibold text-lg leading-snug">
                  University of California, Berkeley
                </h3>
                <p class="text-muted-foreground text-sm mt-0.5">
                  B.S. Computer Science &amp; Cognitive Science (Double Major)
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 mb-5">
              <span class="px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono text-xs">2015 – 2019</span>
              <span class="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono text-xs">GPA 3.87 / 4.00</span>
              <span class="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 font-mono text-xs">Cum Laude</span>
            </div>

            <ul class="space-y-2">
              <li
                v-for="(highlight, j) in highlights"
                :key="j"
                class="flex gap-2 text-sm text-muted-foreground"
              >
                <span class="text-primary mt-1.5 shrink-0">›</span>
                {{ highlight }}
              </li>
            </ul>
          </div>

          <!-- Coursework Card -->
          <div class="md:col-span-2">
            <div class="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm">
              <div class="flex items-center gap-2 mb-4">
                <Award class="w-4 h-4 text-primary" />
                <h4 class="text-sm font-semibold text-foreground">Relevant Coursework</h4>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="course in courses"
                  :key="course"
                  class="px-2.5 py-1 text-xs rounded-full border border-border bg-muted/50 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {{ course }}
                </span>
              </div>
            </div>
          </div>

        </div>
      </Transition>

    </div>
  </section>
</template>

<style scoped>
.fade-up-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-delay-enter-active {
  transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
}
.fade-up-delay-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>