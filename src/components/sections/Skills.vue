<script setup>
import { ref } from 'vue'

const skills = ref([
  'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'UIKit', 'Figma', 'Git', 'Github', 'SQL', 'Python', 'Linux'
])
</script>

<template>
  <section class="">
    <div class="flex flex-wrap gap-2">
      <span v-for="skill in skills" :key="skill" class="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium">
        {{ skill }}
      </span>
    </div>
  </section>
</template>