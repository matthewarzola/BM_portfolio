<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const x = ref(0);
const y = ref(0);
const isDark = ref(false);

const moveLight = (e) => {
	x.value = e.clientX;
	y.value = e.clientY;
};

const checkDarkMode = () => {
	isDark.value = document.documentElement.classList.contains("dark");
};

onMounted(() => {
	window.addEventListener("mousemove", moveLight);
	checkDarkMode();

	const observer = new MutationObserver(checkDarkMode);
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"],
	});
});

onUnmounted(() => {
	window.removeEventListener("mousemove", moveLight);
});
</script>

<template>
	<div class="pointer-events-none fixed z-[9999] h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-transform duration-75"
		:style="{
			left: x + 'px',
			top: y + 'px',
			background: isDark
				? 'radial-gradient(circle, rgba(239,68,68,0.35) 0%, transparent 80%)'   // red-500
				: 'radial-gradient(circle, rgba(14,165,233,0.35) 0%, transparent 80%)' // sky-500
		}"></div>
</template>
