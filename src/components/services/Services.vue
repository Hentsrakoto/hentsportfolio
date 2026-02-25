<template>
  <section id="services" class="relative py-8 bg-transparent">
    <!-- Header Journal Style -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        {{ $t('sectionTitle.servicesBadge') }}
      </span>
      <h2 class="font-journal text-4xl sm:text-5xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3 break-words hyphens-auto break-all sm:break-normal">
        {{ $t('sectionTitle.servicesTitle') }}
      </h2>
      <p class="font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:mx-0 italic">
        {{ $t('sectionTitle.servicesSubtitle') }}
      </p>
    </div>

    <!-- Editorial Layout for Services -->
    <div class="flex flex-col gap-12">
      <article
        v-for="(service, index) in computedServices"
        :key="index"
        class="flex flex-col gap-3 group relative border-b border-primary/20 dark:border-gray-700 pb-8 last:border-b-0 last:pb-0"
      >
        <div class="flex items-center gap-4 border-b-2 border-primary dark:border-gray-500 pb-2">
          <div class="w-8 h-8 flex items-center justify-center shrink-0 text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-gray-300 transition-colors">
            <component :is="service.icon" class="w-6 h-6" stroke-width="2.5" />
          </div>
          <h3 class="font-journal text-2xl font-bold text-primary dark:text-white uppercase tracking-tight">
            {{ service.title }}
          </h3>
        </div>
        
        <p class="font-sans text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          {{ service.description }}
        </p>

        <!-- Small deco line just for newspaper feel -->
        <span class="h-[1px] w-8 bg-primary dark:bg-gray-500 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Monitor, Smartphone, Globe, Layout, Code, Search } from 'lucide-vue-next'

const { t } = useI18n()

const computedServices = computed(() => [
  {
    icon: Monitor,
    title: t('services.webTitle'),
    description: t('services.webDesc'),
  },
  {
    icon: Smartphone,
    title: t('services.responsiveTitle'),
    description: t('services.responsiveDesc'),
  },
  {
    icon: Layout,
    title: t('services.uiTitle'),
    description: t('services.uiDesc'),
  },
  {
    icon: Code,
    title: t('services.integrationTitle'),
    description: t('services.integrationDesc'),
  },
  {
    icon: Globe,
    title: t('services.spaTitle'),
    description: t('services.spaDesc'),
  },
  {
    icon: Search,
    title: t('services.seoTitle'),
    description: t('services.seoDesc'),
  }
])
</script>

<style scoped>
</style>
