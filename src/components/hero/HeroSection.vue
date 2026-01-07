<template>
  <section
    id="accueil"
    class="relative flex items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24 py-12 bg-slate-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700 overflow-hidden"
  >
    <!-- Background Pattern - Subtle Grid (dark mode only) -->
    <div class="absolute inset-0 opacity-0 dark:opacity-5 transition-opacity duration-700">
      <div
        class="absolute inset-0"
        style="
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        "
      ></div>
    </div>

    <!-- Light Mode Decorative Elements -->
    <div
      class="absolute top-20 -left-20 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none transition-all duration-700"
    ></div>
    <div
      class="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[120px] pointer-events-none transition-all duration-700"
    ></div>

    <!-- Main Content Container -->
    <div
      class="relative w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 z-10"
    >
      <!-- Left Column: Text -->
      <div class="flex-1 text-center lg:text-left space-y-6 animate-fadeIn">
        <div class="space-y-4">
          <!-- Badge -->
          <span
            class="inline-block py-2 px-4 rounded-full bg-secondary/10 text-secondary dark:text-secondary-light font-semibold text-sm tracking-wider border border-secondary/30 backdrop-blur-sm"
          >
            Introducing
          </span>

          <!-- Main Heading -->
          <h1 class="space-y-3">
            <span
              class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hello
            </span>
            <span
              class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Je suis
              <span
                class="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent typing-container inline-block"
              >
                {{ displayedText }}
                <span class="cursor"></span>
              </span>
            </span>
          </h1>

          <!-- Subtitle -->
          <p
            class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed pt-4"
          >
            Je conçois des interfaces modernes et dynamiques alliant design, performance et
            interactivité pour donner vie à vos idées.
          </p>
        </div>

        <!-- CTA Button -->
        <div class="pt-6">
          <button @click="gotocontact()"
            class="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            En savoir plus
          </button>
        </div>
      </div>

      <!-- Right Column: Image with Decorative Circle -->
      <div class="flex-1 flex justify-center items-center relative animate-slideIn">
        <div class="relative w-[320px] sm:w-[400px] lg:w-[450px] xl:w-[500px] aspect-square">
          <!-- Large Decorative Circle Background -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/60 dark:from-secondary/80 dark:via-secondary/60 dark:to-primary/50 animate-pulse-slow"
            style="filter: blur(2px); transform: scale(0.85)"
          ></div>

          <!-- Main Circle Container -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-secondary via-secondary/90 to-primary dark:from-secondary/90 dark:via-secondary/80 dark:to-primary/70 flex items-end justify-center overflow-hidden shadow-2xl shadow-secondary/30 dark:shadow-secondary/20"
          >
            <!-- The Person Image -->
            <img
              src="@/assets/Hents.png"
              alt="Photo de Henintsoa"
              class="relative h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          <!-- Floating Tech Badges with Real Icons -->
          <!-- Vue.js Badge - Top Left -->
          <div
            class="tech-badge absolute -top-4 -left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700/50 animate-float"
            style="animation-delay: 0s"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue.js"
              class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          <!-- React Badge - Top Right -->
          <div
            class="tech-badge absolute -top-6 -right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700/50 animate-float-delayed"
            style="animation-delay: 0.5s"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          <!-- Node.js Badge - Left -->
          <div
            class="tech-badge absolute top-1/3 -left-8 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700/50 animate-float"
            style="animation-delay: 1s"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          <!-- TypeScript Badge - Right -->
          <div
            class="tech-badge absolute top-1/2 -right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700/50 animate-float-delayed"
            style="animation-delay: 1.5s"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          <!-- Tailwind Badge - Bottom Left -->
          <div
            class="tech-badge absolute -bottom-4 left-8 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700/50 animate-float"
            style="animation-delay: 2s"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
              class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          <!-- CSS Badge - Bottom Right -->
          <div
            class="tech-badge absolute -bottom-6 right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700/50 animate-float-delayed"
            style="animation-delay: 2.5s"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          <!-- Subtle Glow Effect -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 dark:from-secondary/10 dark:to-primary/10 blur-3xl animate-pulse-slow"
            style="transform: scale(1.2)"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Liste des textes à afficher
const texts = ['Henintsoa', 'Développeur Frontend', 'Intégrateur Web', 'Passionné de Design']

function gotocontact() {
    window.location.href = '#contact'
}

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
    transform: translateY(-15px);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
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

.animate-float-delayed {
  animation: float-delayed 5s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
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

/* Tech Badge Hover Effects */
.tech-badge {
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-badge:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
</style>
