<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps<{
  title: string;          
  icon?: string;            
  initiallyOpen?: boolean; 
}>();

// Internal state: whether this panel is open
const isOpen = ref(props.initiallyOpen ?? false);

// Toggle function
function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="border border-zinc-500 rounded-t-md">
    <!-- Header / Button -->
    <button
      @click="toggle"
      class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-t-md"
    >
      <span class="flex justify-center items-center">
        <Icon v-if="icon" :icon="icon" class="size-6" />
        <span class="text-lg pl-2">{{ title }}</span>
      </span>

      <svg
        :class="{ 'rotate-180': isOpen }"
        class="w-5 h-5 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <!-- Content -->
    <div v-show="isOpen" class="border-t border-zinc-500">
      <slot />
    </div>
  </div>
</template>
