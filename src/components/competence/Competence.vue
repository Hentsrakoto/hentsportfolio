<script setup lang="ts">
import {
  Layout,
  Server,
  GitBranch,
  Terminal,
  Palette,
  CheckSquare,
  Globe,
  Layers,
} from 'lucide-vue-next'

const frontendSkills = [
  { name: 'Vue.js', percentage: 80 },
  { name: 'Tailwind CSS', percentage: 85 },
  { name: 'Bootstrap', percentage: 80 },
  { name: 'React', percentage: 60 },
  { name: 'Electron', percentage: 70 },
]

const backendSkills = [
  { name: 'CodeIgniter 4', percentage: 80 },
  { name: 'Laravel', percentage: 70 },
  { name: 'MySQL', percentage: 80 },
  { name: 'Express.js', percentage: 70 },
  { name: 'Python', percentage: 75 },
]

const otherSkills = [
  { name: 'Git', icon: GitBranch },
  { name: 'ClickUp', icon: CheckSquare },
  { name: 'API REST', icon: Globe },
  { name: 'UX / UI', icon: Palette },
  { name: 'CLI', icon: Terminal },
]
</script>

<template>
  <section
    id="competence"
    class="min-h-screen flex flex-col justify-center py-32 bg-gray-50 dark:bg-background-dark transition-colors duration-300"
  >
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-text dark:text-text-dark">
        Compétences
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Frontend Column -->
        <div
          class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center gap-3 mb-8">
            <div class="p-3 bg-primary/10 rounded-lg text-primary">
              <Layout class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold text-text dark:text-text-dark">Frontend</h3>
          </div>

          <div class="space-y-6">
            <div v-for="skill in frontendSkills" :key="skill.name">
              <div class="flex justify-between mb-2">
                <span class="font-medium text-text-light dark:text-gray-300">{{ skill.name }}</span>
                <span class="text-gray-500 dark:text-gray-400">{{ skill.percentage }}%</span>
              </div>
              <div class="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: `${skill.percentage}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Column -->
        <div
          class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center gap-3 mb-8">
            <div class="p-3 bg-secondary/10 rounded-lg text-secondary">
              <Server class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold text-text dark:text-text-dark">Backend & Outils</h3>
          </div>

          <div class="space-y-6">
            <div v-for="skill in backendSkills" :key="skill.name">
              <div class="flex justify-between mb-2">
                <span class="font-medium text-text-light dark:text-gray-300">{{ skill.name }}</span>
                <span class="text-gray-500 dark:text-gray-400">{{ skill.percentage }}%</span>
              </div>
              <div class="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: `${skill.percentage}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Autres compétences -->
      <div class="mt-12">
        <div class="flex items-center gap-3 mb-8">
          <div class="p-2 bg-primary/10 rounded-lg text-primary">
            <Layers class="w-5 h-5" />
          </div>
          <h3 class="text-2xl font-bold text-text dark:text-text-dark">Autres compétences</h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div
            v-for="skill in otherSkills"
            :key="skill.name"
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex items-center gap-4 group"
          >
            <component
              :is="skill.icon"
              class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors"
            />
            <span class="font-medium text-text-light dark:text-gray-200">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
