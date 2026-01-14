<script>
import { defineComponent } from "vue";
import * as LucideIcons from "lucide-vue-next"; // all icons

import socialsData from "@/data/socials.json";

export default defineComponent({
	name: "Socials",
	data() {
		return {
			socials: socialsData.socials,
			icons: LucideIcons
		};
	}
});
</script>

<template>
	<section class="flex gap-6">
		<a v-for="item in socials" :key="item.name" :href="item.href" target="_blank" rel="noopener noreferrer"
			:title="item.name" class="text-muted-foreground hover:text-foreground">
			<span class="sr-only">{{ item.name }}</span>
			<component :is="icons[item.icon]" class="w-5 h-5" aria-hidden="true" />
		</a>
	</section>
</template>
