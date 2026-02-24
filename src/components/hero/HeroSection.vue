<template>
  <section id="accueil" class="relative bg-transparent group">
    <!-- Article Header -->
    <div class="border-b-[3px] border-primary dark:border-primary-dark pb-4 mb-6">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        Exclusive Feature
      </span>
      <h1 class="font-journal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-4">
        The Mind Behind<br />The Code.
      </h1>
      <p class="font-sans text-xl md:text-2xl text-primary/80 dark:text-gray-300 italic font-medium">
        Rencontre avec 
        <span class="font-journal font-bold italic text-primary dark:text-white typing-container inline-block border-b-2 border-primary dark:border-white">
          {{ displayedText }}
          <span class="cursor"></span>
        </span>
      </p>
    </div>

    <!-- Article Body Container -->
    <div class="flex flex-col md:flex-row gap-8 items-start">
      
      <!-- Lead Paragraph & Content -->
      <div class="flex-1 md:w-2/3 order-2 md:order-1">
        <p class="font-sans text-lg lg:text-xl text-text dark:text-text-dark leading-relaxed mb-6 first-letter:text-7xl first-letter:font-journal first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:-mt-2 first-letter:text-primary dark:first-letter:text-white">
          Je conçois des interfaces modernes et dynamiques alliant design, performance et
          interactivité pour donner vie à vos idées. Ayant une véritable passion pour la création 
          d'expériences web mémorables, chaque ligne de code est une brique vers l'innovation.
        </p>

        <p class="font-sans text-base lg:text-lg text-text dark:text-text-dark leading-relaxed mb-8">
          Basé à Madagascar, mon travail s'inspire de l'architecture classique: des fondations solides, 
          une structure claire, et une esthétique intemporelle. Que ce soit avec Vue.js ou React, 
          l'objectif reste le même: l'excellence.
        </p>

        <!-- CTA Button (Editorial Style) -->
        <button @click="gotocontact()"
          class="font-sans uppercase tracking-widest text-sm font-bold border-2 border-primary dark:border-white text-primary dark:text-white px-8 py-4 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-colors duration-300 flex items-center gap-3"
        >
          <span>En savoir plus</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <!-- Photo Column -->
      <div class="w-full sm:w-2/3 mx-auto md:w-1/3 order-1 md:order-2">
        <figure class="relative border-[4px] border-double border-primary dark:border-gray-500 p-2 bg-white dark:bg-[#1A1A1A] transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <div class="overflow-hidden border border-primary/20 dark:border-gray-700 aspect-[3/4] grayscale-[30%] hover:grayscale-0 transition-all duration-700">
            <img
              src="@/assets/Hents.png"
              alt="Portrait de Henintsoa"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <figcaption class="mt-3 text-xs md:text-sm font-sans italic text-center text-gray-500 dark:text-gray-400 border-t border-primary/20 pt-2">
            Fig 1. Henintsoa dans son élément.
          </figcaption>
        </figure>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const texts = ['Henintsoa', 'le Développeur', 'le Designer']

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

  const typeSpeed = deleting ? 50 : 100

  if (!deleting) {
    displayedText.value = currentText.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === currentText.length) {
      deleting = true
      setTimeout(typeEffect, 2000)
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
.typing-container {
  display: inline-block;
  min-width: 120px;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background-color: currentColor;
  margin-left: 2px;
  animation: blink 0.8s infinite;
  vertical-align: middle;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
