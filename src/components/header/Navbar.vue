<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'
import { useI18n } from 'vue-i18n'
import { Moon, Sun } from 'lucide-vue-next'

const { isDark, toggleDark } = useDarkMode()
const { locale, t } = useI18n()

const toggleLocale = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const navLinks = [
  { key: 'nav.home', href: '#accueil' },
  { key: 'nav.portfolio', href: '#projet' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
]
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 pointer-events-none">
    <!-- Anchor Navigation Links (left / center) -->
    <nav class="hidden md:flex items-center gap-1 pointer-events-auto" aria-label="Navigation principale">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="font-sans font-bold uppercase tracking-widest text-[10px] px-3 py-2 text-primary dark:text-gray-300 bg-[#FDFBF7]/80 dark:bg-[#121212]/80 backdrop-blur-sm border border-transparent hover:border-primary dark:hover:border-gray-500 hover:bg-[#FDFBF7] dark:hover:bg-[#121212] transition-all duration-200"
      >
        {{ t(link.key) }}
      </a>
    </nav>

    <!-- Right controls -->
    <div class="flex items-center gap-3 ml-auto pointer-events-auto">
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
  </div>
</template>
