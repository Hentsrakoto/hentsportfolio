<template>
  <section id="projet" class="relative py-12 bg-transparent">
    <!-- Header Journal Style -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        {{ $t('sectionTitle.projBadge') }}
      </span>
      <h2 class="font-journal text-4xl sm:text-5xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3 break-words hyphens-auto break-all sm:break-normal">
        {{ $t('sectionTitle.projTitle') }}
      </h2>
      <p class="font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:mx-0 italic">
        {{ $t('sectionTitle.projSubtitle') }}
      </p>
    </div>

    <!-- Editorial Layout for Projects -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t-[2px] border-b-[2px] border-primary dark:border-gray-500 py-6">

      <!-- Feature Project -->
      <article v-if="featuredProject" class="col-span-1 md:col-span-8 md:border-r-[2px] border-primary dark:border-gray-500 md:pr-8 flex flex-col gap-4">
        <h3 class="font-journal text-4xl sm:text-5xl font-black text-primary dark:text-white leading-none break-words">
          {{ featuredProject.title }}
        </h3>
        <p class="font-sans font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400 border-b border-primary/20 dark:border-gray-700 pb-2">
          {{ featuredProject.short }}
        </p>

        <figure v-if="featuredProject.imageUrl" class="relative border-[2px] border-primary dark:border-gray-500 p-1 bg-white dark:bg-[#1A1A1A]">
          <img
            :src="featuredProject.imageUrl"
            :alt="featuredProject.title"
            class="w-full h-56 object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mix-blend-multiply dark:mix-blend-normal"
          />
          <figcaption class="text-right text-[10px] uppercase tracking-wider text-gray-400 mt-1 pb-1">{{ $t('portfolio.fig1') }}</figcaption>
        </figure>

        <p class="font-serif text-lg leading-relaxed text-text dark:text-gray-200 mt-2 first-letter:text-6xl first-letter:font-journal first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          {{ featuredProject.description }}
        </p>

        <ul class="font-sans text-sm text-gray-700 dark:text-gray-300 space-y-2 mt-4 columns-1 sm:columns-2 gap-6">
          <li v-for="(line, idx) in featuredProject.details" :key="idx" class="break-inside-avoid shadow-sm mb-2 p-2 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <span class="font-bold mr-1">❖</span> {{ line }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dashed border-gray-300 dark:border-gray-700">
          <span class="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 pt-1 mr-2">{{ $t('portfolio.tools') }}</span>
          <span
            v-for="tech in featuredProject.techs"
            :key="tech.name"
            class="font-sans text-xs font-bold uppercase px-2 py-1 border border-primary dark:border-gray-500 text-primary dark:text-gray-300"
          >
            {{ tech.name }}
          </span>
        </div>


      </article>

      <!-- Side Articles -->
      <aside class="col-span-1 md:col-span-4 flex flex-col gap-10">
        <article
          v-for="(proj) in computedProjects.slice(1)"
          :key="proj.id"
          class="flex flex-col gap-3 pb-8 border-b border-primary/20 dark:border-gray-700 last:border-0 last:pb-0"
        >
          <figure v-if="proj.imageUrl" class="relative border border-primary dark:border-gray-600 p-0.5 mb-2">
            <img
              :src="proj.imageUrl"
              :alt="proj.title"
              class="w-full h-32 object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mix-blend-multiply dark:mix-blend-normal"
            />
          </figure>

          <h3 class="font-journal text-3xl font-bold text-primary dark:text-white leading-tight">
            {{ proj.title }}
          </h3>
          <p class="font-sans font-bold uppercase tracking-wider text-[10px] text-gray-500 dark:text-gray-400">
            {{ proj.short }}
          </p>

          <p class="font-serif text-sm leading-relaxed text-gray-800 dark:text-gray-300">
            {{ proj.description }}
          </p>

          <div class="flex flex-wrap gap-1 mt-1">
            <span
              v-for="tech in proj.techs"
              :key="tech.name"
              class="font-sans text-[10px] font-bold uppercase px-1.5 py-0.5 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
            >
              {{ tech.name }}
            </span>
          </div>
        </article>
      </aside>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Github, ExternalLink } from 'lucide-vue-next'
import tsidikaImg from '@/assets/chameleon-logo-clair.svg'
import planetgameImg from '@/assets/logoplanetgame.png'
import accessbibleImg from '@/assets/logo.png'
import academicImg from '@/assets/code.jpg'

const { t, locale } = useI18n()

const computedProjects = computed(() => [
  {
    id: 'tsidika',
    title: 'TSIDIKA',
    imageUrl: tsidikaImg,
    short: locale.value === 'en' ? 'Tourism · React + Spring Boot + Python' : 'Tourisme · React + Spring Boot + Python',
    description: locale.value === 'en'
      ? 'Intelligent web platform for tourist recommendation and planning in Madagascar. Combines a modern frontend, a REST API backend, and a recommendation system based on user preferences.'
      : 'Plateforme web intelligente de recommandation et de planification touristique à Madagascar. Combine un frontend moderne, un backend API REST et un système de recommandation basé sur les préférences des utilisateurs.',
    details: locale.value === 'en' ? [
      'Frontend development with React',
      'REST API backend with Spring Boot',
      'Tourist data management',
      'Recommendation system based on user preferences',
      'Integration of mapping services',
      'Tourism planning features',
    ] : [
      'Développement du frontend avec React',
      'API backend REST avec Spring Boot',
      'Gestion des données touristiques',
      'Système de recommandation basé sur les préférences',
      'Intégration de services cartographiques',
      'Planification touristique',
    ],
    techs: [{ name: 'React' }, { name: 'Spring Boot' }, { name: 'PostgreSQL' }, { name: 'Python' }],
    demo: null,
  },
  {
    id: 'planetgame',
    title: 'PlanetGame',
    imageUrl: planetgameImg,
    short: locale.value === 'en' ? 'E-commerce / CodeIgniter + Vue.js' : 'E-commerce / CodeIgniter + Vue.js',
    description: locale.value === 'en'
      ? 'E-commerce platform for centralising and managing products, users and orders. Participated in frontend and backend development as well as REST API creation.'
      : "Plateforme e-commerce permettant la centralisation et la gestion des produits, des utilisateurs et des commandes. Participation au développement frontend et backend ainsi qu'à la création et à l'utilisation d'API REST.",
    details: locale.value === 'en' ? [
      'Product catalog management',
      'User and order management',
      'REST API creation and consumption',
      'Frontend with Vue.js and backend with CodeIgniter',
    ] : [
      'Gestion du catalogue produits',
      'Gestion des utilisateurs et des commandes',
      "Création et consommation d'API REST",
      'Frontend Vue.js et backend CodeIgniter',
    ],
    techs: [{ name: 'CodeIgniter 4' }, { name: 'Vue.js' }, { name: 'MySQL' }, { name: 'API REST' }],
    demo: null,
  },
  {
    id: 'accessbible',
    title: 'AccessBible',
    imageUrl: accessbibleImg,
    short: locale.value === 'en' ? 'Mobile · React Native' : 'Mobile · React Native',
    description: locale.value === 'en'
      ? 'Mobile application for reading the Bible with an adaptive interface designed to improve reading comfort and navigation across different uses.'
      : 'Application mobile permettant la lecture de la Bible avec une interface adaptative pensée pour améliorer le confort de lecture et la navigation.',
    details: locale.value === 'en' ? [
      'Developed with React Native',
      'Adaptive reading interface',
      'Navigation designed for different use cases',
    ] : [
      'Développé avec React Native',
      'Interface de lecture adaptative',
      'Navigation adaptée aux différents usages',
    ],
    techs: [{ name: 'React Native' }, { name: 'JavaScript' }],
    demo: null,
  },
  {
    id: 'academic',
    title: locale.value === 'en' ? 'Academic & AI Projects' : 'Projets Académiques & IA',
    imageUrl: academicImg,
    short: locale.value === 'en' ? 'Python · ML · Algorithms' : 'Python · ML · Algorithmes',
    description: locale.value === 'en'
      ? 'A set of academic projects and experiments covering algorithms, data processing, Machine Learning, recommendation systems, and university projects such as CV Maker and MusicApp.'
      : "Ensemble de projets académiques et d'expérimentations couvrant les algorithmes, le traitement de données, le Machine Learning, les systèmes de recommandation et des projets universitaires comme CV Maker et MusicApp.",
    details: locale.value === 'en' ? [
      'Algorithms and data structures',
      'Python and Machine Learning',
      'Recommendation systems',
      'Data processing and preparation',
      'University projects: CV Maker, MusicApp',
    ] : [
      'Algorithmes et structures de données',
      'Python et Machine Learning',
      'Systèmes de recommandation',
      'Traitement et préparation de données',
      'Projets universitaires : CV Maker, MusicApp',
    ],
    techs: [{ name: 'Python' }, { name: 'Machine Learning' }, { name: 'ETL' }, { name: 'Vue 3' }, { name: 'jsPDF' }],
    demo: null,
  },
])

const featuredProject = computed(() => computedProjects.value[0])
</script>

<style scoped>
</style>
