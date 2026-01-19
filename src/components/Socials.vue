<script setup lang="ts">
import socialsData from '@/data/socials.json';
const socials = socialsData.socials;
</script>

<template>
  <section class="flex gap-6">
    <a
      v-for="item in socials"
      :key="item.name"
      :href="item.href"
      target="_blank"
      rel="noopener noreferrer"
      :title="item.name"
      class="text-muted-foreground hover:text-foreground"
    >
      <span class="sr-only">{{ item.name }}</span>
      <Icon :icon="item.icon" class="size-5" aria-hidden="true" />
    </a>
  </section>
</template>
