<script setup lang="ts">
import { Code2,  Palette } from 'lucide-vue-next'

const languagesFrameworks = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Tailwindcss', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  // Utilisation de @latest pour Express
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg' },

  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Codeigniter', icon: 'https://cdn.simpleicons.org/codeigniter/codeigniter' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
]

const systemesOutils = [
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/framer' },
  { name: 'Inkscape', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg' },
]
</script>

<template>
  <section id="competence" class="min-h-screen py-20 bg-slate-50 dark:bg-[#0B0F1A] transition-colors duration-500 overflow-hidden relative">

    <div class="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-6 max-w-7xl relative z-10">

      <div class="flex flex-col items-center mb-16 text-center">
        <span class="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-primary/20">
          Expertise Technique
        </span>
        <h2 class="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight">
          Stack <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">& Outils</span>
        </h2>
        <div class="h-1.5 w-24 bg-gradient-to-r from-primary via-secondary to-primary rounded-full animate-pulse"></div>
      </div>

      <div class="grid grid-cols-12 gap-6">

        <div class="col-span-12 lg:col-span-7 group">
          <div class="bento-card h-full">
            <div class="flex items-center gap-4 mb-10">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-transform group-hover:rotate-12">
                <Code2 class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold dark:text-white uppercase tracking-wide">Développement</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">Back-end, Front-end & Desktop</p>
              </div>
            </div>

            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
              <div v-for="skill in languagesFrameworks" :key="skill.name" class="skill-item group/item">
                <div class="icon-wrapper">
                  <img :src="skill.icon" :alt="skill.name"
                    class="w-10 h-10 object-contain group-hover/item:scale-110 transition-transform duration-300"
                    :class="{'dark:invert dark:brightness-200': ['Express'].includes(skill.name)}" />
                </div>
                <span class="skill-name">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-5 group">
          <div class="bento-card h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40 border-secondary/20">
            <div class="flex items-center gap-4 mb-10">
              <div class="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-transform group-hover:-rotate-12">
                <Palette class="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 class="text-xl font-bold dark:text-white uppercase tracking-wide">Outils & Design</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">Workflow, DevOps & UI/UX</p>
              </div>
            </div>

            <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-6">
              <div v-for="skill in systemesOutils" :key="skill.name" class="skill-item group/item">
                <div class="icon-wrapper border-secondary/10 group-hover/item:border-secondary/40">
                  <img :src="skill.icon" :alt="skill.name"
                    class="w-10 h-10 object-contain group-hover/item:scale-110 transition-transform duration-300"
                    :class="{'dark:invert dark:brightness-0': ['GitHub'].includes(skill.name)}" />
                </div>
                <span class="skill-name group-hover/item:text-secondary">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.bento-card {
  @apply p-8 rounded-[2.5rem] bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl
         border border-white dark:border-slate-800/50 shadow-2xl shadow-slate-200/50
         dark:shadow-none transition-all duration-500;
}

.skill-item {
  @apply flex flex-col items-center justify-center transition-all duration-300 cursor-pointer;
}

.icon-wrapper {
  @apply w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-[1.8rem]
         bg-white dark:bg-slate-800/80 mb-3 border border-slate-100 dark:border-slate-700
         shadow-sm group-hover/item:shadow-xl group-hover/item:-translate-y-2
         transition-all duration-500 ease-out;
}

.skill-name {
  @apply text-[10px] md:text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider
         group-hover/item:text-primary transition-colors duration-300 text-center;
}

/* Animation d'apparition au chargement */
#competence {
  animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
