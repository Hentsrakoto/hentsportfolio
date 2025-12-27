<template>
  <section
    id="accueil"
    class="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 sm:px-12 lg:px-24 py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700 overflow-hidden"
  >
    <!-- Background Decor: Large Faded Text (Optional based on style, sticking to shapes for now) -->
    <div
      class="absolute top-1/4 left-10 text-9xl font-black text-gray-200 dark:text-gray-800 opacity-10 select-none pointer-events-none hidden lg:block rotate-90 origin-left"
    >
      PORTFOLIO
    </div>

    <!-- Vague décorative -->
    <Wave
      :angle="180"
      :height="300"
      :bgOpacity="0.15"
      wrapperClass="pointer-events-none absolute bottom-0 left-0 w-full z-0 opacity-40 dark:opacity-20"
    />

    <!-- Main Content Container -->
    <div
      class="relative w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10"
    >
      <!-- Left Column: Text -->
      <div class="flex-1 text-center md:text-left space-y-6 md:space-y-8 animate-fadeIn">
        <div>
          <span
            class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wider mb-4 border border-primary/20"
          >
            Bienvenue sur mon portfolio
          </span>
          <h1
            class="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            <span
              class="block text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-2"
              >Je suis</span
            >
            <span
              class="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent typing-container"
            >
              {{ displayedText }}
              <span class="cursor"></span>
            </span>
          </h1>
          <span
            class="block mt-2 text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300"
          >
            & Créateur d’expériences web
          </span>
        </div>

        <p
          class="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          Je conçois des interfaces modernes et dynamiques alliant design, performance et
          interactivité pour donner vie à vos idées.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-5 pt-4"
        >
          <button
            class="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Voir mes projets
          </button>

          <button
            class="group px-8 py-3.5 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300"
          >
            Me contacter
          </button>

          <!-- Social Icons Placeholder (can be expanded) -->
          <div class="flex items-center gap-4 sm:ml-4 text-gray-400">
            <!-- Add icons here if needed, keeping it clean for now -->
          </div>
        </div>
      </div>

      <!-- Right Column: Image with Frame Style -->
      <div class="flex-1 flex justify-center md:justify-end relative animate-slideIn">
        <div
          class="relative w-72 sm:w-80 md:w-96 lg:w-[28rem] aspect-[4/5] flex items-end justify-center"
        >
          <!-- Geometric Decor Elements -->
          <div
            class="absolute top-10 -right-8 w-16 h-16 border-4 border-secondary rounded-full opacity-60 animate-bounce-slow hidden sm:block"
          ></div>
          <div
            class="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
          ></div>
          <div
            class="absolute top-1/2 -left-12 w-0 h-0 border-l-[15px] border-l-transparent border-t-[25px] border-t-emerald-500 border-r-[15px] border-r-transparent transform -rotate-45 opacity-80 animate-float"
          ></div>

          <!-- The Frame Border (Behind) -->
          <div
            class="absolute inset-0 border-2 border-gray-300 dark:border-gray-600 rounded-3xl transform rotate-6 translate-x-4 translate-y-4 z-0 transition-transform group-hover:rotate-3"
          ></div>

          <!-- Solid Background Block (Behind Image) -->
          <div
            class="absolute inset-4 bg-gray-200 dark:bg-gray-800/50 rounded-2xl -z-10 backdrop-blur-sm"
          ></div>

          <!-- The Person Image -->
          <img
            src="@/assets/Hents.png"
            alt="Photo de Henintsoa"
            class="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />

          <!-- Floating Badge Example (like '500+ Clients' in ref) -->
          <div
            class="absolute top-1/3 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float border border-gray-100 dark:border-gray-700 z-20"
          >
            <div
              class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold"
            >
              ⚡
            </div>
            <div>
              <span class="block text-xs text-gray-500 dark:text-gray-400">Expérience</span>
              <span class="block text-sm font-bold text-gray-900 dark:text-white">Web Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Wave from '@/components/hero/Wave.vue'

// Liste des textes à afficher
const texts = ['Henintsoa', 'Développeur Frontend', 'Intégrateur Web', 'Passionné de Design']

const displayedText = ref('')
let currentIndex = 0
let charIndex = 0
let deleting = false

function typeEffect() {
  const currentText = texts[currentIndex]
  if (!currentText) return

  // Vitesse de frappe
  const typeSpeed = deleting ? 50 : 100

  if (!deleting) {
    displayedText.value = currentText.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === currentText.length) {
      deleting = true
      setTimeout(typeEffect, 2000) // Pause à la fin du mot
      return
    }
  } else {
    displayedText.value = currentText.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      deleting = false
      currentIndex = (currentIndex + 1) % texts.length
    }
  }

  setTimeout(typeEffect, typeSpeed)
}

onMounted(() => {
  typeEffect()
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}
.animate-slideIn {
  animation: slideIn 1s ease-out;
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
.animate-bounce-slow {
  animation: bounce-slow 6s ease-in-out infinite;
}

.typing-container {
  display: inline-block;
}

.cursor {
  display: inline-block;
  width: 3px;
  height: 1.1em;
  background-color: currentColor;
  margin-left: 4px;
  animation: blink 0.8s infinite;
  vertical-align: middle;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
