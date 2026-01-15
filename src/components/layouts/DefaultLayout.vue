<script setup lang="ts">
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';

</script>

<template>
    <Navbar />
        <div class="relative mx-auto flex min-h-screen max-w-4xl flex-col px-8">
            <div
                class="pointer-events-none fixed inset-0 
                    bg-[linear-gradient(to_right,rgba(14,165,233,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.15)_1px,transparent_1px)]
                    dark:bg-[linear-gradient(to_right,rgba(239,68,68,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(239,68,68,0.15)_1px,transparent_1px)]
                    bg-[size:48px_48px] opacity-20">
            </div>
            <main class="grow">
                <slot />
            </main>
        </div>
    <Footer />
</template>