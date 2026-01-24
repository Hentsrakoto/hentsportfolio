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
</script>

<template>
  <CustomCursor />
  <CodeBackground />
  <Header />
  <Hero />

  <ScrollReveal>
    <Services />
  </ScrollReveal>

  <ScrollReveal>
    <Moi />
  </ScrollReveal>

  <ScrollReveal>
    <Experience />
  </ScrollReveal>

  <ScrollReveal>
    <Competence />
  </ScrollReveal>

  <ScrollReveal>
    <Project />
  </ScrollReveal>

  <ScrollReveal>
    <Testimonials />
  </ScrollReveal>

  <ScrollReveal>
    <Contact />
  </ScrollReveal>

  <Footer />
</template>

<style>
body {
  font-family: 'Exo 2', sans-serif;
}
</style>
