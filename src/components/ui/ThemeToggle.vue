<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/vue/24/outline'

const isDark = ref(true)

onMounted(() => {
    // load saved theme
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
        isDark.value = false
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
    }
})

function toggleTheme() {
    isDark.value = !isDark.value

    if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}
</script>

<template>
    <button @click="toggleTheme"
        class=" text-indigo-300 hover:text-indigo-300/50 dark:text-orange-300 dark:hover:text-orange-300/50"
        aria-label="Toggle theme">
        <SunIcon v-if="isDark" class="size-5" />
        <MoonIcon v-else class="size-5" />
    </button>
</template>