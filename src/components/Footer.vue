<script setup>
import { computed } from 'vue'

// ─── Data ────────────────────────────────────────────────────────────────────

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { icon: 'github', href: '#', label: 'GitHub' },
  { icon: 'linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'mail', href: 'mailto:benedicy12@gmail.com', label: 'Email' },
]
</script>

<template>
  <footer class="border-t border-border/60 bg-card/40 py-10 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

      <!-- ── Logo ─────────────────────────────────────────────────────────── -->
      <div class="flex items-center gap-2.5 text-foreground font-bold">
        <div class="w-7 h-7 rounded-md bg-primary/10 border border-primary/30
                 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <span class="tracking-tight">
          Matthew<span class="text-primary">.</span>
        </span>
      </div>

      <!-- ── Copyright ─────────────────────────────────────────────────────── -->
      <p class="text-xs text-muted-foreground font-mono">
        &copy; {{ currentYear }} Matthew Arzola &middot; Built with Vue + Tailwind
      </p>

      <!-- ── Social links ──────────────────────────────────────────────────── -->
      <div class="flex items-center gap-2" role="list" aria-label="Social links">
        <a v-for="link in socialLinks" :key="link.label" :href="link.href" :aria-label="link.label"
          :data-testid="`link-footer-${link.label.toLowerCase()}`"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined" role="listitem" class="w-8 h-8 rounded-md border border-border
                 flex items-center justify-center
                 text-muted-foreground
                 hover:text-foreground hover:bg-secondary hover:border-primary/30
                 transition-colors duration-150">
          <!-- GitHub -->
          <svg v-if="link.icon === 'github'" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            aria-hidden="true">
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c2.6-.4 5.5-1.7 5.5-7a5.7 5.7 0 0 0-1.3-3.9 5.3 5.3 0 0 0-.1-3.9s-1.1-.3-3.6 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a5.3 5.3 0 0 0-.1 3.9A5.7 5.7 0 0 0 4 9c0 5.3 2.9 6.6 5.5 7-.35.35-.6.8-.69 1.3a2.5 2.5 0 0 1-3.6 0c-1.1-.9-2.3-.9-2.3-.9s-1.5 0-.2 1c1.5.8 2.4 2.6 2.6 4v4" />
          </svg>

          <!-- LinkedIn -->
          <svg v-else-if="link.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>

          <!-- Mail -->
          <svg v-else-if="link.icon === 'mail'" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>

        </a>
      </div>

    </div>
  </footer>
</template>