<template>
  <section id="testimonials" class="relative py-8 bg-transparent">
    <!-- Header Journal Style -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        Témoignages
      </span>
      <h2 class="font-journal text-5xl sm:text-6xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3">
        Critiques
      </h2>
      <p class="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 italic">
        Retours de ceux avec qui j'ai collaboré.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8">
      <article
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="border-[2px] border-primary dark:border-gray-600 p-6 bg-white dark:bg-[#1A1A1A] relative"
      >
        <!-- Decorative Quote Graphic (Classic Newspaper Style) -->
        <div class="absolute top-2 right-4 font-serif text-6xl text-primary/10 dark:text-gray-500/10 leading-none">
          "
        </div>
        
        <p class="font-serif text-base lg:text-lg text-text dark:text-gray-300 mb-6 leading-relaxed italic relative z-10 w-full overflow-hidden text-ellipsis">
          "{{ testimonial.content }}"
        </p>

        <div class="flex items-center gap-4 border-t border-dashed border-primary/20 dark:border-gray-700 pt-4">
          <div class="w-12 h-12 border border-primary dark:border-gray-500 p-0.5 grayscale brightness-90 shrink-0">
            <img
              :src="`https://ui-avatars.com/api/?name=${testimonial.name}&background=111827&color=fff&font-family=Georgia`"
              :alt="testimonial.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="min-w-0">
            <h4 class="font-journal text-xl font-bold text-primary dark:text-white leading-tight uppercase truncate">{{ testimonial.name }}</h4>
            <p class="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1 truncate">{{ testimonial.role }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Lee Jenny R.',
    role: 'CEO, PlanetGame Madagascar',
    content:
      "Un travail exceptionnel ! Henintsoa a su capter l'essence de notre marque et l'a traduite en une interface web magnifique et fonctionnelle.",
  }
]
</script>
