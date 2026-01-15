<script setup lang="ts">
import type { Experience } from "@/lib/schemas"
import TimelineItem from "./TimelineItem.vue"

defineProps<{
  experience: Experience[]
}>()
</script>

<template>
    <div class="p-6 pt-0 pb-0">
        <ul class="ml-10 border-l border-zinc-500">
        <TimelineItem
          v-for="(exp, id) in experience"
          :key="id"
          :experience="exp"
        />
      </ul>
    </div>
</template>
