<script setup>
import { ref } from 'vue'

const skills = ref([
  'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'UIKit', 'Figma', 'Git', 'Github', 'SQL', 'Python', 'Linux'
])
</script>

<template>
  <section class="mt-12">
    <h2 class="text-xl font-semibold mb-4">Technical Skills</h2>
    <div class="flex flex-wrap gap-2">
      <span v-for="skill in skills" :key="skill" class="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium">
        {{ skill }}
      </span>
    </div>
  </section>
</template>

<style scoped>
/* Add any specific styles for the Skills component here */
</style>