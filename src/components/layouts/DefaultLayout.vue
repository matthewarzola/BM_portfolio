<script setup lang="ts">
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';

</script>

<template>
    <Navbar />
        <main class="pt-24 max-w-5xl mx-auto px-4">
            <slot />
        </main>
    <Footer />
</template>