<template>
  <div class="fixed top-0 left-0 w-full z-[100] pointer-events-none" aria-hidden="true">
    <div
      class="h-[3px] bg-primary dark:bg-white transition-none origin-left"
      :style="{ width: progress + '%' }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
}

onMounted(() => window.addEventListener('scroll', updateProgress, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', updateProgress))
</script>
