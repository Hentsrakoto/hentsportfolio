<template>
  <section id="services" class="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
      <SectionTitle
        badge="My Services"
        title="Ce que je peux faire pour vous"
        subtitle="Des solutions sur mesure pour répondre aux besoins de votre entreprise."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group p-8 rounded-3xl bg-slate-50 dark:bg-gray-800/50 border border-slate-100 dark:border-gray-700 hover:border-secondary/50 dark:hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/5"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300"
          >
            <component
              :is="service.icon"
              class="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300"
            />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ service.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
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
