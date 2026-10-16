import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import '@/assets/main.css'

export const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  ({ app, router, routes, isClient, initialState }) => {
    // Phase 5a (SSG) — i18n : locale par défaut `fr` (cf. src/i18n.ts), donc le
    // HTML pré-rendu est en FR. Pas d'URLs distinctes FR/EN (one-page, pas de
    // route par langue) → pas de hreflang ; le toggle reste 100 % côté client.
    app.use(i18n)

    // Phase 5a (SSG) — stubs DOM minimaux pour le pré-rendu Node.
    // `useDarkMode` (src/composables, hors périmètre : .vue/composables
    // intouchés) exécute un `watchEffect` non gardé qui touche `document` et
    // `localStorage` dès le setup — crash SSR prouvé au build
    // ("ReferenceError: document is not defined"). Ces stubs ne servent qu'au
    // pré-rendu (jamais côté client) et sont sans effet sur le HTML généré.
    // Fix durable (TODO Hents, autre phase) : garder ces accès dans useDarkMode.
    if (import.meta.env.SSR) {
      const g = globalThis as unknown as Record<string, unknown>
      if (typeof g.document === 'undefined') {
        g.document = { documentElement: { classList: { toggle: () => {} } } }
      }
      if (typeof g.localStorage === 'undefined') {
        const store = new Map<string, string>()
        g.localStorage = {
          getItem: (k: string) => store.get(k) ?? null,
          setItem: (k: string, v: string) => {
            store.set(k, v)
          },
          removeItem: (k: string) => {
            store.delete(k)
          },
        }
      }
    }
  },
)
