<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="absolute whitespace-nowrap font-mono text-emerald-500 dark:text-emerald-400"
      :style="{
        left: item.left + '%',
        top: item.top + '%',
        fontSize: item.size + 'px',
        opacity: item.opacity,
        animation: `code-float ${item.duration}s linear ${item.delay}s infinite`,
      }"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const codeSnippets = [
  'console.log()',
  'import Vue',
  'const data = {}',
  'function()',
  '=>',
  '<div></div>',
  'return null',
  'npm install',
  'background-color',
  '#000',
  'true',
  'false',
  'await fetch()',
  '{ ...props }',
  'v-if',
  'v-for',
  'opacity: 0',
  'z-index: 10',
  '<template>',
  'class=""',
  'git push',
  'style',
  '101010',
  '404',
  '200 OK',
]

interface CodeParticle {
  text: string
  left: number
  top: number
  size: number
  opacity: number
  duration: number
  delay: number
}

const items = ref<CodeParticle[]>([])

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

onMounted(() => {
  // Generate particles
  const particleCount = 25
  for (let i = 0; i < particleCount; i++) {
    items.value.push({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)] || 'code',
      left: random(0, 100),
      top: random(0, 100), // Start at random random heights
      size: random(10, 20),
      opacity: random(0.03, 0.15), // Very subtle opacity
      duration: random(15, 30), // Slow movement
      delay: random(0, 10),
    })
  }
})
</script>

<style>
@keyframes code-float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-50px) rotate(5deg);
  }
  100% {
    transform: translateY(-100px) rotate(-5deg);
    opacity: 0;
  }
}
</style>
