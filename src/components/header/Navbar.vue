<script setup lang="ts">
import { ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'
import logo from '@/assets/logohents.png'

// 🎨 Icônes Lucide
import { Menu, X, Moon, Sun } from 'lucide-vue-next'

const { isDark, toggleDark } = useDarkMode()
const isOpen = ref(false)

const links = [
  { name: 'Acceuil', href: '#accueil' },
  { name: 'Moi', href: '#moi' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Projet', href: '#projet' },
  { name: 'Compétence', href: '#competence' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav
    class="bg-background z-50 dark:bg-background-dark text-text-light dark:text-text-dark fixed top-0 left-0 w-full shadow-lg z-50 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a
        href="#accueil"
        class="flex items-center space-x-2 text-2xl font-bold text-primary dark:text-primary-light"
      >
        <img :src="logo" class="w-20 h-25" alt="Logo Hents" />
      </a>

      <!-- Liens (Desktop) -->
      <ul class="hidden md:flex space-x-8">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" class="hover:text-primary transition-colors duration-200">
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- Boutons -->
      <div class="flex items-center space-x-4">
        <!-- Bouton Mode sombre -->
        <button
          @click="toggleDark"
          class="p-2 rounded-full bg-secondary dark:bg-secondary-dark text-white hover:scale-105 transition-transform"
          aria-label="Changer le mode d'affichage"
        >
          <Moon v-if="!isDark" class="w-5 h-5" />
          <Sun v-else class="w-5 h-5" />
        </button>

        <!-- Bouton menu mobile -->
        <button class="md:hidden" @click="isOpen = !isOpen" aria-label="Ouvrir le menu">
          <Menu v-if="!isOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="md:hidden flex flex-col items-center bg-background-light dark:bg-background-dark space-y-4 py-6 border-t border-gray-300 dark:border-gray-700"
      >
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" @click="isOpen = false" class="block text-lg hover:text-primary">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
