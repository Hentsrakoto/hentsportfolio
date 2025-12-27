<template>
  <div
    ref="el"
    class="transition-all duration-1000 ease-out transform will-change-transform"
    :class="[
      isVisible
        ? 'opacity-100 translate-y-0 filter blur-0 scale-100'
        : 'opacity-0 translate-y-20 filter blur-sm scale-95',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      // Trigger when just a bit of the element is visible
      if (entries[0].isIntersecting) {
        isVisible.value = true
        // Stop observing once triggered to keep it visible
        if (el.value) observer?.unobserve(el.value)
      }
    },
    {
      threshold: 0.1, // 10% visible
      rootMargin: '0px 0px -50px 0px', // Offset slightly so it triggers as it enters viewport
    },
  )

  if (el.value) {
    observer.observe(el.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
