<template>
  <section
    id="moi"
    class="flex flex-col justify-center items-center px-6 py-32 min-h-screen bg-background dark:bg-background-dark transition-colors duration-700"
  >
    <div
      class="max-w-7xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
    >
      <!-- Titre principal -->
      <h2
        class="text-3xl md:text-4xl font-bold mb-4 text-text dark:text-text-dark flex items-center gap-2 animate-fadeIn"
      >
        <User class="w-7 h-7 text-primary" />
        Qui suis-je ?
      </h2>

      <!-- Description personnelle -->
      <p class="text-text-light dark:text-gray-300 leading-relaxed mb-6 animate-fadeIn delay-200">
        Je suis <span class="font-semibold text-primary">Henintsoa Ny Aina</span>, un développeur
        frontend passionné par la création d’expériences web modernes, fluides et élégantes. J’allie
        design, performance et interactivité pour concevoir des interfaces intuitives et
        engageantes.
      </p>

      <!-- Compétences principales -->
      <ul class="space-y-3 text-text-light dark:text-gray-300 animate-slideUp delay-300 mb-10">
        <li class="flex items-start gap-3">
          <Code2 class="w-5 h-5 text-secondary shrink-0 mt-1" />
          <span>
            Développement avec <span class="font-medium">Vue.js</span>,
            <span class="font-medium">Tailwind CSS</span> et <span class="font-medium">PHP</span>
          </span>
        </li>
        <li class="flex items-start gap-3">
          <Lightbulb class="w-5 h-5 text-yellow-400 dark:text-yellow-300 shrink-0 mt-1" />
          <span>Curieux, toujours prêt à apprendre et à innover</span>
        </li>
        <li class="flex items-start gap-3">
          <Rocket class="w-5 h-5 text-primary-dark shrink-0 mt-1" />
          <span>Objectif : devenir expert frontend et contribuer à des projets ambitieux</span>
        </li>
      </ul>

      <!-- 🌱 Partie académique -->
      <div class="animate-fadeIn delay-500">
        <h3
          class="text-2xl font-semibold text-text dark:text-text-dark flex items-center gap-2 mb-4"
        >
          <GraduationCap class="w-6 h-6 text-primary" />
          Parcours académique
        </h3>

        <div
          class="space-y-4 border-l-4 border-primary/40 pl-4 ml-2 text-text-light dark:text-gray-300"
        >
          <div>
            <h4 class="font-semibold text-primary">Licence 3 en Informatique</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <span class="italic"
                >École Supérieure de Management et d’Informatique Appliquée (ESMIA)</span
              >
              — 2025
            </p>
            <p class="mt-1">
              Cours suivis : Initiation à l'ia et géstion d'entreprise, gestion de projet
              informatique.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-primary">Licence 2 en Informatique</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <span class="italic"
                >École Supérieure de Management et d’Informatique Appliquée (ESMIA)</span
              >
              — 2024
            </p>
            <p class="mt-1">
              Cours suivis : Développement web, algorithmique, base de données, systèmes
              d’exploitation.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-primary">Licence 1 en Informatique</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <span class="italic"
                >École Supérieure de Management et d’Informatique Appliquée (ESMIA)</span
              >
              — 2023
            </p>
            <p class="mt-1">
              Introduction au développement logiciel, initiation à la programmation Python et au
              développement web.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { User, Code2, Lightbulb, Rocket, GraduationCap } from 'lucide-vue-next'
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slideUp {
  animation: slideUp 1s ease-out forwards;
}
</style>
