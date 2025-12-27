<script setup lang="ts">
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const services = [
  { name: 'Développement Web', href: '#' },
  { name: 'Applications Mobiles', href: '#' },
  { name: 'UI/UX Design', href: '#' },
  { name: 'Consulting Tech', href: '#' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Hentsrakoto',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/henintsoa-rakotonavalona-366404390/',
    icon: Linkedin,
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rakotonavalonahents@gmail.com',
    href: 'mailto:rakotonavalonahents@gmail.com',
    color: 'text-blue-400',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+261 32 75 771 63',
    href: 'tel:+261327577163',
    color: 'text-emerald-400',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Antananarivo, Madagascar',
    href: '#',
    color: 'text-purple-400',
  },
]
</script>

<template>
  <footer
    class="bg-background-dark text-white py-16 border-t border-gray-800 relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"
    ></div>
    <div
      class="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        <!-- Brand Section -->
        <div class="md:col-span-5 space-y-6">
          <h2
            class="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
          >
            Hents
          </h2>
          <p class="text-gray-400 leading-relaxed max-w-md">
            Transformez vos idées en réalité numérique. Je conçois des expériences web immersives et
            performantes, alliant design moderne et technologies de pointe.
          </p>
          <div class="flex space-x-4 pt-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              class="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
              :aria-label="social.name"
            >
              <component
                :is="social.icon"
                class="w-5 h-5 transform group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        <!-- Links Sections -->
        <div class="md:col-span-3">
          <h3 class="text-lg font-semibold text-white mb-6 relative inline-block">
            Services
            <span class="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
          </h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <a
                :href="service.href"
                class="text-gray-400 hover:text-primary transition-colors flex items-center group"
              >
                <ArrowRight
                  class="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary"
                />
                {{ service.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <h3 class="text-lg font-semibold text-white mb-6 relative inline-block">
            Contact
            <span class="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary rounded-full"></span>
          </h3>
          <ul class="space-y-4 text-gray-400">
            <li
              v-for="(contact, index) in contactInfo"
              :key="index"
              class="flex items-start space-x-3 group"
            >
              <div
                class="mt-1 p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700 transition-colors"
              >
                <component :is="contact.icon" :class="['w-5 h-5', contact.color]" />
              </div>
              <div>
                <span class="block text-sm text-gray-500 mb-1">{{ contact.label }}</span>
                <a :href="contact.href" class="text-white hover:text-primary transition-colors">
                  {{ contact.value }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} Hents. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>
