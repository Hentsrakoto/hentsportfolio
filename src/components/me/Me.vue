<template>
  <div class="relative mt-10 border-t-[3px] border-primary/30 dark:border-gray-600 pt-8">
    <div class="flex flex-col gap-10 items-start">
      
      <!-- Biography & Traits Column -->
      <div class="flex flex-col gap-6 w-full">
        <h3 class="font-journal text-3xl sm:text-4xl font-bold text-primary dark:text-white">
          {{ $t('me.approachTitle') }}
        </h3>
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
      <div class="w-full bg-gray-50 dark:bg-[#1A1A1A] border-[2px] border-primary dark:border-gray-600 p-6 relative">
        <h3 class="font-journal text-2xl font-bold text-primary dark:text-white uppercase border-b border-primary dark:border-gray-600 pb-2 mb-6 text-center">
          {{ $t('me.journeyTitle') }}
        </h3>
        
        <div class="relative pl-6 border-l-[2px] border-primary/30 dark:border-gray-600 space-y-10">
          
          <!-- Master 1 - En cours -->
          <div class="relative">
            <div class="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary border-[3px] border-white dark:border-[#1A1A1A]"></div>
            <span class="font-sans text-xs font-bold text-secondary dark:text-gray-400 tracking-widest uppercase mb-1 block">
              {{ $t('me.statutEnCours') }}
            </span>
            <h4 class="font-serif text-lg font-bold text-primary dark:text-white leading-tight mb-1">
              {{ $t('me.l3') }}
            </h4>
            <p class="font-sans text-xs uppercase text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-wider">
              {{ $t('me.ecole') }}
            </p>
            <p class="font-sans text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ $t('me.l3Desc') }}
            </p>
          </div>

          <!-- Licence - 2023-2026 -->
          <div class="relative">
            <div class="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 border-[3px] border-white dark:border-[#1A1A1A]"></div>
            <span class="font-sans text-xs font-bold text-gray-600 dark:text-gray-400 tracking-widest uppercase mb-1 block">
              {{ $t('me.periodeLicence') }}
            </span>
            <h4 class="font-serif text-lg font-bold text-gray-800 dark:text-gray-300 leading-tight mb-1">
              {{ $t('me.l2') }}
            </h4>
            <p class="font-sans text-xs uppercase text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-wider">
              {{ $t('me.ecole') }}
            </p>
            <p class="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t('me.l2Desc') }}
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
