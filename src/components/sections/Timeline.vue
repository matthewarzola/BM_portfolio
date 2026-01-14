<script setup>
import { ref } from "vue";
import Skills from '@/components/sections/Skills.vue'
const openPanel = ref(1);

function togglePanel(panelNumber) {
  openPanel.value = openPanel.value === panelNumber ? null : panelNumber;
}
</script>

<template>
  <div class="space-y-4 w-full max-w-4xl mx-auto">
    <!-- Panel 1 -->
    <div class="border border-zinc-500 rounded-lg shadow-sm">
      <button
        @click="togglePanel(1)"
        class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-zinc-800 rounded-t-lg"
      >
        <span class=" text-lg">Experience</span>
        <svg
          :class="{ 'rotate-180': openPanel === 1 }"
          class="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div v-show="openPanel === 1" class="p-4 border-t border-zinc-500">
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    <!-- Panel 2 -->
    <div class="border border-zinc-500 rounded-lg shadow-sm">
      <button
        @click="togglePanel(2)"
        class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-zinc-800 rounded-t-lg"
      >
        <span class=" text-lg">Education</span>
        <svg
          :class="{ 'rotate-180': openPanel === 2 }"
          class="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div v-show="openPanel === 2" class="p-4 border-t border-zinc-500">
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    <!-- Panel 3 -->
    <div class="border border-zinc-500 rounded-lg shadow-sm">
      <button
        @click="togglePanel(3)"
        class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-zinc-800 rounded-t-lg"
      >
        <span class="text-lg">Technical Skills</span>
        <svg
          :class="{ 'rotate-180': openPanel === 3 }"
          class="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div v-show="openPanel === 3" class="p-4 border-t border-zinc-500">
        <Skills />
      </div>
    </div>
  </div>
</template>
