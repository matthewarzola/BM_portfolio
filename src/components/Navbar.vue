<template>
  <nav class="flex items-center justify-between px-8 py-4 bg-black bg-opacity-80 fixed w-full z-50">
    <div class="flex space-x-8">
      <a href="#" class="text-white font-semibold hover:text-blue-400">HOME</a>
      <a href="#projects" class="text-white font-semibold hover:text-blue-400">PROJECTS</a>
      <a href="#blog" class="text-white font-semibold hover:text-blue-400">BLOG</a>
      <a href="#contact" class="text-white font-semibold hover:text-blue-400">CONTACT</a>
    </div>
    <button class="text-white text-xl">
      <span class="material-icons">settings</span>
    </button>
  </nav>
</template>

<script setup>
// You may need to install Material Icons or use another icon library.
</script>

<style scoped>
nav {
  backdrop-filter: blur(8px);
}
</style>