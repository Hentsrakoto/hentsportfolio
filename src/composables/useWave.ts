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
    primary: initial?.primary ?? '#10B981', // emerald-500
    secondary: initial?.secondary ?? '#0EA5E9', // sky-500
  }

  const defaultDark = {
    primary: initial?.primary ?? '#059669', // emerald-600
    secondary: initial?.secondary ?? '#0369A1', // blue-700
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
