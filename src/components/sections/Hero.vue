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
  <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-16">
    <div>
      <h1 class="text-4xl font-bold text-zinc-900 dark:text-white">{{ name }}</h1>
      <h2 class="text-2xl mt-4 text-zinc-700 dark:text-zinc-300">{{ subtitle }}</h2>
      <p class="mt-6 text-zinc-600 dark:text-zinc-400">{{ description }}</p>
    </div>
    <div>
      <img src="/src/assets/images/BM_image.png" alt="Profile Picture">
    </div>
  </div>
  
</template>