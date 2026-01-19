<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import skillsData from '@/data/skills.json'

const skills = ref(skillsData.skills)

function getLevelColor(level: string | undefined) {
  switch(level) {
    case 'expert': return 'bg-stone-950 inset-ring inset-ring-gray-400/20 dark: text-zinc-50'
    case 'intermediate': return 'bg-zinc-700 dark:bg-gray-400/10 inset-ring inset-ring-gray-400/20 text-zinc-50'
    case 'beginner': return ' inset-ring inset-ring-gray-400/20 bg-gray-400/10 dark:bg-zinc-700'

    default: return 'bg-zinc-700 text-zinc-200'
  }
}

function formatLevel(level: string | undefined) {
  if (!level) return ''
  return level.charAt(0).toUpperCase() + level.slice(1)
}
</script>

<template>
  <section>
    <div class="flex flex-wrap gap-2 p-6">
      <span 
        v-for="item in skills" 
        :key="item.name"
        class="relative group inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium gap-2 whitespace-nowrap"
        :class="getLevelColor(item.level)" 
      >
        <Icon :icon="item.icon" class="size-5" aria-hidden="true" />
        <span>{{ item.name }}</span>

        <!-- Tooltip -->
        <span
          class="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs rounded bg-zinc-800 text-white whitespace-nowrap">
          {{ formatLevel(item.level) }}
        </span>
      </span>
    </div>
  </section>
</template>
