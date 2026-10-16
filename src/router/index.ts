import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { defineComponent, h } from 'vue'

// Phase 5a (SSG) — route minimale documentée.
// Le site est une one-page (sections à ancres, App.vue sans <RouterView>) :
// `vite-ssg build` exige au moins une route pour générer dist/index.html
// (avec `routes: []` aucune page n'est pré-rendue).
// Ce composant n'est jamais affiché (pas de <RouterView>) ; tout le contenu
// pré-rendu vient d'App.vue.
const SsgRoot = defineComponent({
  name: 'SsgRoot',
  setup: () => () => h('div'),
})

const router = createRouter({
  // Phase 5a (SSG) — createWebHistory touche `window` dès sa création
  // (vue-router, useHistoryStateNavigation) et crasherait le pré-rendu Node.
  // Pattern doc officielle vue-router : createMemoryHistory côté serveur.
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', component: SsgRoot }],
})

export default router
