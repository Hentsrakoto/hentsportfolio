<template>
  <section
    id="testimonials"
    class="py-24 bg-slate-50 dark:bg-black transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
      <SectionTitle
        badge="Testimonials"
        title="Ce que disent mes clients"
        subtitle="Retours d'expériences de personnes avec qui j'ai collaboré."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-gray-800 relative"
        >
          <Quote class="w-10 h-10 text-secondary/20 absolute top-6 right-6" />

          <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed relative z-10">
            "{{ testimonial.content }}"
          </p>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-secondary/10 overflow-hidden">
              <!-- Placeholder for avatar -->
              <img
                :src="`https://ui-avatars.com/api/?name=${testimonial.name}&background=00C896&color=fff`"
                :alt="testimonial.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 class="font-bold text-gray-900 dark:text-white">{{ testimonial.name }}</h4>
              <p class="text-sm text-secondary">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { Quote } from 'lucide-vue-next'

const testimonials = [
  {
    name: 'Jennie R.',
    role: 'CEO, PlanetGame Madagascar',
    content:
      "Un travail exceptionnel ! Henintsoa a su capter l'essence de notre marque et l'a traduite en une interface web magnifique et fonctionnelle.",
  }

]
</script>
