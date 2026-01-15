<script setup>
import { ref } from "vue";
import Skills from '@/components/sections/Skills.vue'
import Timeline from "@/components/Timeline.vue";
import careerData from "@/data/careers.json";
import educationData from "@/data/education.json";
import { BriefcaseIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/vue/24/outline'

const openPanels = ref([1, 2, 3]);

function togglePanel(panelNumber) {
  if (openPanels.value.includes(panelNumber)) {
    openPanels.value = openPanels.value.filter(id => id !== panelNumber);
  } else {
    openPanels.value.push(panelNumber);
  }
}

const experience = ref(careerData.career);
const education = ref(educationData.education);

</script>

<template>
  <div class="space-y-4 w-full max-w-4xl mx-auto">
    <!-- Work Experience -->
    <div class="border border-zinc-500 rounded-t-2xl">
      <button @click="togglePanel(1)" class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-t-2xl">
        <span class="flex justify-center items-center">
          <BriefcaseIcon class="size-6" /> 
          <span class="text-lg pl-2">Experience</span>
        </span>
        <svg :class="{ 'rotate-180': openPanels.includes(1) }" class="w-5 h-5 transition-transform duration-300"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div v-show="openPanels.includes(1)" class=" border-t border-zinc-500">
        <Timeline :experience="experience" />
      </div>
    </div>

    <!-- Background Education -->
    <div class="border border-zinc-500 rounded-t-2xl">
      <button @click="togglePanel(2)"
        class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-t-2xl">
        <span class="flex justify-center items-center">
          <AcademicCapIcon class="size-6" /> 
          <span class="text-lg pl-2">Education</span>
        </span>
        <svg :class="{ 'rotate-180': openPanels.includes(2) }" class="w-5 h-5 transition-transform duration-300"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div v-show="openPanels.includes(2)" class="border-t border-zinc-500">
        <Timeline :experience="education" />
      </div>
    </div>

    <!-- Skills -->
    <div class="border border-zinc-500 rounded-t-2xl">
      <button @click="togglePanel(3)"
        class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-t-2xl">
        <span class="flex justify-center items-center">
          <CpuChipIcon class="size-6" /> 
          <span class="text-lg pl-2">Technical Skills</span>
        </span>
        <svg :class="{ 'rotate-180': openPanels.includes(3) }" class="w-5 h-5 transition-transform duration-300"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div v-show="openPanels.includes(3)" class="p-4 border-t border-zinc-500">
        <Skills />
      </div>
    </div>
    
  </div>
</template>
