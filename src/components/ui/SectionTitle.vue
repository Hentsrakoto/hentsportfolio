<template>
  <div class="mb-16" :class="[leftAlign ? 'text-left' : 'text-center']">
    <span
      v-if="badge"
      class="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary dark:text-secondary-light font-semibold text-xs sm:text-sm tracking-wider border border-secondary/20 mb-4 uppercase"
    >
      {{ badge }}
    </span>
    <h2
      class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
    >
      <slot name="title">{{ title }}</slot>
    </h2>
    <p
      v-if="subtitle"
      class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
      :class="[leftAlign ? '' : 'mx-auto']"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  badge?: string
  title?: string
  subtitle?: string
  leftAlign?: boolean
}>()
</script>
