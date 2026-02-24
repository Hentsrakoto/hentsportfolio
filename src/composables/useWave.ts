// src/composables/useWave.ts
import { ref, computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

/**
 * useWave
 * - fournis des couleurs pour le gradient de la vague
 * - génère un id unique pour lier le gradient dans le SVG
 */
export function useWave(initial?: { primary?: string; secondary?: string }) {
  const { isDark } = useDarkMode()

  const defaultLight = {
    primary: initial?.primary ?? '#E5E7EB', // gray-200
    secondary: initial?.secondary ?? '#D1D5DB', // gray-300
  }

  const defaultDark = {
    primary: initial?.primary ?? '#1F2937', // gray-800
    secondary: initial?.secondary ?? '#111827', // gray-900
  }

  const primary = ref<string>(isDark.value ? defaultDark.primary : defaultLight.primary)
  const secondary = ref<string>(isDark.value ? defaultDark.secondary : defaultLight.secondary)

  // si le mode change, on met à jour automatiquement
  // Note: useDarkMode watchEffect already toggles class; ici on reactively update colors
  const updateForMode = (dark: boolean) => {
    primary.value = dark ? defaultDark.primary : defaultLight.primary
    secondary.value = dark ? defaultDark.secondary : defaultLight.secondary
  }

  // expose un id unique pour éviter collisions si plusieurs waves
  const uid = Math.random().toString(36).slice(2, 9)
  const gradientId = computed(() => `wave-gradient-${uid}`)

  // méthode publique pour forcer la couleur
  const setColors = (p: string, s: string) => {
    primary.value = p
    secondary.value = s
  }

  return {
    primary,
    secondary,
    gradientId,
    uid,
    setColors,
    updateForMode,
  }
}
