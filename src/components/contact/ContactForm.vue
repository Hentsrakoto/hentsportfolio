<template>
  <section id="contact" class="relative py-12 bg-transparent">
    <!-- Header Journal Style (i18n) -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8 text-center sm:text-left">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        {{ $t('sectionTitle.contactBadge') }}
      </span>
      <h2 class="font-journal text-4xl sm:text-5xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none mb-3 break-words hyphens-none text-balance">
        {{ $t('sectionTitle.contactTitle') }}
      </h2>
      <p class="font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto sm:mx-0 italic">
        {{ $t('sectionTitle.contactSubtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      
      <!-- Coordinates (Classifieds Style) -->
      <div class="col-span-1 lg:col-span-4 border-[2px] border-primary dark:border-gray-500 p-6 bg-gray-50 dark:bg-[#1A1A1A] relative">
        <h3 class="font-journal text-3xl font-bold uppercase border-b-2 border-primary dark:border-gray-500 pb-2 mb-6 text-primary dark:text-white break-words">
          {{ $t('contact.coords') }}
        </h3>

        <div class="space-y-8">
          <div v-for="(info, index) in contactInfo" :key="index">
            <h4 class="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-1">
              {{ info.title }}
            </h4>
            <a v-if="info.href" :href="info.href" :class="{ 'whitespace-nowrap': info.href.startsWith('mailto:') }" class="font-serif text-base md:text-lg font-bold text-primary dark:text-gray-200 hover:text-secondary hover:underline transition-colors">
              {{ info.value }}
            </a>
            <span v-else class="font-serif text-base md:text-lg font-bold text-primary dark:text-gray-200">
              {{ info.value }}
            </span>
          </div>
        </div>

        <div class="mt-10 border-t-2 border-primary dark:border-gray-500 pt-6">
          <h4 class="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-4">
            {{ $t('contact.socials') }}
          </h4>
          <div class="flex gap-4">
            <a href="https://www.linkedin.com/in/henintsoa-rakotonavalona-366404390/" target="_blank" rel="noopener noreferrer" class="font-sans font-bold text-primary dark:text-gray-200 hover:underline underline-offset-4">
              LinkedIn
            </a>
            <span class="text-gray-400">|</span>
            <a href="https://github.com/Hentsrakoto" target="_blank" rel="noopener noreferrer" class="font-sans font-bold text-primary dark:text-gray-200 hover:underline underline-offset-4">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- Letter Format Form -->
      <div class="col-span-1 lg:col-span-8">
        <!-- TODO(Hents): basculer vers Netlify Forms ou autre backend si envoi réel côté serveur souhaité -->
        <form @submit.prevent="handleSubmit" novalidate class="flex flex-col gap-6">
          <div class="flex flex-col sm:flex-row gap-6">
            <div class="flex-1">
              <label for="contact-name" class="block font-sans text-xs font-bold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 mb-1">
                {{ $t('contact.namePlaceholder') }}
              </label>
              <div class="border-b border-primary dark:border-gray-500">
                <input
                  id="contact-name"
                  name="name"
                  ref="nameInput"
                  v-model="form.name"
                  type="text"
                  required
                  autocomplete="name"
                  :aria-invalid="!!errors.name"
                  :aria-describedby="errors.name ? 'err-contact-name' : undefined"
                  class="w-full bg-transparent px-0 py-3 font-sans text-base lg:text-lg outline-none placeholder-gray-500 dark:placeholder-gray-400 text-primary dark:text-white"
                  :placeholder="$t('contact.namePlaceholder')"
                />
              </div>
              <p v-if="errors.name" id="err-contact-name" class="font-sans text-xs italic text-red-800 dark:text-red-300 mt-1" aria-live="polite">{{ errors.name }}</p>
            </div>
            <div class="flex-1">
              <label for="contact-email" class="block font-sans text-xs font-bold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 mb-1">
                {{ $t('contact.libelleEmail') }}
              </label>
              <div class="border-b border-primary dark:border-gray-500">
                <input
                  id="contact-email"
                  name="email"
                  ref="emailInput"
                  v-model="form.email"
                  type="email"
                  required
                  autocomplete="email"
                  :aria-invalid="!!errors.email"
                  :aria-describedby="errors.email ? 'err-contact-email' : undefined"
                  class="w-full bg-transparent px-0 py-3 font-sans text-base lg:text-lg outline-none placeholder-gray-500 dark:placeholder-gray-400 text-primary dark:text-white"
                  :placeholder="$t('contact.emailPlaceholder')"
                />
              </div>
              <p v-if="errors.email" id="err-contact-email" class="font-sans text-xs italic text-red-800 dark:text-red-300 mt-1" aria-live="polite">{{ errors.email }}</p>
            </div>
          </div>

          <div>
            <label for="contact-subject" class="block font-sans text-xs font-bold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 mb-1">
              {{ $t('contact.libelleSujet') }}
            </label>
            <div class="border-b border-primary dark:border-gray-500">
              <input
                id="contact-subject"
                name="subject"
                ref="subjectInput"
                v-model="form.subject"
                type="text"
                required
                autocomplete="off"
                :aria-invalid="!!errors.subject"
                :aria-describedby="errors.subject ? 'err-contact-subject' : undefined"
                class="w-full bg-transparent px-0 py-3 font-sans text-base lg:text-lg outline-none placeholder-gray-500 dark:placeholder-gray-400 text-primary dark:text-white font-bold"
                :placeholder="$t('contact.subjectPlaceholder')"
              />
            </div>
            <p v-if="errors.subject" id="err-contact-subject" class="font-sans text-xs italic text-red-800 dark:text-red-300 mt-1" aria-live="polite">{{ errors.subject }}</p>
          </div>

          <div>
            <label for="contact-message" class="block font-sans text-xs font-bold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 mb-1">
              {{ $t('contact.libelleMessage') }}
            </label>
            <div class="border border-primary dark:border-gray-500 p-2 relative h-64 bg-[#FDFBF7] dark:bg-[#121212]">
              <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: repeating-linear-gradient(transparent, transparent 31px, currentColor 31px, currentColor 32px);"></div>
              <textarea
                id="contact-message"
                name="message"
                ref="messageInput"
                v-model="form.message"
                required
                :aria-invalid="!!errors.message"
                :aria-describedby="errors.message ? 'err-contact-message' : undefined"
                class="w-full h-full bg-transparent p-2 font-serif text-lg outline-none resize-none text-primary dark:text-white relative z-10 leading-8"
                :placeholder="$t('contact.messagePlaceholder')"
              ></textarea>
            </div>
            <p v-if="errors.message" id="err-contact-message" class="font-sans text-xs italic text-red-800 dark:text-red-300 mt-1" aria-live="polite">{{ errors.message }}</p>
          </div>

          <input
            type="text"
            name="company"
            v-model="form.company"
            class="hidden"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <div class="flex justify-end mt-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="font-sans uppercase tracking-[0.2em] font-bold text-sm px-8 py-4 border-[2px] border-primary dark:border-white text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary transition-colors disabled:opacity-50 flex items-center gap-3"
            >
              <span>{{ isSubmitting ? $t('contact.sending') : $t('contact.send') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!isSubmitting">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>

    </div>

    <!-- Notification -->
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="notification.show"
        class="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-[#111827] text-white dark:bg-white dark:text-[#111827] border-[2px] border-white dark:border-[#111827] p-4 font-sans text-sm font-bold shadow-[4px_4px_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_rgba(255,255,255,1)] flex justify-between items-center"
      >
        <span>{{ notification.message }}</span>
        <button @click="notification.show = false" class="underline hover:text-secondary opacity-70 hover:opacity-100 ml-4">✕</button>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { identite } from '@/data/identite'

const { t, locale } = useI18n()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',
})

const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const nameInput = ref<HTMLInputElement | null>(null)
const emailInput = ref<HTMLInputElement | null>(null)
const subjectInput = ref<HTMLInputElement | null>(null)
const messageInput = ref<HTMLTextAreaElement | null>(null)

const isSubmitting = ref(false)
const notification = ref({
  show: false,
  message: '',
  type: 'success' as 'success' | 'error',
})

const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  notification.value = { show: true, message, type }
  setTimeout(() => {
    notification.value.show = false
  }, 5000)
}

const handleSubmit = async () => {
  errors.value = { name: '', email: '', subject: '', message: '' }

  if (form.value.company) {
    showToast(t('contact.errSpam'), 'error')
    return
  }

  let valid = true
  if (!nameInput.value?.checkValidity() || !form.value.name.trim()) {
    errors.value.name = t('contact.errName')
    valid = false
  }
  if (!emailInput.value?.checkValidity()) {
    errors.value.email = t('contact.errEmail')
    valid = false
  }
  if (!subjectInput.value?.checkValidity() || !form.value.subject.trim()) {
    errors.value.subject = t('contact.errSubject')
    valid = false
  }
  if (!messageInput.value?.checkValidity() || !form.value.message.trim()) {
    errors.value.message = t('contact.errMessage')
    valid = false
  }
  if (!valid) return

  isSubmitting.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 800))

    const subject = encodeURIComponent(form.value.subject)
    const en = locale.value === 'en'
    const body = encodeURIComponent(
      `${en ? 'Name' : 'Nom'}: ${form.value.name}\nEmail: ${form.value.email}\n\n${en ? 'Message' : 'Message'}:\n${form.value.message}`,
    )

    window.location.href = `mailto:${identite.email}?subject=${subject}&body=${body}`

    showToast(t('contact.toastSucces'), 'success')
    form.value = { name: '', email: '', subject: '', message: '', company: '' }
  } catch {
    showToast(t('contact.toastErreur'), 'error')
  } finally {
    isSubmitting.value = false
  }
}

const contactInfo = computed<{ title: string; value: string; href?: string }[]>(() => [
  {
    title: t('contact.titreEmail'),
    value: identite.email,
    href: `mailto:${identite.email}`,
  },
  {
    title: t('contact.titreTel'),
    value: identite.telephone,
    href: identite.telephoneHref,
  },
  {
    title: t('contact.titreLieu'),
    value: identite.localisation,
  },
])
</script>

<style scoped>
</style>
