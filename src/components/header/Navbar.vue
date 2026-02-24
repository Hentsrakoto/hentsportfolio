<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

// 🎨 Icônes Lucide
import { Moon, Sun } from 'lucide-vue-next'

const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <!-- Fixed floating button for light/dark mode -->
  <div class="fixed top-4 right-4 sm:top-8 sm:right-8 z-50">
    <button
      @click="toggleDark"
      class="p-3 sm:p-4 rounded-full bg-primary/90 dark:bg-gray-800/90 text-background dark:text-gray-100 shadow-xl backdrop-blur-sm border border-secondary/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
      aria-label="Changer le mode d'affichage"
    >
      <Moon v-if="!isDark" class="w-5 h-5 sm:w-6 sm:h-6 group-hover:fill-current" />
      <Sun v-else class="w-5 h-5 sm:w-6 sm:h-6 group-hover:fill-current" />
    </button>
  </div>
</template>

