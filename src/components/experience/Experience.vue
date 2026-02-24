<template>
  <section id="experience" class="relative py-8 bg-transparent">
    <!-- Header Journal Style -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        Expériences
      </span>
      <h2 class="font-journal text-5xl sm:text-6xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3">
        Parcours Pro.
      </h2>
      <p class="font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:mx-0 italic">
        Un aperçu de mon parcours professionnel et académique.
      </p>
    </div>

    <!-- Editorial Layout for Experience -->
    <div class="space-y-12">
      <article
        v-for="(exp, index) in experiences"
        :key="index"
        class="border-b-[2px] border-primary dark:border-gray-600 pb-10"
      >
        <header class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
          <h3 class="font-journal text-4xl sm:text-5xl font-black text-primary dark:text-white leading-none">
            {{ exp.role }}
          </h3>
          <div class="font-sans text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-2 sm:gap-4 mt-2 md:mt-0">
            <span>{{ exp.company }}</span>
            <span class="w-1.5 h-1.5 bg-primary dark:bg-gray-400 rounded-full hidden sm:inline-block"></span>
            <span>{{ exp.period }}</span>
          </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="md:col-span-3">
            <h4 class="font-sans font-bold text-xs uppercase tracking-[0.2em] text-secondary dark:text-gray-300 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2 inline-block">
              Réalisations Clés
            </h4>
            <ul class="space-y-3 font-sans text-text dark:text-gray-300 leading-relaxed text-sm lg:text-base">
              <li v-for="(task, i) in exp.tasks" :key="i" class="flex gap-3 items-start">
                <span class="text-primary dark:text-white font-bold">—</span>
                <span>{{ task }}</span>
              </li>
            </ul>
          </div>
          <div class="md:col-span-1 border-t md:border-t-0 md:border-l border-dashed border-primary/30 dark:border-gray-700 pt-4 md:pt-0 md:pl-6">
            <h4 class="font-sans font-bold text-xs uppercase tracking-[0.2em] text-secondary dark:text-gray-300 mb-4 inline-block md:block border-b border-gray-300 dark:border-gray-700 pb-2">
              Technologies
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in exp.techs"
                :key="tech"
                class="text-xs font-bold font-sans uppercase tracking-wider px-2 py-1 border border-primary dark:border-gray-500 text-primary dark:text-gray-300 bg-gray-50 dark:bg-[#1A1A1A]"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
const experiences = [
  {
    period: '2023 - 2024',
    role: 'Stagiaire Développeur Frontend',
    company: 'Les Hérons Vontovorona',
    tasks: [
      'Participation au développement d’interfaces web dynamiques et responsives',
      'Contribution à la création d’un site vitrine pour présenter les services et activités de l’entreprise',
      'Intégration des maquettes en respectant les principes d’ergonomie et de cohérence visuelle',
      'Application des bonnes pratiques de structuration du code et d’optimisation du front-end',
      'Renforcement des compétences en travail collaboratif et en gestion de projet web',
    ],
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    period: '2024',
    role: 'Projets Académiques & IA',
    company: 'Formation Universitaire',
    tasks: [
      'Initiation à la gestion de projet agile et aux méthodologies de travail en équipe',
      'Découverte et intégration de solutions IA dans des applications web',
      'Réalisation du projet "CV Maker" : Générateur de CV avec prévisualisation temps réel',
      'Réalisation du projet "MusicApp" : Application de reconnaissance musicale',
    ],
    techs: ['Gestion de projet', 'IA', 'Vue.js', 'Python'],
  },
  {
    period: 'Sept 2024 - Aujourd’hui',
    role: 'Développeur Frontend',
    company: 'PlanetGame Madagascar',
    tasks: [
      'Conception et intégration de l’interface utilisateur avec Vue.js et Tailwind CSS',
      'Création d’un design moderne, responsive et ergonomique adapté à tous les écrans',
      'Mise en place d’un système de navigation fluide et d’une expérience utilisateur optimisée',
      'Collaboration avec l’équipe backend pour l’intégration des données produits et du panier d’achat',
      'Contribution à la structuration du code en composants Vue réutilisables',
      'Participation à la revue du design et à la cohérence visuelle sur l’ensemble du site',
    ],
    techs: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
  },
]
</script>

<style scoped>
</style>
