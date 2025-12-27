<template>
  <div :class="['wave-wrapper', wrapperClass]" :style="wrapperStyle" aria-hidden="true">
    <svg
      :viewBox="`0 0 ${viewWidth} ${viewHeight}`"
      preserveAspectRatio="none"
      class="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ transform: `rotate(${angle}deg) translateY(${translateY}px)` }"
    >
      <defs>
        <linearGradient :id="gradientId" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" :stop-color="primary" stop-opacity="1" />
          <stop offset="100%" :stop-color="secondary" stop-opacity="1" />
        </linearGradient>

        <!-- soft blur filter for glow -->
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="24" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- gradient blurred background shape for glow -->
      <path
        :d="path"
        :fill="`url(#${gradientId})`"
        :opacity="bgOpacity"
        filter="url(#softGlow)"
        class="transition-opacity duration-700"
      />

      <!-- main wave outline on top for crisper edge -->
      <path :d="path" :fill="`url(#${gradientId})`" :opacity="1" class="wave-main" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount, watch } from 'vue'
import { useWave } from '@/composables/useWave'
import { useDarkMode } from '@/composables/useDarkMode'

/**
 * Props
 * - angle : rotation of the wave (tilt) — positive for descending left->right
 * - height : height in px of the viewbox
 * - bgOpacity : faint blurred background opacity
 * - wrapperClass : extra classes for the container
 */
interface Props {
  angle?: number
  height?: number
  bgOpacity?: number
  wrapperClass?: string
}
const props = defineProps<Props>()
const angle = props.angle ?? 12
const viewHeight = props.height ?? 220
const viewWidth = 1200
const bgOpacity = props.bgOpacity ?? 0.22
const wrapperClass = props.wrapperClass ?? ''

const { primary, secondary, gradientId, updateForMode } = useWave()
const { isDark } = useDarkMode()

// A simple responsive-ish path that looks like a descending wave.
// You can tweak control points for shape.
const path = computed(() => {
  // scale with viewWidth/viewHeight
  return `
    M 0 ${viewHeight * 0.15}
    C ${viewWidth * 0.15} ${viewHeight * 0.0},
      ${viewWidth * 0.35} ${viewHeight * 0.35},
      ${viewWidth * 0.6} ${viewHeight * 0.25}
    C ${viewWidth * 0.85} ${viewHeight * 0.15},
      ${viewWidth * 0.95} ${viewHeight * 0.5},
      ${viewWidth} ${viewHeight * 0.4}
    L ${viewWidth} ${viewHeight}
    L 0 ${viewHeight}
    Z
  `
})

const translateY = ref(0)

// small animation: gentle vertical float
let raf = 0
onMounted(() => {
  let t = 0
  const loop = () => {
    t += 0.01
    translateY.value = Math.sin(t) * 6 // amplitude
    raf = requestAnimationFrame(loop)
  }
  loop()
})

// keep colors updated when dark mode toggles
watch(isDark, (d) => updateForMode(d))

onBeforeUnmount(() => cancelAnimationFrame(raf))

const wrapperStyle = computed(() => ({
  height: `${viewHeight}px`,
  overflow: 'visible',
}))
</script>

<style scoped>
.wave-wrapper {
  pointer-events: none;
  position: absolute;
  /* top/left removed to allow override via wrapperClass */
  width: 100%;
  max-width: 100vw; /* <-- empêcher le débordement */
  overflow: hidden; /* <-- cacher les parties hors écran */
}

/* subtle stroke or smoothing for the main path */
.wave-main {
  mix-blend-mode: normal;
  filter: drop-shadow(0 10px 30px rgba(2, 6, 23, 0.12));
  transition:
    transform 0.6s cubic-bezier(0.2, 0.9, 0.2, 1),
    opacity 0.4s;
}

/* responsive tweak */
@media (max-width: 768px) {
  .wave-wrapper {
    display: none;
  }
}
</style>
