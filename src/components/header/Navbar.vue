<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'
import { useI18n } from 'vue-i18n'

// 🎨 Icônes Lucide
import { Moon, Sun } from 'lucide-vue-next'

const { isDark, toggleDark } = useDarkMode()
const { locale } = useI18n()

const toggleLocale = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <div class="fixed top-0 right-0 p-4 sm:p-6 z-50 flex items-center gap-3">
    <!-- Language Switcher -->
    <button
      @click="toggleLocale"
      class="font-sans font-bold uppercase tracking-widest text-xs px-3 py-2 border-[2px] border-primary dark:border-gray-500 bg-[#FDFBF7] dark:bg-[#121212] text-primary dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-[#121212] transition-colors"
      aria-label="Changer de langue"
    >
      {{ locale === 'fr' ? 'EN' : 'FR' }}
    </button>
    
    <!-- Theme Switcher -->
    <button
      @click="toggleDark"
      class="p-2 border-[2px] border-primary dark:border-gray-500 bg-[#FDFBF7] dark:bg-[#121212] text-primary dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-[#121212] transition-colors flex items-center justify-center"
      aria-label="Changer le mode d'affichage"
    >
      <Moon v-if="!isDark" class="w-4 h-4 sm:w-5 sm:h-5" />
      <Sun v-else class="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  </div>
</template>
