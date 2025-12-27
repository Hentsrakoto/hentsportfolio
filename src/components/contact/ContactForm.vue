<script setup lang="ts">
import {
  ref,
  // Removed unused imports: CheckCircle, AlertCircle, X
} from 'vue'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Facebook,
  CheckCircle,
  AlertCircle,
  X,
} from 'lucide-vue-next'
  
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

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
  isSubmitting.value = true

  try {
    // Simulation d'attente pour l'UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Construction du lien mailto
    const subject = encodeURIComponent(form.value.subject)
    const body = encodeURIComponent(
      `Nom: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`,
    )

    // Ouverture du client mail
    window.location.href = `mailto:rakotonavalonahents@gmail.com?subject=${subject}&body=${body}`

    showToast('Votre client mail a été ouvert !', 'success')
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch {
    showToast('Une erreur est survenue.', 'error')
  } finally {
    isSubmitting.value = false
  }
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'rakotonavalonahents@gmail.com',
    href: 'mailto:rakotonavalonahents@gmail.com',
    color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '+261 32 75 771 63',
    href: 'tel:+261327577163',
    color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30',
  },
  {
    icon: MapPin,
    title: 'Localisation',
    value: 'Antananarivo, Madagascar',
    href: '#',
    color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30',
  },
]
</script>

<template>
  <section
    id="contact"
    class="min-h-screen flex flex-col justify-center py-32 bg-gray-50 dark:bg-background-dark transition-colors duration-300"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-4">
          Me Contacter
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Vous avez un projet en tête ou vous souhaitez simplement échanger ? N'hésitez pas à me
          contacter via le formulaire ou mes coordonnées directes.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Informations de contact -->
        <div class="space-y-8 lg:col-span-1">
          <!-- Cartes Info -->
          <div
            v-for="(info, index) in contactInfo"
            :key="index"
            class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="flex items-start gap-4">
              <div :class="['p-3 rounded-xl', info.color]">
                <component :is="info.icon" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-text dark:text-text-dark mb-1">
                  {{ info.title }}
                </h3>
                <a
                  :href="info.href"
                  class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors break-all"
                >
                  {{ info.value }}
                </a>
              </div>
            </div>
          </div>

          <!-- Réseaux Sociaux (Placeholder si besoin) -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 class="text-xl font-bold text-text dark:text-text-dark mb-6">Réseaux Sociaux</h3>
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/henintsoa-rakotonavalona-366404390/"
                class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin class="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Hentsrakoto"
                class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <Github class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Formulaire -->
        <div class="lg:col-span-2">
          <form
            @submit.prevent="handleSubmit"
            class="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-xl"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Nom complet</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text dark:text-text-dark"
                  placeholder="Votre nom"
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text dark:text-text-dark"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div class="space-y-2 mb-6">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Sujet</label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text dark:text-text-dark"
                placeholder="Le sujet de votre message"
              />
            </div>

            <div class="space-y-2 mb-8">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-text dark:text-text-dark"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-lg shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else class="flex items-center gap-2">
                Envoyer le message
                <Send class="w-5 h-5" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Notification Toast -->
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="notification.show"
        class="fixed bottom-4 right-4 z-50 max-w-md w-full bg-white dark:bg-gray-800 shadow-2xl rounded-xl border-l-4 p-4 flex items-center gap-3"
        :class="notification.type === 'success' ? 'border-green-500' : 'border-red-500'"
      >
        <CheckCircle v-if="notification.type === 'success'" class="w-6 h-6 text-green-500" />
        <AlertCircle v-else class="w-6 h-6 text-red-500" />

        <div>
          <h4 class="font-bold text-gray-800 dark:text-white">
            {{ notification.type === 'success' ? 'Succès' : 'Erreur' }}
          </h4>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ notification.message }}
          </p>
        </div>

        <button
          @click="notification.show = false"
          class="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
    </Transition>
  </section>
</template>
