<template>
  <section id="services" class="relative py-8 bg-transparent">
    <!-- Header Journal Style -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        My Services
      </span>
      <h2 class="font-journal text-5xl sm:text-6xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3">
        Que puis-je faire ?
      </h2>
      <p class="font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:mx-0 italic">
        Des solutions sur mesure pour répondre aux besoins de votre entreprise.
      </p>
    </div>

    <!-- Editorial Layout for Services -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
      <article
        v-for="(service, index) in services"
        :key="index"
        class="flex flex-col gap-3 group relative sm:border-b-0 border-b border-primary/20 dark:border-gray-700 pb-8 sm:pb-0"
      >
        <div class="flex items-center gap-4 border-b-2 border-primary dark:border-gray-500 pb-2">
          <div class="w-8 h-8 flex items-center justify-center shrink-0 text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-gray-300 transition-colors">
            <component :is="service.icon" class="w-6 h-6" stroke-width="2.5" />
          </div>
          <h3 class="font-journal text-2xl font-bold text-primary dark:text-white uppercase tracking-tight">
            {{ service.title }}
          </h3>
        </div>
        
        <p class="font-sans text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          {{ service.description }}
        </p>

        <!-- Small deco line just for newspaper feel -->
        <span class="h-[1px] w-8 bg-primary dark:bg-gray-500 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Monitor, Smartphone, Globe, Layout, Code, Search } from 'lucide-vue-next'

const services = [
  {
    icon: Monitor,
    title: 'Développement Web',
    description:
      'Création de sites web modernes, rapides et responsive utilisant les dernières technologies comme Vue.js et Tailwind CSS.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Interfaces adaptatives qui fonctionnent parfaitement sur tous les appareils, du mobile au bureau.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description:
      "Conception d'interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.",
  },
  {
    icon: Code,
    title: 'Intégration Web',
    description:
      'Transformation de vos maquettes graphiques en code propre, sémantique et performant.',
  },
  {
    icon: Globe,
    title: 'Applications SPA',
    description:
      "Développement d'applications web monopage (Single Page Applications) fluides et interactives.",
  },
  {
    icon: Search,
    title: 'Optimisation SEO',
    description:
      'Amélioration de la structure et du contenu pour un meilleur référencement naturel sur les moteurs de recherche.',
  },
]
</script>

<style scoped>
</style>
