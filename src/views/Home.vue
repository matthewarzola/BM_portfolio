<script setup>
import Hero from '../components/sections/Hero.vue'
import Timeline from '../components/sections/ProfileInfo.vue'
import Skills from '../components/sections/Skills.vue'
import Projects from '../components/sections/Projects.vue'
import Certificates from '../components/sections/Certificates.vue'
import Footer from '../components/layouts/Footer.vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
</script>

<template>
	<DefaultLayout>
		<Hero />
		<Timeline />
		<Projects />
		<Certificates />
	</DefaultLayout>
</template>