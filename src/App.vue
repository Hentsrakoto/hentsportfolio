<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import Hero from '@/components/hero/HeroSection.vue'
import Moi from '@/components/me/Me.vue'
import Project from '@/components/project/Project.vue'
import Experience from '@/components/experience/Experience.vue'
import Competence from '@/components/competence/Competence.vue'
import Contact from '@/components/contact/ContactForm.vue'
import Footer from '@/components/footer/Footer.vue'
import Services from '@/components/services/Services.vue'
import Testimonials from '@/components/testimonials/Testimonials.vue'
import CodeBackground from '@/components/background/CodeBackground.vue'
import CustomCursor from '@/components/ui/CustomCursor.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

// Format current date exactly like a newspaper date (e.g. Lundi 24 Février 2026)
const todayDate = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
</script>

<template>
  <div class="journal-wrapper overflow-x-hidden w-full min-h-screen bg-[#FDFBF7] dark:bg-[#121212] text-[#111827] dark:text-[#F3F4F6] transition-colors duration-300 font-sans">
    <CustomCursor />
    <CodeBackground class="opacity-30 mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

    <div class="w-[96%] sm:w-[94%] max-w-full mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12 border-x border-[#111827]/10 dark:border-[#F3F4F6]/10 shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:shadow-none relative bg-[#FDFBF7] dark:bg-[#121212] flex flex-col min-w-0 overflow-x-hidden">
      
      <!-- Top Newspaper Header -->
      <header class="border-b-[6px] border-double border-primary dark:border-primary/50 pb-6 mb-10 text-center relative z-10 transition-colors duration-300 w-full overflow-hidden">
        <h1 class="font-journal text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-primary dark:text-[#F3F4F6] mx-auto leading-none mb-4 break-words hyphens-auto break-all sm:break-normal">
          The Hentsrakoto
        </h1>
        <h2 class="font-journal text-2xl sm:text-3xl md:text-5xl lg:text-5xl tracking-[0.2em] sm:tracking-[0.3em] uppercase block text-primary dark:text-[#F3F4F6] break-words">
          Journal
        </h2>
        <div class="flex flex-wrap sm:flex-nowrap justify-between gap-y-2 items-center border-y-2 border-primary dark:border-primary/50 mt-6 py-2 px-2 text-[10px] md:text-xs uppercase font-bold tracking-widest text-[#555555] dark:text-[#A3A3A3] font-sans">
          <span class="w-1/2 sm:w-auto text-left sm:text-center">Vol. I — No. 1</span>
          <span class="text-center hidden sm:block">Antananarivo, Madagascar</span>
          <span class="w-full sm:w-auto order-first sm:order-none text-center">{{ todayDate }}</span>
          <span class="w-1/2 sm:w-auto text-right sm:text-center">Développeur Web Edition</span>
        </div>
      </header>

      <Header class="mb-10" />

      <main class="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
        <!-- Main Content Area -->
        <div class="col-span-1 lg:col-span-8 lg:border-r-[3px] border-primary/20 dark:border-primary/20 lg:pr-10 space-y-16">
          <ScrollReveal>
            <Hero />
          </ScrollReveal>
          
          <hr class="border-t border-dashed border-primary/30 dark:border-primary/20" />
          
          <ScrollReveal>
            <Project />
          </ScrollReveal>

          <hr class="border-t border-dashed border-primary/30 dark:border-primary/20" />

          <ScrollReveal>
            <Experience />
          </ScrollReveal>
        </div>

        <!-- Sidebar Area -->
        <aside class="col-span-1 lg:col-span-4 space-y-12">
          <ScrollReveal>
            <Moi />
          </ScrollReveal>
          
          <hr class="border-t-[6px] border-double border-primary/40 dark:border-primary/20" />

          <ScrollReveal>
            <Competence />
          </ScrollReveal>
          
          <hr class="border-t-[6px] border-double border-primary/40 dark:border-primary/20" />

          <ScrollReveal>
            <Services />
          </ScrollReveal>

          <hr class="border-t-[6px] border-double border-primary/40 dark:border-primary/20" />

          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
        </aside>
      </main>

      <!-- Footer Section -->
      <div class="border-t-[6px] border-double border-primary dark:border-primary/50 mt-20 pt-12 relative z-10">
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
/* Any global resets specifically for newspaper feel */
</style>
