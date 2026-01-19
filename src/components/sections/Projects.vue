<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'Project One',
    description: 'A web application that allows users to track their fitness goals and progress.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    image: 'path/to/project-one-screenshot.png',
    link: 'https://github.com/username/project-one'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform for buying and selling handmade crafts.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'path/to/project-two-screenshot.png',
    link: 'https://github.com/username/project-two'
  },
  {
    title: 'Project Three',
    description: 'A personal blog where I share my thoughts on UI/UX design and development.',
    technologies: ['Gatsby', 'GraphQL', 'CSS'],
    image: 'path/to/project-three-screenshot.png',
    link: 'https://github.com/username/project-three'
  }
])
</script>

<template>
  <section class="projects">
    <h2 class="text-2xl font-semibold mb-4">Featured Works</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div v-for="project in projects" :key="project.title" class="card">
        <img :src="project.image" alt="Screenshot of {{ project.title }}" class="w-full h-48 object-cover rounded-t" />
        <div class="p-4">
          <h3 class="font-bold text-lg">{{ project.title }}</h3>
          <p class="text-gray-700">{{ project.description }}</p>
          <p class="mt-2"><strong>Technologies:</strong> {{ project.technologies.join(', ') }}</p>
          <a :href="project.link" target="_blank" class="text-blue-500 hover:underline">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  margin-top: 2rem;
}
.card {
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>