<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3', level: 'Advanced' },
  { name: 'SASS', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'Vue.js', level: 'Intermediate' },
  { name: 'Figma', level: 'Advanced' },
  { name: 'Adobe XD', level: 'Intermediate' },
  { name: 'Git & GitHub', level: 'Advanced' },
])

</script>

<template>
  <section class="bg-gray-800 text-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Technical Skills</h2>
    <ul class="list-disc pl-5">
      <li v-for="skill in skills" :key="skill.name">
        {{ skill.name }} - {{ skill.level }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* Add any specific styles for the Skills component here */
</style>