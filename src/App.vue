<!-- App.vue -->
<script setup>
<<<<<<< HEAD
import CursorLight from "./components/ui/CursorLight.vue";
</script>

<template>
  <router-view />
  <!-- <CursorLight /> -->
</template>
=======
import ThemeProvider from '@/components/ThemeProvider.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/sections/Hero.vue'
import About from '@/components/sections/About.vue'
import Experience from '@/components/sections/Experience.vue'
import Education from '@/components/sections/Education.vue'
import Skills from '@/components/sections/Skills.vue'
import Projects from '@/components/sections/Projects.vue'
import Certifications from '@/components/sections/Certifications.vue'
import Contact from '@/components/sections/Contact.vue'
</script>

<template>
  <ThemeProvider defaultTheme="dark">
    <div class="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
</template>
>>>>>>> cbb5cb6777e24a8c14e2f68bb60bc3cbc4f447da
