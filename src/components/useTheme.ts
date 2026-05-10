import { inject, ref, watch, Ref } from "vue";

export type Theme = "dark" | "light" | "system";

export interface ThemeProviderState {
  theme: Ref<Theme>;
  setTheme: (theme: Theme) => void;
}

const STORAGE_KEY = "vite-ui-theme";

export const useTheme = (): ThemeProviderState => {
  const context = inject<ThemeProviderState>("theme");

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export const createThemeProvider = (defaultTheme: Theme = "system") => {
  const theme = ref<Theme>(
    (localStorage.getItem(STORAGE_KEY) as Theme) || defaultTheme
  );

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(STORAGE_KEY, newTheme);
    theme.value = newTheme;
  };

  const updateDOM = () => {
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
  };

  watch(theme, updateDOM, { immediate: true });

  return {
    theme,
    setTheme,
  };
};
