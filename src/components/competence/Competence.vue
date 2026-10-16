<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { groupesCompetences } from '@/data/competences'

const { t } = useI18n()

const groupeDev = groupesCompetences.find((g) => g.id === 'dev')
const groupeOutils = groupesCompetences.find((g) => g.id === 'outils')
</script>

<template>
  <section id="competence" class="relative py-12 bg-transparent">
    <!-- Header Journal Style (i18n) -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        {{ t('sectionTitle.skillsBadge') }}
      </span>
      <h2 class="font-journal text-4xl sm:text-5xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none break-words hyphens-none text-balance">
        {{ t('sectionTitle.skillsTitle') }}.
      </h2>
      <p class="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-400 italic mt-2">
        {{ t('sectionTitle.skillsSubtitle') }}
      </p>
    </div>

    <div class="flex flex-col gap-10">
      <!-- Colonne Développement -->
      <div class="flex-1 border-[2px] border-primary dark:border-gray-600 p-6 relative">
        <header class="border-b-2 border-primary dark:border-gray-600 pb-4 mb-8">
          <h3 class="font-journal text-3xl md:text-4xl font-bold text-primary dark:text-white uppercase tracking-tight">
            {{ groupeDev?.titre }}
          </h3>
          <p class="font-sans text-sm md:text-base italic text-gray-600 dark:text-gray-400 mt-2">
            {{ groupeDev?.soustitre }}
          </p>
        </header>

        <div class="flex flex-wrap justify-center gap-x-4 gap-y-8">
          <div v-for="skill in groupeDev?.items" :key="skill.nom" class="flex flex-col items-center group cursor-crosshair w-[88px] sm:w-[96px]">
            <div class="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-3 border-[1.5px] border-black dark:border-white bg-white dark:bg-black grayscale group-hover:grayscale-0 transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] group-hover:translate-y-1 group-hover:translate-x-1 group-hover:shadow-[0px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[0px_0px_0px_rgba(255,255,255,1)]">
              <img
                :src="skill.icone"
                :alt="skill.nom"
                class="w-full h-full object-contain"
              />
            </div>
            <span class="mt-4 font-sans text-xs font-bold uppercase tracking-wide text-[#111827] dark:text-gray-300 text-center break-words hyphens-none w-full">
              {{ skill.nom }}
            </span>
          </div>
        </div>
      </div>

      <!-- Colonne Méthodes & Environnement -->
      <div class="w-full flex flex-col gap-6">
        <div class="border-[2px] border-dashed border-primary dark:border-gray-600 p-6 flex-1 relative bg-gray-50 dark:bg-[#1A1A1A] w-full">
          <header class="border-b-2 border-primary dark:border-gray-600 pb-4 mb-8 text-center">
            <h3 class="font-journal text-2xl md:text-3xl font-bold text-primary dark:text-white uppercase tracking-tight">
              {{ groupeOutils?.titre }}
            </h3>
            <p class="font-sans text-sm italic text-gray-600 dark:text-gray-400 mt-2">
              {{ groupeOutils?.soustitre }}
            </p>
          </header>

          <div class="flex flex-wrap justify-center gap-x-4 gap-y-8">
            <div v-for="skill in groupeOutils?.items" :key="skill.nom" class="flex flex-col items-center group cursor-crosshair w-[88px] sm:w-[96px]">
              <div class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center p-3 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-black grayscale drop-shadow-sm group-hover:grayscale-0 transition-all duration-300 transform group-hover:-rotate-6 hover:scale-110">
                <img
                  :src="skill.icone"
                  :alt="skill.nom"
                  class="w-full h-full object-contain"
                  :class="{ 'dark:invert': skill.nom === 'GitHub' }"
                />
              </div>
              <span class="mt-4 font-sans text-[10px] md:text-xs font-bold uppercase tracking-wide text-[#111827] dark:text-gray-300 text-center break-words hyphens-none w-full">
                {{ skill.nom }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Petite note de bas de page type journal -->
        <div class="border-t-[3px] border-b-[3px] border-double border-primary dark:border-gray-600 py-3 px-4 text-center bg-transparent">
          <p class="font-sans text-[10px] sm:text-xs uppercase tracking-widest font-bold text-gray-800 dark:text-gray-400">
            * Liste non exhaustive des technologies.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
