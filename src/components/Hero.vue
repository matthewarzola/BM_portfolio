<script setup>
const name = "Benedict Matthew Arzola";
const subtitle = "A UI/UX Engineer with a passion for cybersecurity.";
const description = "I design and develop intuitive, user-centered interfaces while continuously exploring security principles to create safer digital experiences.";
const resumeLink = "#";
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/benedict-arzola",
  github: "https://github.com/benedict-arzola"
};
</script>

<template>
  <section class="hero flex flex-col items-center pt-32 pb-12">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl font-bold mb-2">{{ name }}</h1>
      <h2 class="text-lg text-gray-400 mb-4">{{ subtitle }}</h2>
      <p class="max-w-2xl text-center text-gray-300 mb-6">{{ description }}</p>
      <div class="flex space-x-4 mb-6">
        <a :href="resumeLink" class="bg-gray-800 border border-gray-600 px-4 py-2 rounded text-white flex items-center">
          <span class="material-icons mr-2">description</span> Resume
        </a>
        <a :href="socialLinks.linkedin" target="_blank" class="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-blue-400 flex items-center">
          <span class="material-icons mr-2">linkedin</span>
        </a>
        <a :href="socialLinks.github" target="_blank" class="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-blue-400 flex items-center">
          <span class="material-icons mr-2">code</span>
        </a>
      </div>
      <img src="https://via.placeholder.com/120" alt="Profile" class="rounded-full border-4 border-gray-700 shadow-lg w-32 h-32 object-cover" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: none;
}
</style>