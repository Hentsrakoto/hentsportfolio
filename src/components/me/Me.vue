<template>
  <section
    id="moi"
    class="flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24 py-24 bg-white dark:bg-gray-900 transition-colors duration-700"
  >
    <div class="max-w-7xl w-full">
      <SectionTitle
        badge="About Me"
        title="Qui suis-je ?"
        subtitle="Développeur passionné, je transforme vos idées en réalité numérique."
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Column: Biography & Skills -->
        <div class="space-y-8">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fadeIn">
            Je suis <span class="font-bold text-primary">Henintsoa Ny Aina</span>, un développeur
            frontend passionné par la création d’expériences web modernes, fluides et élégantes.
            J’allie design, performance et interactivité pour concevoir des interfaces intuitives et
            engageantes.
          </p>

          <ul class="space-y-4 animate-fadeIn delay-100">
            <li
              class="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700 hover:border-secondary/50 transition-colors"
            >
              <div
                class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0"
              >
                <Code2 class="w-5 h-5 text-secondary" />
              </div>
              <span class="text-gray-700 dark:text-gray-200 font-medium">
                Développement <span class="text-secondary font-bold">Vue.js</span> &
                <span class="text-primary font-bold">Tailwind</span>
              </span>
            </li>
            <li
              class="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700 hover:border-yellow-400/50 transition-colors"
            >
              <div
                class="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center shrink-0"
              >
                <Lightbulb class="w-5 h-5 text-yellow-500" />
              </div>
              <span class="text-gray-700 dark:text-gray-200 font-medium">Curieux & Innovant</span>
            </li>
            <li
              class="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700 hover:border-primary/50 transition-colors"
            >
              <div
                class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
              >
                <Rocket class="w-5 h-5 text-primary" />
              </div>
              <span class="text-gray-700 dark:text-gray-200 font-medium">Objectif Excellence</span>
            </li>
          </ul>
        </div>

        <!-- Right Column: Education (Timeline style) -->
        <div
          class="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800 space-y-12 animate-slideIn"
        >
          <div
            class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-gray-900"
          ></div>

          <div>
            <span class="text-sm font-bold text-primary tracking-wider uppercase mb-2 block"
              >2025</span
            >
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Licence 3 en Informatique
            </h4>
            <p class="text-gray-500 dark:text-gray-400 mb-2 italic">ESMIA</p>
            <p class="text-gray-600 dark:text-gray-300">
              Initiation à l'IA, gestion d'entreprise, gestion de projet informatique.
            </p>
          </div>

          <div class="relative">
            <div
              class="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 ring-4 ring-white dark:ring-gray-900"
            ></div>
            <span class="text-sm font-bold text-gray-400 tracking-wider uppercase mb-2 block"
              >2024</span
            >
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Licence 2 en Informatique
            </h4>
            <p class="text-gray-500 dark:text-gray-400 mb-2 italic">ESMIA</p>
            <p class="text-gray-600 dark:text-gray-300">
              Développement web, algorithmique, base de données.
            </p>
          </div>

          <div class="relative">
            <div
              class="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 ring-4 ring-white dark:ring-gray-900"
            ></div>
            <span class="text-sm font-bold text-gray-400 tracking-wider uppercase mb-2 block"
              >2023</span
            >
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Licence 1 en Informatique
            </h4>
            <p class="text-gray-500 dark:text-gray-400 mb-2 italic">ESMIA</p>
            <p class="text-gray-600 dark:text-gray-300">
              Introduction au développement logiciel, Python, Web.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code2, Lightbulb, Rocket } from 'lucide-vue-next'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 0.8s ease-out forwards;
  animation-delay: 0.3s;
}
</style>
