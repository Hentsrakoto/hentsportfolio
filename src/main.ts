import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import '@/assets/main.css'

export const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(i18n)
  },
)
