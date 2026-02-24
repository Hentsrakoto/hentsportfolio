<template>
  <section id="projet" class="relative py-12 bg-transparent">
    <!-- Header Journal Style -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        {{ $t('sectionTitle.projBadge') }}
      </span>
      <h2 class="font-journal text-5xl sm:text-6xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3">
        {{ $t('sectionTitle.projTitle') }}
      </h2>
      <p class="font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:mx-0 italic">
        {{ $t('sectionTitle.projSubtitle') }}
      </p>
    </div>

    <!-- Editorial Layout for Projects -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t-[2px] border-b-[2px] border-primary dark:border-gray-500 py-6">
      
      <!-- Feature Project (Taking up more space, e.g., first item) -->
      <article class="col-span-1 md:col-span-8 md:border-r-[2px] border-primary dark:border-gray-500 md:pr-8 flex flex-col gap-4">
        <h3 class="font-journal text-5xl font-black text-primary dark:text-white leading-none">
          {{ computedProjects[0].title }}
        </h3>
        <p class="font-sans font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400 border-b border-primary/20 dark:border-gray-700 pb-2">
          {{ computedProjects[0].short }}
        </p>
        
        <figure v-if="computedProjects[0].imageUrl" class="relative border-[2px] border-primary dark:border-gray-500 p-1 bg-white dark:bg-[#1A1A1A]">
          <img
            :src="computedProjects[0].imageUrl"
            :alt="computedProjects[0].title"
            class="w-full h-auto object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mix-blend-multiply dark:mix-blend-normal"
          />
          <figcaption class="text-right text-[10px] uppercase tracking-wider text-gray-400 mt-1 pb-1">{{ $t('portfolio.fig1') }}</figcaption>
        </figure>

        <p class="font-serif text-lg leading-relaxed text-text dark:text-gray-200 mt-2 first-letter:text-6xl first-letter:font-journal first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          {{ computedProjects[0].description }}
        </p>

        <ul class="font-sans text-sm text-gray-700 dark:text-gray-300 space-y-2 mt-4 columns-1 sm:columns-2 gap-6">
          <li v-for="(line, idx) in computedProjects[0].details" :key="idx" class="break-inside-avoid shadow-sm mb-2 p-2 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <span class="font-bold mr-1">❖</span> {{ line }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dashed border-gray-300 dark:border-gray-700">
          <span class="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 pt-1 mr-2">{{ $t('portfolio.tools') }}</span>
          <span
            v-for="tech in computedProjects[0].techs"
            :key="tech.name"
            class="font-sans text-xs font-bold uppercase px-2 py-1 border border-primary dark:border-gray-500 text-primary dark:text-gray-300"
          >
            {{ tech.name }}
          </span>
        </div>
      </article>

      <!-- Side Articles (Rest of the projects) -->
      <aside class="col-span-1 md:col-span-4 flex flex-col gap-10">
        <article
          v-for="(proj, i) in computedProjects.slice(1)"
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

          <div class="flex flex-wrap gap-1 mt-2">
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

const { t, locale } = useI18n()

const computedProjects = computed(() => [
  {
    id: 'editor',
    title: 'Code Editor',
    imageUrl: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Code+Editor',
    short: 'Electron + Express + AI',
    description: locale.value === 'en' 
      ? "Cross-platform editor designed for pair programming, integrating AI assistants for completion, explanation and test generation." 
      : "Éditeur cross‑platform pensé pour le pair programming, intégrant des assistants IA pour la complétion, l'explication et la génération de tests.",
    details: locale.value === 'en' ? [
      'Frontend Electron for native and fast rendering',
      'Express microservice for static indexing',
      'Plugin architecture to extend features'
    ] : [
      'Frontend Electron pour un rendu natif et performant',
      'Micro‑service Express pour l’indexation statique',
      'Architecture de plugins pour étendre les fonctionnalités',
    ],
    techs: [
      { name: 'Electron' },
      { name: 'Express' },
      { name: 'DeepSeek (IA)' },
    ],
  },
  {
    id: 'planetgame',
    title: 'PlanetGame',
    imageUrl: 'https://placehold.co/600x400/1E90FF/FFFFFF?text=PlanetGame',
    short: 'E‑commerce / CodeIgniter + Vue',
    description: locale.value === 'en' 
      ? 'Complete tech marketplace with advanced catalog management, real-time cart and admin back-office.'
      : 'Marketplace tech complète avec gestion avancée du catalogue, panier temps réel et back-office administrateur.',
    details: locale.value === 'en' ? [
      'Transactional stock management',
      'Secure payment integration',
      "Optimization predictive AI",
    ] : [
      'Gestion des stocks transactionnelle',
      'Intégration de paiement sécurisé',
      "IA prédictive d'optimisation",
    ],
    techs: [
      { name: 'CodeIgniter 4' },
      { name: 'Vue 3' },
      { name: 'Tailwind' },
      { name: 'MySQL' },
    ],
  },
  {
    id: 'musicapp',
    title: 'MusicApp',
    imageUrl: 'https://placehold.co/600x400/10B981/FFFFFF?text=MusicApp',
    short: locale.value === 'en' ? 'Audio recognition / Flask' : 'Reconnaissance audio / Flask',
    description: locale.value === 'en' 
      ? "Mobile application capable of listening to the environment to identify a song and add it to a library."
      : "Application mobile capable d'écouter l'environnement pour identifier une chanson et l'ajouter à une bibliothèque.",
    details: locale.value === 'en' ? [
      'Python Flask backend',
      "Spotify API integration",
      'Redis cache system',
    ] : [
      'Backend Python Flask',
      "Intégration de l'API Spotify",
      'Système de cache Redis',
    ],
    techs: [
      { name: 'Python' },
      { name: 'Flask' },
      { name: 'Spotify API' },
    ],
  },
  {
    id: 'cvmaker',
    title: 'CV Maker',
    imageUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=CV+Maker',
    short: t('locale' === 'fr' ? 'fr' : 'en') === 'en' ? 'Online CV Builder' : 'Constructeur de CV en ligne',
    description: t('locale' === 'fr' ? 'fr' : 'en') === 'en' 
      ? 'Resume builder tool with real-time preview and high fidelity PDF export.'
      : 'Outil de création de CV avec prévisualisation en temps réel et export PDF haute fidélité.',
    details: t('locale' === 'fr' ? 'fr' : 'en') === 'en' ? [
      '7 fully customizable templates',
      'Server-side PDF generation',
      'Automatic draft saving',
    ] : [
      '7 templates entièrement personnalisables',
      'Génération PDF côté serveur',
      'Sauvegarde automatique des brouillons',
    ],
    techs: [
      { name: 'Vue 3' },
      { name: 'Tailwind CSS' },
      { name: 'jsPDF' },
    ],
  },
])
</script>

<style scoped>
</style>
