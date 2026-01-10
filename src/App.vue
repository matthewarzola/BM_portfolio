<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Timeline from './components/Timeline.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Certificates from './components/Certificates.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-zinc-50 dark:bg-zinc-900 min-h-screen font-sans">
    <Navbar />
    <main class="pt-24 max-w-5xl mx-auto px-4">
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Certificates />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
/* Add any specific styles for the App component here */
</style>