<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const services = [
  { name: 'Développement Web', href: '#' },
  { name: 'Applications Mobiles', href: '#' },
  { name: 'UI/UX Design', href: '#' },
  { name: 'Consulting Tech', href: '#' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Hentsrakoto',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/henintsoa-rakotonavalona-366404390/',
    icon: Linkedin,
  },
]
</script>

<template>
  <footer class="bg-[#FDFBF7] dark:bg-[#121212] border-t-[4px] border-primary dark:border-gray-500 pt-12 pb-6 relative overflow-hidden text-primary dark:text-gray-300">
    <div class="container mx-auto px-6">
      
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 border-b-[2px] border-primary dark:border-gray-500 pb-12">
        
        <!-- Brand Section -->
        <div class="md:col-span-5 flex flex-col justify-between">
          <div>
            <h2 class="font-journal text-5xl sm:text-6xl font-black text-primary dark:text-white mb-4 break-words">
              Hents.
            </h2>
            <p class="font-serif text-lg leading-relaxed max-w-sm italic">
              Transformez vos idées en réalité numérique. Je conçois des expériences web immersives et
              performantes, alliant design classique et technologies de pointe.
            </p>
          </div>
          <div class="flex gap-4 mt-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              class="w-10 h-10 border border-primary dark:border-gray-500 flex items-center justify-center text-primary dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-[#121212] transition-colors"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Links Section -->
        <div class="md:col-span-3 lg:col-start-7 lg:col-span-2">
          <h3 class="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-500 dark:text-gray-400">
            Services
          </h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.name">
              <a :href="service.href" class="font-sans font-bold text-sm uppercase text-primary dark:text-gray-300 hover:underline underline-offset-4">
                {{ service.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Colophon / Fine Print -->
        <div class="md:col-span-4 lg:col-span-3">
          <h3 class="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-500 dark:text-gray-400">
            Avis Légal
          </h3>
          <p class="font-serif text-sm leading-relaxed text-gray-700 dark:text-gray-400">
            Ce journal numérique est édité indépendamment. Les informations contenues sur cette page sont fournies à titre indicatif et sont sujettes à modification sans préavis.
          </p>
          <p class="font-serif text-sm leading-relaxed text-gray-700 dark:text-gray-400 mt-4">
            Imprimé numériquement sur le web, distribué via le réseau mondial.
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center text-xs font-sans font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        <p>&copy; {{ currentYear }} Hentsrakoto. Tous droits réservés.</p>
        <p class="mt-2 md:mt-0">The Mind Behind The Code.</p>
      </div>
      
    </div>
  </footer>
</template>
