<template>
  <section
    id="projet"
    class="min-h-screen flex flex-col justify-center py-32 bg-background dark:bg-background-dark transition-colors duration-700"
  >
    <div class="max-w-7xl mx-auto px-6">
      <h2
        class="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-12 text-text dark:text-text-dark"
      >
        <Laptop class="w-7 h-7 text-primary" />
        Mes projets
      </h2>

      <!-- Timeline wrapper -->
      <div class="relative">
        <!-- center vertical line (visible md+) -->
        <div class="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-1">
          <div
            class="h-full w-full rounded-full"
            style="background: linear-gradient(180deg, rgba(30, 144, 255, 0.15), transparent 30%)"
          ></div>
        </div>

        <div class="space-y-16">
          <!-- Project item (repeatable) -->
          <div
            v-for="(proj, i) in projects"
            :key="proj.id"
            class="md:grid md:grid-cols-2 md:items-start"
          >
            <!-- Left column (card on left when i is even) -->
            <div
              :class="[
                'md:pr-8 md:col-start-1 md:col-end-2',
                i % 2 === 0 ? 'md:flex md:justify-end md:text-left' : 'md:block md:text-left',
              ]"
              class="hidden"
            >
              <article
                v-if="i % 2 === 0"
                class="project-card relative overflow-hidden"
                :style="{ animationDelay: `${i * 80}ms` }"
                role="article"
                :aria-label="`Projet ${proj.title}`"
              >
                <div class="card-accent" aria-hidden="true"></div>
                <div
                  v-if="proj.imageUrl"
                  class="w-full h-48 overflow-hidden border-b border-gray-100 dark:border-gray-800/50"
                >
                  <img
                    :src="proj.imageUrl"
                    :alt="proj.title"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div class="card-inner">
                  <div class="mb-2">
                    <h3 class="text-2xl font-bold text-primary">{{ proj.title }}</h3>
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{{
                      proj.short
                    }}</span>
                  </div>
                  <p class="mb-3 text-text-light dark:text-gray-300 leading-relaxed">
                    {{ proj.description }}
                  </p>

                  <ul class="mb-5 text-sm space-y-2">
                    <li
                      v-for="(line, idx) in proj.details"
                      :key="idx"
                      class="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span class="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{{ line }}</span>
                    </li>
                  </ul>

                  <div class="flex flex-wrap gap-2 items-center">
                    <span
                      v-for="tech in proj.techs"
                      :key="tech.name"
                      class="tech-badge flex items-center"
                      :title="tech.name"
                    >
                      <img
                        v-if="tech.iconUrl"
                        :src="tech.iconUrl"
                        :alt="tech.name"
                        class="w-4 h-4 object-contain"
                      />
                      <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.2" />
                      </svg>
                      <span class="ml-2 text-xs font-medium">{{ tech.name }}</span>
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <!-- Center number bubble (always visible) -->
            <div
              class="hidden md:flex col-span-2 md:col-start-1 md:col-end-3 justify-center relative"
            >
              <div
                class="z-10 flex items-center justify-center w-14 h-14 rounded-full shadow-xl -translate-y-6 transition-transform duration-300 hover:scale-110 border-4 border-white dark:border-[#0D1117] bg-gradient-to-br from-primary to-primary-dark text-white"
                style="box-shadow: 0 0 20px rgba(30, 144, 255, 0.4)"
                aria-hidden="false"
              >
                <span class="text-xl font-bold">{{ i + 1 }}</span>
              </div>

              <!-- small connector dot on the center line -->
              <div
                class="hidden md:block absolute left-1/2 -translate-x-1/2 top-20 h-0.5 w-6 bg-primary rounded-full opacity-40"
              ></div>
            </div>

            <!-- Right column (card on right when i is odd) -->
            <div
              :class="[
                'md:pl-8 md:col-start-2 md:col-end-3',
                i % 2 === 1 ? 'md:flex md:justify-start md:text-left' : 'md:block md:text-right',
              ]"
              class="hidden"
            >
              <article
                v-if="i % 2 === 1"
                class="project-card relative overflow-hidden"
                :style="{ animationDelay: `${i * 80}ms` }"
                role="article"
                :aria-label="`Projet ${proj.title}`"
              >
                <div class="card-accent" aria-hidden="true"></div>
                <div
                  v-if="proj.imageUrl"
                  class="w-full h-48 overflow-hidden border-b border-gray-100 dark:border-gray-800/50"
                >
                  <img
                    :src="proj.imageUrl"
                    :alt="proj.title"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div class="card-inner">
                  <div class="mb-2">
                    <h3 class="text-2xl font-bold text-primary">{{ proj.title }}</h3>
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{{
                      proj.short
                    }}</span>
                  </div>
                  <p class="mb-3 text-text-light dark:text-gray-300 leading-relaxed">
                    {{ proj.description }}
                  </p>

                  <ul class="mb-5 text-sm space-y-2">
                    <li
                      v-for="(line, idx) in proj.details"
                      :key="idx"
                      class="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span class="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{{ line }}</span>
                    </li>
                  </ul>

                  <div class="flex flex-wrap gap-2 items-center">
                    <span
                      v-for="tech in proj.techs"
                      :key="tech.name"
                      class="tech-badge flex items-center"
                      :title="tech.name"
                    >
                      <img
                        v-if="tech.iconUrl"
                        :src="tech.iconUrl"
                        :alt="tech.name"
                        class="w-4 h-4 object-contain"
                      />
                      <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.2" />
                      </svg>
                      <span class="ml-2 text-xs font-medium">{{ tech.name }}</span>
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <!-- Mobile stacked card (visible on small screens) -->
            <div class="md:hidden">
              <article class="project-card" :style="{ animationDelay: `${i * 80}ms` }">
                <div
                  v-if="proj.imageUrl"
                  class="w-full h-48 overflow-hidden border-b border-gray-100 dark:border-gray-800/50"
                >
                  <img
                    :src="proj.imageUrl"
                    :alt="proj.title"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div class="card-inner">
                  <h3 class="text-xl font-semibold text-primary mb-2">
                    {{ proj.title }} <span class="text-sm text-gray-500">— {{ proj.short }}</span>
                  </h3>
                  <p class="mb-3 text-text-light dark:text-gray-300">{{ proj.description }}</p>

                  <ul class="mb-4 text-sm space-y-1 list-inside">
                    <li v-for="(line, idx) in proj.details" :key="idx">• {{ line }}</li>
                  </ul>

                  <div class="flex flex-wrap gap-2 items-center">
                    <span
                      v-for="tech in proj.techs"
                      :key="tech.name"
                      class="tech-badge flex items-center"
                    >
                      <img
                        v-if="tech.iconUrl"
                        :src="tech.iconUrl"
                        :alt="tech.name"
                        class="w-4 h-4 object-contain"
                      />
                      <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.2" />
                      </svg>
                      <span class="ml-2 text-xs font-medium">{{ tech.name }}</span>
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Laptop } from 'lucide-vue-next'

const projects = [
  {
    id: 'editor',
    title: 'Code Editor',
    imageUrl: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Code+Editor',
    short: 'Electron + Express + AI',
    description:
      "Éditeur cross‑platform pensé pour le pair programming, intégrant des assistants IA pour la complétion, l'explication et la génération de tests.",
    details: [
      'Frontend Electron pour un rendu natif et performant sur desktop',
      'Micro‑service Express pour l’indexation et l’analyse statique de code',
      'Architecture de plugins pour étendre les fonctionnalités (IA, thèmes)',
    ],
    techs: [
      {
        name: 'Electron',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
      },
      {
        name: 'Express',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'DeepSeek (IA)',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      },
    ],
  },
  {
    id: 'planetgame',
    title: 'PlanetGame',
    imageUrl: 'https://placehold.co/600x400/1E90FF/FFFFFF?text=PlanetGame',
    short: 'E‑commerce / CodeIgniter + Vue',
    description:
      'Marketplace tech complète avec gestion avancée du catalogue, panier temps réel et back-office administrateur.',
    details: [
      'Gestion des stocks transactionnelle (verrouillage anti-doublons)',
      'Intégration de Vanilla Pay pour les paiements sécurisés',
      "IA prédictive pour l'optimisation des stocks et des ventes",
    ],
    techs: [
      {
        name: 'CodeIgniter 4',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
      },
      {
        name: 'Vue 3',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Tailwind CSS',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'MySQL',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
    ],
  },
  {
    id: 'musicapp',
    title: 'MusicApp',
    imageUrl: 'https://placehold.co/600x400/10B981/FFFFFF?text=MusicApp',
    short: 'Reconnaissance audio / Flask',
    description:
      "Application mobile capable d'écouter l'environnement pour identifier une chanson et l'ajouter à une bibliothèque.",
    details: [
      'Backend Python Flask pour le traitement du signal audio',
      "Intégration de l'API Spotify pour les métadonnées riches",
      'Système de cache Redis pour optimiser les appels API',
    ],
    techs: [
      {
        name: 'Python',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'Flask',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      },
      { name: 'Spotify API' },
    ],
  },
  {
    id: 'cvmaker',
    title: 'CV Maker',
    imageUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=CV+Maker',
    short: 'Constructeur de CV en ligne',
    description:
      'Outil de création de CV avec prévisualisation en temps réel et export PDF haute fidélité.',
    details: [
      '7 templates entièrement personnalisables',
      'Génération PDF côté serveur pour un rendu pixel-perfect',
      'Sauvegarde automatique des brouillons',
    ],
    techs: [
      {
        name: 'Vue 3',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Tailwind CSS',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'jsPDF',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg',
      },
    ],
  },
]
</script>

<style scoped>
:root {
  --primary: #1e90ff;
  --primary-light: #3aa0ff;
  --primary-dark: #0f5da8;
  --bg: #ffffff;
  --bg-dark: #0d1117;
  --text: #000000;
}

.project-card {
  background: var(--bg);
  border: 1px solid rgba(58, 160, 255, 0.16);
  border-radius: 14px;
  padding: 0;
  box-shadow: 0 10px 30px rgba(30, 144, 255, 0.06);
  color: #222;
  width: min(520px, 46vw);
  opacity: 0;
  transform: translateY(12px);
  animation: slideFade 0.55s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
}

.dark .project-card {
  background: var(--bg-dark);
  border-color: rgba(30, 144, 255, 0.24);
  color: #e6eef9;
}

.card-accent {
  position: absolute;
  inset: 0 -120px auto auto;
  width: 140px;
  height: 140px;
  border-top-left-radius: 120px;
  background: linear-gradient(135deg, rgba(30, 144, 255, 0.06), rgba(0, 200, 150, 0.04));
  pointer-events: none;
}

.card-inner {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 6px 10px;
  border-radius: 9999px;
  font-size: 0.8rem;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.dark .tech-badge {
  background: rgba(30, 144, 255, 0.06);
  border-color: rgba(30, 144, 255, 0.12);
}

.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 18px 40px rgba(30, 144, 255, 0.12);
}

/* number bubble style fallback for non-tailwind usage */
.number-bubble {
  background: var(--primary);
  color: white;
}

/* small animation */
@keyframes slideFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* responsive tweaks */
@media (max-width: 767px) {
  .project-card {
    width: 100%;
  }
  .card-accent {
    display: none;
  }
}
</style>
