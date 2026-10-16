import type { GroupeCompetences, TexteFrEn } from './types';

type GroupeCompetencesFrEn = Omit<GroupeCompetences, 'titre' | 'soustitre'> & {
  titre: TexteFrEn;
  soustitre: TexteFrEn;
};

export const groupesCompetences: GroupeCompetencesFrEn[] = [
  {
    id: 'dev',
    titre: { fr: 'Développement', en: 'Development' },
    soustitre: { fr: 'Frontend, Backend, Data & Mobile.', en: 'Frontend, Backend, Data & Mobile.' },
    items: [
      { nom: 'HTML', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { nom: 'CSS', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { nom: 'JavaScript', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { nom: 'TypeScript', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { nom: 'PHP', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { nom: 'Java', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { nom: 'Python', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { nom: 'React', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { nom: 'Vue.js', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { nom: 'Tailwind CSS', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { nom: 'Spring Boot', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { nom: 'Laravel', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { nom: 'CodeIgniter', icone: 'https://cdn.simpleicons.org/codeigniter/codeigniter' },
      { nom: 'React Native', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { nom: 'FastAPI', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { nom: 'Expo', icone: 'https://cdn.simpleicons.org/expo' },
    ],
  },
  {
    id: 'outils',
    titre: { fr: 'Méthodes & Environnement', en: 'Methods & Environment' },
    soustitre: { fr: 'Bases de données, DevOps & outils du quotidien.', en: 'Databases, DevOps & everyday tools.' },
    items: [
      { nom: 'PostgreSQL', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { nom: 'MySQL', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { nom: 'Git', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { nom: 'GitHub', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { nom: 'Linux', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { nom: 'Docker', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { nom: 'Maven', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
      { nom: 'Postman', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { nom: 'VS Code', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { nom: 'SQLite', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { nom: 'OpenStreetMap', icone: 'https://cdn.simpleicons.org/openstreetmap' },
    ],
  },
];
