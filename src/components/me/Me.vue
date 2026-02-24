<template>
  <section id="moi" class="relative py-8 bg-transparent">
    <!-- Section Header (Newspaper Editorial Style) -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        {{ $t('sectionTitle.aboutBadge') }}
      </span>
      <h2 class="font-journal text-5xl sm:text-6xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3">
        {{ $t('sectionTitle.aboutTitle') }}
      </h2>
      <p class="font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:mx-0 italic">
        {{ $t('sectionTitle.aboutSubtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-12 gap-10 items-start">
      
      <!-- Biography & Traits Column -->
      <div class="col-span-1 sm:col-span-7 flex flex-col gap-6">
        <p class="font-sans text-base lg:text-lg text-text dark:text-gray-300 leading-relaxed">
          {{ $t('me.intro') }}
        </p>

        <!-- Traits (Journal List Style) -->
        <ul class="border-t border-b border-primary/20 dark:border-gray-700 py-4 space-y-4">
          <li class="flex items-start gap-4">
            <span class="font-journal text-2xl font-bold text-primary dark:text-white mt-1">I.</span>
            <div>
              <h4 class="font-sans font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-1">
                {{ $t('me.devTitle') }}
              </h4>
              <p class="font-sans text-sm text-gray-600 dark:text-gray-400">
                {{ $t('me.devDesc') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-4 border-t border-dashed border-gray-300 dark:border-gray-700 pt-4">
            <span class="font-journal text-2xl font-bold text-primary dark:text-white mt-1">II.</span>
            <div>
              <h4 class="font-sans font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-1">
                {{ $t('me.curiousTitle') }}
              </h4>
              <p class="font-sans text-sm text-gray-600 dark:text-gray-400">
                {{ $t('me.curiousDesc') }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-4 border-t border-dashed border-gray-300 dark:border-gray-700 pt-4">
            <span class="font-journal text-2xl font-bold text-primary dark:text-white mt-1">III.</span>
            <div>
              <h4 class="font-sans font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-1">
                {{ $t('me.excellenceTitle') }}
              </h4>
              <p class="font-sans text-sm text-gray-600 dark:text-gray-400">
                {{ $t('me.excellenceDesc') }}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Education Timeline Column (Sidebar Style) -->
      <div class="col-span-1 sm:col-span-5 bg-gray-50 dark:bg-[#1A1A1A] border-[2px] border-primary dark:border-gray-600 p-6 relative">
        <h3 class="font-journal text-2xl font-bold text-primary dark:text-white uppercase border-b border-primary dark:border-gray-600 pb-2 mb-6 text-center">
          {{ $t('me.journeyTitle') }}
        </h3>
        
        <div class="relative pl-6 border-l-[2px] border-primary/30 dark:border-gray-600 space-y-10">
          
          <!-- 2025 -->
          <div class="relative">
            <div class="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary border-[3px] border-white dark:border-[#1A1A1A]"></div>
            <span class="font-sans text-xs font-bold text-secondary dark:text-gray-400 tracking-widest uppercase mb-1 block">
              2025
            </span>
            <h4 class="font-serif text-lg font-bold text-primary dark:text-white leading-tight mb-1">
              {{ $t('me.l3') }}
            </h4>
            <p class="font-sans text-xs uppercase text-gray-500 mb-2 font-bold tracking-wider">
              ESMIA
            </p>
            <p class="font-sans text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ $t('me.l3Desc') }}
            </p>
          </div>

          <!-- 2024 -->
          <div class="relative">
            <div class="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 border-[3px] border-white dark:border-[#1A1A1A]"></div>
            <span class="font-sans text-xs font-bold text-gray-400 tracking-widest uppercase mb-1 block">
              2024
            </span>
            <h4 class="font-serif text-lg font-bold text-gray-800 dark:text-gray-300 leading-tight mb-1">
              {{ $t('me.l2') }}
            </h4>
            <p class="font-sans text-xs uppercase text-gray-500 mb-2 font-bold tracking-wider">
              ESMIA
            </p>
            <p class="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('me.l2Desc') }}
            </p>
          </div>

          <!-- 2023 -->
          <div class="relative">
            <div class="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 border-[3px] border-white dark:border-[#1A1A1A]"></div>
            <span class="font-sans text-xs font-bold text-gray-400 tracking-widest uppercase mb-1 block">
              2023
            </span>
            <h4 class="font-serif text-lg font-bold text-gray-800 dark:text-gray-300 leading-tight mb-1">
              {{ $t('me.l1') }}
            </h4>
            <p class="font-sans text-xs uppercase text-gray-500 mb-2 font-bold tracking-wider">
              ESMIA
            </p>
            <p class="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('me.l1Desc') }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
