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
import ReadingProgress from '@/components/ui/ReadingProgress.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

// Format current date exactly like a newspaper date (e.g. Lundi 24 Février 2026)
const todayDate = new Date().toLocaleDateString('fr-FR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
</script>

<template>
  <div
    class="journal-wrapper overflow-x-hidden w-full min-h-screen bg-[#FDFBF7] dark:bg-[#121212] text-[#111827] dark:text-[#F3F4F6] transition-colors duration-300 font-sans"
  >
    <ReadingProgress />
    <CustomCursor />
    <BackToTop />
    <CodeBackground
      class="opacity-30 mix-blend-multiply dark:mix-blend-screen pointer-events-none"
    />

    <div
      class="w-[96%] sm:w-[94%] max-w-full mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12 border-x border-[#111827]/10 dark:border-[#F3F4F6]/10 shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:shadow-none relative bg-[#FDFBF7] dark:bg-[#121212] flex flex-col min-w-0 overflow-x-hidden"
    >
      <!-- Top Newspaper Header -->
      <header
        class="border-b-[6px] border-double border-primary dark:border-primary/50 pb-6 mb-10 text-center relative z-10 transition-colors duration-300 w-full overflow-hidden"
      >
        <!-- Decorative top rule -->
        <div
          class="flex items-center justify-center gap-4 mb-4 text-primary/30 dark:text-white/20 font-sans tracking-[0.5em] text-xs select-none"
        >
          <span>✦</span
          ><span class="flex-1 h-px bg-primary/20 dark:bg-white/10 max-w-[80px]"></span>
          <span>PORTFOLIO JOURNAL</span>
          <span class="flex-1 h-px bg-primary/20 dark:bg-white/10 max-w-[80px]"></span
          ><span>✦</span>
        </div>

        <h1
          class="font-journal text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-primary dark:text-[#F3F4F6] mx-auto leading-none mb-2 break-words hyphens-auto break-all sm:break-normal"
        >
          The Hentsrakoto
        </h1>

        <!-- Ornamental divider -->
        <div
          class="flex items-center justify-center gap-3 my-3 text-primary dark:text-white/60 select-none"
        >
          <span class="h-px w-16 bg-primary/40 dark:bg-white/20 block"></span>
          <span class="font-journal text-lg">❖</span>
          <span class="h-px w-16 bg-primary/40 dark:bg-white/20 block"></span>
        </div>

        <h2
          class="font-journal text-2xl sm:text-3xl md:text-5xl lg:text-5xl tracking-[0.2em] sm:tracking-[0.3em] uppercase block text-primary dark:text-[#F3F4F6] break-words"
        >
          Journal
        </h2>

        <div
          class="flex flex-wrap sm:flex-nowrap justify-between gap-y-2 items-center border-y-2 border-primary dark:border-primary/50 mt-6 py-2 px-2 text-[10px] md:text-xs uppercase font-bold tracking-widest text-[#555555] dark:text-[#A3A3A3] font-sans"
        >
          <span class="w-1/2 sm:w-auto text-left sm:text-center">Vol. I — No. 1</span>
          <span class="text-center hidden sm:block">Antananarivo, Madagascar</span>
          <span class="w-full sm:w-auto order-first sm:order-none text-center">{{
            todayDate
          }}</span>
          <span class="w-1/2 sm:w-auto text-right sm:text-center">Développeur Web Edition</span>
        </div>
      </header>

      <Header class="mb-10" />

      <main class="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 relative z-10">
        <!-- Main Content Area -->
        <div
          class="contents lg:block lg:col-span-8 lg:border-r-[3px] border-primary/20 dark:border-primary/20 lg:pr-10 lg:space-y-16"
        >
          <ScrollReveal class="order-[1] lg:order-none w-full">
            <Hero />
          </ScrollReveal>

          <hr
            class="order-[2] lg:order-none border-t border-dashed border-primary/30 dark:border-primary/20 w-full"
          />

          <ScrollReveal class="order-[9] lg:order-none w-full">
            <Project />
          </ScrollReveal>

          <hr
            class="order-[6] lg:order-none border-t border-dashed border-primary/30 dark:border-primary/20 w-full"
          />

          <ScrollReveal class="order-[7] lg:order-none w-full">
            <Experience />
          </ScrollReveal>

          <hr
            class="order-[12] lg:order-none border-t border-dashed border-primary/30 dark:border-primary/20 w-full"
          />

          <ScrollReveal class="order-[15] lg:order-none w-full mt-4 lg:mt-0">
            <Contact />
          </ScrollReveal>
        </div>

        <!-- Sidebar Area -->
        <aside class="contents lg:block lg:col-span-4 lg:space-y-12">
          <ScrollReveal class="order-[3] lg:order-none w-full">
            <Moi />
          </ScrollReveal>

          <hr
            class="order-[4] lg:order-none border-t-[6px] border-double border-primary/40 dark:border-primary/20 w-full"
          />

          <ScrollReveal class="order-[5] lg:order-none w-full">
            <Competence />
          </ScrollReveal>

          <hr
            class="order-[8] lg:order-none border-t-[6px] border-double border-primary/40 dark:border-primary/20 w-full"
          />

          <ScrollReveal class="order-[11] lg:order-none w-full">
            <Services />
          </ScrollReveal>

          <hr
            class="order-[10] lg:order-none border-t-[6px] border-double border-primary/40 dark:border-primary/20 w-full"
          />

          <ScrollReveal class="order-[13] lg:order-none w-full">
            <Testimonials />
          </ScrollReveal>

          <!-- Extra separator for mobile before contact -->
          <hr
            class="block lg:hidden order-[14] border-t-[6px] border-double border-primary/40 dark:border-primary/20 w-full"
          />
        </aside>
      </main>

      <!-- Footer Section -->
      <div
        class="border-t-[6px] border-double border-primary dark:border-primary/50 mt-20 pt-12 relative z-10"
      >
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
/* Any global resets specifically for newspaper feel */
</style>
