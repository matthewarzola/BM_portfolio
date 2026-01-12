<script setup lang="ts">
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';

</script>

<template>
    <Navbar />
        <main class="pt-24 max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
            <slot />
        </main>
    <Footer />
</template>