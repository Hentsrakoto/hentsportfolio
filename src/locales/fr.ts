import { identite } from '@/data/identite'

export default {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    experience: 'Expérience',
    skills: 'Compétences',
    portfolio: 'Portfolio',
    contact: 'Contact',
    cv: 'CV',
    downloadCv: 'Télécharger mon CV'
  },
  hero: {
    exclusive: "À la Une",
    title1: "The Mind Behind",
    title2: "The Code.",
    meet: "Rencontre avec",
    typing: [identite.prenom, 'le Développeur', 'le Builder'],
    p1: "Étudiant en Master 1 MIAGE à Madagascar, je transforme des besoins concrets en applications web utiles.",
    cta: "Voir mes projets",
    fig1: `Fig 1. ${identite.prenom} dans son élément.`
  },
  sectionTitle: {
    servicesBadge: "My Services",
    servicesTitle: "Ce que je développe",
    servicesSubtitle: "Des solutions techniques complètes adaptées aux besoins métier et aux utilisateurs.",

    expBadge: "Experience",
    expTitle: "Parcours Pro.",
    expSubtitle: "Un aperçu de mon parcours professionnel et académique.",

    skillsBadge: "Skills & Tools",
    skillsTitle: "Stack & Outils",
    skillsSubtitle: "L’arsenal technologique que j’utilise pour bâtir vos projets.",

    projBadge: "Portfolio",
    projTitle: "Mes Projets",
    projSubtitle: "Une sélection de projets alliant rigueur technique et problèmes concrets.",

    contactBadge: "Contact",
    contactTitle: "Écrivez-moi.",
    contactSubtitle: "Vous avez un projet en tête ou vous souhaitez simplement échanger ? Courrier des lecteurs."
  },
  me: {
    approachTitle: "Mon approche",
    devTitle: "Développement Full-Stack",
    devDesc: "Frontend, backend, API REST et bases de données — je couvre l’ensemble de la chaîne applicative.",
    curiousTitle: "Curieux & Orienté Solutions",
    curiousDesc: "Toujours à la recherche de nouvelles approches techniques et d’architectures modernes.",
    excellenceTitle: "Systèmes Intelligents",
    excellenceDesc: "Exploration de la Data, des systèmes de recommandation et du Machine Learning.",
    journeyTitle: "Formation",
    l3: "Master 1 MIAGE",
    l3Desc: "Informatique Appliquée à la Gestion d’Entreprise — En cours.",
    l2: "Licence en Informatique",
    l2Desc: "Informatique, Risque et Décision — Septembre 2023 · Janvier 2026.",
    ecole: 'ESMIA — Antanimena',
    statutEnCours: 'En cours',
    periodeLicence: '2023 — 2026'
  },
  services: {
    webTitle: "Applications Web",
    webDesc: "Conception et réalisation d’applications web modernes et performantes adaptées aux besoins des utilisateurs.",
    frontTitle: "Frontend Moderne",
    frontDesc: "Développement d’interfaces utilisateur modernes, réactives et ergonomiques avec Vue.js et React.",
    backTitle: "Backend & API REST",
    backDesc: "Création d’API REST sécurisées et développement de la logique métier avec Spring Boot, Laravel et CodeIgniter.",
    dbTitle: "Bases de Données",
    dbDesc: "Modélisation, conception et gestion efficace des données avec PostgreSQL et MySQL.",
    aiTitle: "Systèmes Intelligents",
    aiDesc: "Exploration de la Data, intégration de systèmes de recommandation et Machine Learning avec Python.",
    archTitle: "Architecture Applicative",
    archDesc: "Organisation et structuration de projets full-stack favorisant la maintenabilité et l’évolutivité."
  },
  experience: {
    periode1: 'Sept. 2024 — Jan. 2026',
    periode2: 'Mai 2026',
    periode3: '2023 — En cours',
    exp1Role: "Développeur Web",
    exp1Company: "PlanetGame Madagascar",
    exp1Tasks: [
      "Développement d’une plateforme e-commerce",
      "Création et consommation d’API REST",
      "Gestion des utilisateurs, produits et commandes",
      "Participation au frontend (Vue.js) et au backend (CodeIgniter)"
    ],
    exp2Role: "Développeur Mobile",
    exp2Company: "AccessBible",
    exp2Tasks: [
      "Développement d’une application mobile de lecture de la Bible",
      "Interface adaptative pour le confort de lecture",
      "Navigation adaptée aux différents usages"
    ],
    exp3Role: "Projets Académiques & IA",
    exp3Company: "Formation Universitaire — ESMIA",
    exp3Tasks: [
      "Algorithmes et structures de données",
      "Python, Machine Learning et systèmes de recommandation",
      "Traitement et préparation de données",
      "Projets universitaires : CV Maker, MusicApp"
    ],
    keyTasks: "Réalisations Clés",
    techs: "Technologies"
  },
  portfolio: {
    fig1: "Fig 1. Vue d’ensemble",
    tools: "Outils :"
  },
  contact: {
    coords: "Coordonnées",
    socials: "Réseaux Sociaux",
    titreEmail: 'E-mail',
    titreTel: 'Ligne Directe',
    titreLieu: 'Localisation',
    namePlaceholder: "Votre nom complet",
    emailPlaceholder: "votre.email{'@'}adresse.com",
    subjectPlaceholder: "Sujet de la correspondance",
    messagePlaceholder: "Rédigez votre lettre ici...",
    send: "Envoyer la lettre",
    sending: "Envoi...",
    errName: "Veuillez saisir votre nom.",
    errEmail: "Veuillez saisir une adresse e-mail valide.",
    errSubject: "Veuillez saisir un sujet.",
    errMessage: "Veuillez rédiger votre message.",
    errSpam: "La lettre n’a pas pu être envoyée.",
    libelleEmail: 'Email',
    libelleSujet: 'Sujet',
    libelleMessage: 'Message',
    toastSucces: 'Le facteur a bien reçu votre lettre !',
    toastErreur: "La lettre s’est perdue en chemin."
  },
  temoignages: {
    badge: 'Témoignages',
    titre: 'Témoignages',
    soustitre: "Retours de ceux avec qui j’ai collaboré.",
    // citation originale conservée en FR
    contenu1: `Un travail exceptionnel ! ${identite.prenom} a su capter l’essence de notre marque et l’a traduite en une interface web magnifique et fonctionnelle.`,
    role1: 'CEO, PlanetGame Madagascar'
  },
  footer: {
    role: "Développeur Web",
    tagline: "Construire des applications utiles et transformer les idées en solutions concrètes.",
    slogan: "L’esprit derrière le code.",
    services: "Services",
    legal: "Avis Légal",
    legalText1: "Ce journal numérique est édité indépendamment. Les informations contenues sur cette page sont fournies à titre indicatif et sont sujettes à modification sans préavis.",
    legalText2: "Imprimé numériquement sur le web, distribué via le réseau mondial.",
    rights: "Tous droits réservés."
  },
  meta: {
    titre: 'Hentsrakoto | Développeur Web Frontend · Vue.js & React · Madagascar',
    description: 'Portfolio de Hentsrakoto, développeur web basé à Madagascar (React, Vue.js, Spring Boot, Laravel, PostgreSQL). Disponible pour stage, poste et missions freelance.'
  },
  divers: {
    noteCompetences: '* Liste non exhaustive des technologies.'
  }
}
