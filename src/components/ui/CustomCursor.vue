<template>
  <div
    class="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-exclusion hidden md:block"
    :style="cursorStyle"
  >
    <!-- Dot -->
    <div
      class="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
      :class="{ 'scale-0': isHovering }"
    ></div>
  </div>

  <div
    class="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-exclusion hidden md:block transition-transform duration-75 ease-out"
    :style="ringStyle"
  >
    <!-- Ring -->
    <div
      class="w-10 h-10 border-[1.5px] border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
      :class="isHovering ? 'scale-[2.5] bg-white/10 border-transparent' : 'scale-100'"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const x = ref(-100)
const y = ref(-100)
const ringX = ref(-100)
const ringY = ref(-100)
const isHovering = ref(false)

const cursorStyle = computed(() => ({
  transform: `translate3d(${x.value}px, ${y.value}px, 0)`,
}))

const ringStyle = computed(() => ({
  transform: `translate3d(${ringX.value}px, ${ringY.value}px, 0)`,
}))

let rafId = 0

const onMouseMove = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
}

// Check if hovering over clickable elements
const onMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (
    target.tagName === 'A' ||
    target.tagName === 'BUTTON' ||
    target.closest('a') ||
    target.closest('button') ||
    target.closest('.cursor-pointer') ||
    window.getComputedStyle(target).cursor === 'pointer'
  ) {
    isHovering.value = true
  }
}

const onMouseOut = () => {
  isHovering.value = false
}

// Smooth lerp for the ring
const loop = () => {
  // Lerp factor (0.15 = speed of delay)
  ringX.value += (x.value - ringX.value) * 0.15
  ringY.value += (y.value - ringY.value) * 0.15

  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseover', onMouseOver)
  document.addEventListener('mouseout', onMouseOut)

  // Set initial position out of view to avoid flash at 0,0
  // or handle initialization logic if needed

  loop()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseover', onMouseOver)
  document.removeEventListener('mouseout', onMouseOut)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
/* Optional: hide default cursor if you strictly want to replace it,
   but usually keeping it + effects is safer for UX.
   If you want to hide it, uncomment below: */
/*
:global(body) {
  cursor: none;
}
:global(a), :global(button) {
  cursor: none;
}
*/
</style>
