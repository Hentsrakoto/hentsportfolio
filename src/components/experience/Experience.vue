<template>
  <section
    id="experience"
    class="min-h-screen flex flex-col justify-center py-32 bg-background dark:bg-background-dark overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6">
      <h2
        class="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-16 text-text dark:text-text-dark"
      >
        <Briefcase class="w-7 h-7 text-primary" />
        Mes expériences
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="group relative bg-white dark:bg-[#161b22] rounded-2xl p-8 h-[500px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
        >
          <!-- Background Gradient Blob (Subtle) -->
          <div
            class="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
            :style="{
              background: `radial-gradient(circle at 50% 50%, ${exp.color}, transparent 70%)`,
            }"
          ></div>

          <!-- Main Circle Display -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full flex items-center justify-center transition-all duration-700 group-hover:scale-50 group-hover:-translate-y-32 group-hover:opacity-20 shadow-lg"
            :class="exp.circleClass"
          >
            <component :is="exp.icon" class="w-20 h-20 text-white" />
          </div>

          <!-- Visible Content (Bottom) -->
          <div
            class="mt-auto flex justify-between items-end w-full relative z-10 transition-opacity duration-500 group-hover:opacity-0"
          >
            <div class="max-w-[80%]">
              <div
                class="text-xs font-bold tracking-widest uppercase mb-2 text-gray-500 dark:text-gray-400"
              >
                {{ exp.period }}
              </div>
              <h3 class="text-xl font-bold text-text dark:text-white mb-1 leading-tight">
                {{ exp.role }}
              </h3>
              <p class="text-sm text-primary font-medium">
                {{ exp.company }}
              </p>
            </div>

            <!-- Number Indicator -->
            <div class="flex flex-col items-center gap-3">
              <span
                class="text-xs font-bold text-gray-400 rotate-180"
                style="writing-mode: vertical-rl"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <div class="w-[1px] h-10 bg-gray-300 dark:bg-gray-700"></div>
            </div>
          </div>

          <!-- Hover Details (Slide Up) -->
          <div
            class="absolute inset-x-0 bottom-0 h-full p-8 flex flex-col justify-center bg-white/95 dark:bg-[#161b22]/95 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20"
          >
            <div class="mb-6">
              <div class="text-xs font-bold tracking-widest uppercase text-primary mb-1">
                {{ exp.period }}
              </div>
              <h3 class="text-lg font-bold text-text dark:text-white">{{ exp.role }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ exp.company }}</p>
            </div>

            <div class="space-y-4 overflow-y-auto max-h-[260px] pr-2 custom-scrollbar">
              <div>
                <h4
                  class="text-sm font-semibold text-text dark:text-gray-200 mb-2 flex items-center gap-2"
                >
                  <ListChecks class="w-4 h-4 text-secondary" />
                  Réalisations
                </h4>
                <ul class="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                  <li v-for="(task, i) in exp.tasks" :key="i" class="flex items-start gap-2">
                    <span class="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                    <span class="leading-relaxed">{{ task }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-sm font-semibold text-text dark:text-gray-200 mb-2">
                  Technologies
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in exp.techs"
                    :key="tech"
                    class="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Briefcase, Laptop, GraduationCap, Code2, ListChecks, Globe } from 'lucide-vue-next'

const experiences = [
  {
    period: '2023 - 2024',
    role: 'Stagiaire Développeur Frontend',
    company: 'Les Hérons Vontovorona',
    color: '#1E90FF', // Primary Blue
    circleClass: 'bg-primary shadow-primary/30',
    icon: Laptop,
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
    color: '#00C896', // Secondary Green
    circleClass: 'bg-secondary shadow-secondary/30',
    icon: GraduationCap,
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
    company: 'PlanetGame Madagascar (Freelance)',
    color: '#8B5CF6', // Purple for variety
    circleClass: 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/30',
    icon: Globe,
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
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 20px;
}
</style>
