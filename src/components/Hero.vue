<script setup>
import { ref } from 'vue'

const name = "Benedict Matthew A. Arzola";
const subtitle = "UI/UX Engineer";
const description = "Passionate about creating intuitive and engaging user experiences. Skilled in both design and development.";
const resumeLink = "#"; // Replace with actual resume link
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/benedict-arzola",
  github: "https://github.com/benedict-arzola"
};
</script>

<template>
  <section class="hero bg-gray-900 text-white p-8 flex flex-col items-center">
    <h1 class="text-4xl font-bold">{{ name }}</h1>
    <h2 class="text-2xl mt-2">{{ subtitle }}</h2>
    <p class="mt-4 text-center max-w-md">{{ description }}</p>
    <div class="mt-6">
      <a :href="resumeLink" class="bg-blue-500 text-white px-4 py-2 rounded">Download Resume</a>
    </div>
    <div class="mt-4">
      <a :href="socialLinks.linkedin" target="_blank" class="text-blue-400 mx-2">LinkedIn</a>
      <a :href="socialLinks.github" target="_blank" class="text-blue-400 mx-2">GitHub</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: #1a1a1a;
  padding: 2rem;
  text-align: center;
}
</style>