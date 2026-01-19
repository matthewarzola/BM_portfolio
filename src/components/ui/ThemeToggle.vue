<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

onMounted(() => {
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
        class=" text-indigo-500 hover:text-indigo-500 dark:text-orange-300 dark:hover:text-orange-300/50"
        aria-label="Toggle theme">
        <Icon v-if="isDark" icon="lucide:sun" class="size-5" />
        <Icon v-else icon="lucide:moon" class="size-5" />
    </button>
</template>