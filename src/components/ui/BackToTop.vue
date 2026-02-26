<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 left-6 z-50 flex items-center gap-2 px-3 py-3 sm:px-4 border-[2px] border-primary dark:border-white bg-[#FDFBF7] dark:bg-[#121212] text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-[#121212] transition-colors font-sans font-bold uppercase tracking-widest text-[10px]"
      aria-label="Retour en haut"
    >
      <ArrowUp class="w-4 h-4 shrink-0" />
      <span class="hidden sm:inline">Top</span>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)

function onScroll() {
  isVisible.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
