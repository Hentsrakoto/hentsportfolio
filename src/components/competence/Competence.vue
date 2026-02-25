<script setup lang="ts">
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
  { name: 'Affinity Designer', icon: 'https://images.seeklogo.com/logo-png/64/1/affinity-logo-png_seeklogo-643292.png' },
]
</script>

<template>
  <section id="competence" class="relative py-12 bg-transparent">
    <!-- Header Journal Style -->
    <div class="border-b-[3px] border-primary dark:border-gray-500 pb-4 mb-8">
      <span class="uppercase tracking-[0.2em] text-xs font-bold text-secondary dark:text-gray-400 block mb-2 font-sans">
        Expertise Technique
      </span>
      <h2 class="font-journal text-4xl sm:text-5xl md:text-7xl font-black text-primary dark:text-[#F3F4F6] leading-none break-words hyphens-auto break-all sm:break-normal">
        Stack & Outils.
      </h2>
    </div>

    <div class="flex flex-col gap-10">
      <!-- Colonne Développement -->
      <div class="flex-1 border-[2px] border-primary dark:border-gray-600 p-6 relative">
        <!-- Coin déco -->
        <div class="absolute top-0 right-0 w-8 h-8 border-l-2 border-b-2 border-primary dark:border-gray-600 bg-white dark:bg-[#121212]"></div>
        
        <header class="border-b-2 border-primary dark:border-gray-600 pb-4 mb-8">
          <h3 class="font-journal text-3xl md:text-4xl font-bold text-primary dark:text-white uppercase tracking-tight">
            Développement
          </h3>
          <p class="font-sans text-sm md:text-base italic text-gray-600 dark:text-gray-400 mt-2">
            L'architecture logicielle : Back-end, Front-end & Desktop.
          </p>
        </header>

        <div class="flex flex-wrap justify-center gap-x-4 gap-y-8">
          <div v-for="skill in languagesFrameworks" :key="skill.name" class="flex flex-col items-center group cursor-crosshair w-[72px] sm:w-[80px]">
            <div class="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-3 border-[1.5px] border-black dark:border-white bg-white dark:bg-black grayscale group-hover:grayscale-0 transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] group-hover:translate-y-1 group-hover:translate-x-1 group-hover:shadow-[0px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[0px_0px_0px_rgba(255,255,255,1)]">
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-full h-full object-contain"
                :class="{ 'dark:invert': ['Express'].includes(skill.name) }"
              />
            </div>
            <span class="mt-4 font-sans text-xs font-bold uppercase tracking-widest text-[#111827] dark:text-gray-300 text-center break-words hyphens-auto w-full">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Colonne Outils & Design -->
      <div class="w-full flex flex-col gap-6">
        <div class="border-[2px] border-dashed border-primary dark:border-gray-600 p-6 flex-1 relative bg-gray-50 dark:bg-[#1A1A1A] w-full">
          <header class="border-b-2 border-primary dark:border-gray-600 pb-4 mb-8 text-center">
            <h3 class="font-journal text-2xl md:text-3xl font-bold text-primary dark:text-white uppercase tracking-tight">
              Outils & Design
            </h3>
            <p class="font-sans text-sm italic text-gray-600 dark:text-gray-400 mt-2">
              L'atelier créatif et DevOps.
            </p>
          </header>

          <div class="flex flex-wrap justify-center gap-x-4 gap-y-8">
            <div v-for="skill in systemesOutils" :key="skill.name" class="flex flex-col items-center group cursor-crosshair w-[72px] sm:w-[80px]">
              <div class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center p-3 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-black grayscale drop-shadow-sm group-hover:grayscale-0 transition-all duration-300 transform group-hover:-rotate-6 hover:scale-110">
                <img
                  :src="skill.icon"
                  :alt="skill.name"
                  class="w-full h-full object-contain"
                  :class="{ 'dark:invert': ['GitHub'].includes(skill.name) }"
                />
              </div>
              <span class="mt-4 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] text-[#111827] dark:text-gray-300 text-center break-words hyphens-auto w-full">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Petite note de bas de page type journal -->
        <div class="border-t-[3px] border-b-[3px] border-double border-primary dark:border-gray-600 py-3 px-4 text-center bg-transparent">
          <p class="font-sans text-[10px] sm:text-xs uppercase tracking-widest font-bold text-gray-800 dark:text-gray-400">
            * Liste non exhaustive des technologies.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
