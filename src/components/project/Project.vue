<template>
  <section id="projet" class="relative py-12 bg-transparent">
    <!-- Header Journal Style -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        {{ $t('sectionTitle.projBadge') }}
      </span>
      <h2 class="font-journal text-4xl sm:text-5xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3 break-words hyphens-none text-balance">
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
          {{ txt(featuredProject.titre) }}
        </h3>
        <p class="font-sans font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400 border-b border-primary/20 dark:border-gray-700 pb-2">
          {{ txt(featuredProject.categorie) }}
        </p>

        <figure v-if="featuredProject.capture" class="relative border-[2px] border-primary dark:border-gray-500 p-1 bg-white dark:bg-[#1A1A1A]">
          <img
            :src="featuredProject.capture.src"
            :alt="txt(featuredProject.capture.alt)"
            class="w-full h-56 object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mix-blend-multiply dark:mix-blend-normal"
          />
          <figcaption class="text-right text-[10px] uppercase tracking-wider text-gray-400 mt-1 pb-1">{{ $t('portfolio.fig1') }}</figcaption>
        </figure>

        <p class="font-serif text-lg leading-relaxed text-text dark:text-gray-200 mt-2 first-letter:text-6xl first-letter:font-journal first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          {{ txt(featuredProject.description) }}
        </p>

        <p class="font-sans text-sm text-gray-600 dark:text-gray-400 italic">
          {{ txt(featuredProject.role) }}
        </p>

        <ul class="font-sans text-sm text-gray-700 dark:text-gray-300 space-y-2 mt-4 columns-1 sm:columns-2 gap-6">
          <li v-for="(line, idx) in featuredProject.details" :key="idx" class="break-inside-avoid shadow-sm mb-2 p-2 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <span class="font-bold mr-1">❖</span> {{ txt(line) }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dashed border-gray-300 dark:border-gray-700">
          <span class="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 pt-1 mr-2">{{ $t('portfolio.tools') }}</span>
          <span
            v-for="tech in featuredProject.technologies"
            :key="tech"
            class="font-sans text-xs font-bold uppercase px-2 py-1 border border-primary dark:border-gray-500 text-primary dark:text-gray-300"
          >
            {{ tech }}
          </span>
        </div>

        <div class="flex flex-wrap gap-2 mt-2">
          <a
            v-if="featuredProject.lienSite"
            :href="featuredProject.lienSite"
            target="_blank"
            rel="noopener"
            class="font-sans text-xs font-bold uppercase px-2 py-1 border border-primary dark:border-gray-500 text-primary dark:text-gray-300 inline-flex items-center gap-1"
          >
            <ExternalLink class="w-3 h-3" /> Démo
          </a>
          <a
            v-if="featuredProject.lienCode"
            :href="featuredProject.lienCode"
            target="_blank"
            rel="noopener"
            class="font-sans text-xs font-bold uppercase px-2 py-1 border border-primary dark:border-gray-500 text-primary dark:text-gray-300 inline-flex items-center gap-1"
          >
            <Github class="w-3 h-3" /> Code
          </a>
          <span
            v-if="!featuredProject.lienSite && !featuredProject.lienCode"
            class="font-sans text-xs font-bold uppercase px-2 py-1 border border-dashed border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400"
          >
            {{ locale === 'en' ? (featuredProject.statut === 'prive' ? 'Private project' : 'Academic project') : (featuredProject.statut === 'prive' ? 'Projet privé' : 'Projet académique') }}
          </span>
        </div>

      </article>

      <!-- Side Articles -->
      <aside class="col-span-1 md:col-span-4 flex flex-col gap-10">
        <article
          v-for="proj in vignettes"
          :key="proj.id"
          class="flex flex-col gap-3 pb-8 border-b border-primary/20 dark:border-gray-700 last:border-0 last:pb-0"
        >
          <figure v-if="proj.capture" class="relative border border-primary dark:border-gray-600 p-0.5 mb-2">
            <img
              :src="proj.capture.src"
              :alt="txt(proj.capture.alt)"
              class="w-full h-32 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mix-blend-multiply dark:mix-blend-normal"
            />
          </figure>

          <h3 class="font-journal text-3xl font-bold text-primary dark:text-white leading-tight">
            {{ txt(proj.titre) }}
          </h3>
          <p class="font-sans font-bold uppercase tracking-wider text-[10px] text-gray-500 dark:text-gray-400">
            {{ txt(proj.categorie) }}
          </p>

          <p class="font-serif text-sm leading-relaxed text-gray-800 dark:text-gray-300">
            {{ txt(proj.description) }}
          </p>

          <p class="font-sans text-xs text-gray-600 dark:text-gray-400 italic">
            {{ txt(proj.role) }}
          </p>

          <div class="flex flex-wrap gap-1 mt-1">
            <span
              v-for="tech in proj.technologies"
              :key="tech"
              class="font-sans text-[10px] font-bold uppercase px-1.5 py-0.5 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex flex-wrap gap-1 mt-2">
            <a
              v-if="proj.lienSite"
              :href="proj.lienSite"
              target="_blank"
              rel="noopener"
              class="font-sans text-[10px] font-bold uppercase px-1.5 py-0.5 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 inline-flex items-center gap-1"
            >
              <ExternalLink class="w-3 h-3" /> Démo
            </a>
            <a
              v-if="proj.lienCode"
              :href="proj.lienCode"
              target="_blank"
              rel="noopener"
              class="font-sans text-[10px] font-bold uppercase px-1.5 py-0.5 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 inline-flex items-center gap-1"
            >
              <Github class="w-3 h-3" /> Code
            </a>
            <span
              v-if="!proj.lienSite && !proj.lienCode"
              class="font-sans text-[10px] font-bold uppercase px-1.5 py-0.5 border border-dashed border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400"
            >
              {{ locale === 'en' ? (proj.statut === 'prive' ? 'Private project' : 'Academic project') : (proj.statut === 'prive' ? 'Projet privé' : 'Projet académique') }}
            </span>
          </div>
        </article>
      </aside>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Github, ExternalLink } from 'lucide-vue-next'
import { projets } from '@/data/projets'

const { locale } = useI18n()

const txt = (t: { fr: string; en: string }) => locale.value === 'en' ? t.en : t.fr

const featuredProject = projets[0]
const vignettes = projets.slice(1)
</script>

<style scoped>
</style>
