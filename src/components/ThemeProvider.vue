<script setup lang="ts">
import { provide, onMounted } from "vue";
import { createThemeProvider, type Theme } from "./useTheme";

interface Props {
  defaultTheme?: Theme;
}

const props = withDefaults(defineProps<Props>(), {
  defaultTheme: "system",
});

const { theme, setTheme } = createThemeProvider(props.defaultTheme);

onMounted(() => {
  // Ensure DOM is updated on mount
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (theme.value === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme.value);
  }
});

provide("theme", {
  theme,
  setTheme,
});
</script>

<template>
  <slot />
</template>
