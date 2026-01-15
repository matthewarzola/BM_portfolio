<script setup lang="ts">
import type { Experience } from "@/lib/schemas"

defineProps<{
    experience: Experience
}>()
</script>

<template>
    <li class="relative ml-10 py-4">
        <!-- Logo -->
        <a :href="experience.href" target="_blank" rel="noreferrer"
            class="absolute -left-15 top-4 flex items-center justify-center">
            <img :src="experience.logo" :alt="experience.name"
                class="h-10 w-10 rounded-full object-contain border bg-white" loading="lazy" />
        </a>

        <!-- Content -->
        <div class="flex flex-1 flex-col justify-start gap-2">
            <a :href="experience.href" target="_blank" rel="noreferrer" class="w-fit">
                <h2 class="text-base font-semibold leading-none">
                    {{ experience.name }}
                </h2>
            </a>

            <div class="flex flex-col gap-2">
                <div v-for="position in experience.positions" :key="`${position.title}-${position.start}`">
                    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <p class="text-sm font-medium leading-none text-muted-foreground dark:text-zinc-100">
                            {{ position.title }}
                        </p>

                        <div class="whitespace-nowrap pr-8 text-xs tabular-nums text-muted-foreground dark:text-zinc-100">
                            <span>{{ position.start }}</span>
                            <span> - </span>
                            <span>{{ position.end ?? "Present" }}</span>
                        </div>
                    </div>

                    <!-- Description -->
                    <ul v-if="position.description" class="ml-4 mt-2 list-outside list-disc">
                        <li v-for="(desc, i) in position.description" :key="i"
                            class="prose pr-8 pb-2 text-sm dark:text-zinc-300">
                            {{ desc }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </li>
</template>
