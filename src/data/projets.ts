import type { Projet } from './types';
import tsidikaImg from '@/assets/chameleon-logo-clair.svg';
import planetgameImg from '@/assets/logoplanetgame.png';
import accessbibleImg from '@/assets/logo.png';
import academicImg from '@/assets/code.jpg';

export const projets: Projet[] = [
  {
    id: 'tsidika',
    titre: { fr: 'TSIDIKA', en: 'TSIDIKA' },
    categorie: {
      fr: 'Tourisme · React + Spring Boot + Python',
      en: 'Tourism · React + Spring Boot + Python',
    },
    description: {
      fr: 'Plateforme web intelligente de recommandation et de planification touristique à Madagascar. Combine un frontend moderne, un backend API REST et un système de recommandation basé sur les préférences des utilisateurs.',
      en: 'Intelligent web platform for tourist recommendation and planning in Madagascar. Combines a modern frontend, a REST API backend, and a recommendation system based on user preferences.',
    },
    role: {
      fr: "Développement du frontend avec React et de l'API backend REST avec Spring Boot.",
      en: 'Frontend development with React and REST API backend with Spring Boot.',
    },
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Python'],
    statut: 'prive',
    capture: {
      src: tsidikaImg,
      alt: { fr: 'Logo du projet TSIDIKA', en: 'TSIDIKA project logo' },
    },
    // TODO(Hents): remplacer le logo par une vraie capture du projet + ajouter année/liens.
    details: [
      { fr: 'Développement du frontend avec React', en: 'Frontend development with React' },
      { fr: 'API backend REST avec Spring Boot', en: 'REST API backend with Spring Boot' },
      { fr: 'Gestion des données touristiques', en: 'Tourist data management' },
      {
        fr: 'Système de recommandation basé sur les préférences',
        en: 'Recommendation system based on user preferences',
      },
      { fr: 'Intégration de services cartographiques', en: 'Integration of mapping services' },
      { fr: 'Planification touristique', en: 'Tourism planning features' },
    ],
  },
  {
    id: 'planetgame',
    titre: { fr: 'PlanetGame', en: 'PlanetGame' },
    categorie: {
      fr: 'E-commerce / CodeIgniter + Vue.js',
      en: 'E-commerce / CodeIgniter + Vue.js',
    },
    description: {
      fr: "Plateforme e-commerce permettant la centralisation et la gestion des produits, des utilisateurs et des commandes. Participation au développement frontend et backend ainsi qu'à la création et à l'utilisation d'API REST.",
      en: 'E-commerce platform for centralising and managing products, users and orders. Participated in frontend and backend development as well as REST API creation.',
    },
    role: {
      fr: "Développement frontend (Vue.js) et backend (CodeIgniter), création et consommation d'API REST.",
      en: 'Frontend (Vue.js) and backend (CodeIgniter) development, REST API creation and consumption.',
    },
    technologies: ['CodeIgniter 4', 'Vue.js', 'MySQL', 'API REST', 'OpenStreetMap', 'API Gemini'],
    statut: 'prive',
    capture: {
      src: planetgameImg,
      alt: { fr: 'PlanetGame', en: 'PlanetGame' },
    },
    // TODO(Hents): remplacer le logo par une vraie capture du projet + confirmer dates sept. 2024 → janv. 2026.
    details: [
      { fr: 'Gestion du catalogue produits', en: 'Product catalog management' },
      { fr: 'Gestion des utilisateurs et des commandes', en: 'User and order management' },
      { fr: "Création et consommation d'API REST", en: 'REST API creation and consumption' },
      { fr: 'Frontend Vue.js et backend CodeIgniter', en: 'Frontend with Vue.js and backend with CodeIgniter' },
    ],
  },
  {
    // TODO(Hents): confirmer nom public (AccessBible vs Bible Interactive).
    id: 'accessbible',
    titre: { fr: 'AccessBible', en: 'AccessBible' },
    categorie: { fr: 'Mobile · React Native', en: 'Mobile · React Native' },
    description: {
      fr: 'Application mobile permettant la lecture de la Bible avec une interface adaptative pensée pour améliorer le confort de lecture et la navigation.',
      en: 'Mobile application for reading the Bible with an adaptive interface designed to improve reading comfort and navigation across different uses.',
    },
    role: {
      fr: "Développement d'une application mobile avec React Native (Expo), interface de lecture adaptative.",
      en: 'Mobile application development with React Native (Expo), adaptive reading interface.',
    },
    technologies: ['React Native', 'Expo', 'JavaScript', 'FastAPI', 'SQLite'],
    statut: 'academique',
    capture: {
      src: accessbibleImg,
      alt: { fr: 'AccessBible', en: 'AccessBible' },
    },
    // TODO(Hents): remplacer le logo par une vraie capture de l'application.
    details: [
      { fr: 'Développé avec React Native', en: 'Developed with React Native' },
      { fr: 'Interface de lecture adaptative', en: 'Adaptive reading interface' },
      { fr: 'Navigation adaptée aux différents usages', en: 'Navigation designed for different use cases' },
    ],
  },
  {
    id: 'academique-ia',
    titre: { fr: 'Projets Académiques & IA', en: 'Academic & AI Projects' },
    categorie: { fr: 'Python · ML · Algorithmes', en: 'Python · ML · Algorithms' },
    description: {
      fr: "Ensemble de projets académiques et d'expérimentations couvrant les algorithmes, le traitement de données, le Machine Learning, les systèmes de recommandation et des projets universitaires comme CV Maker et MusicApp.",
      en: 'A set of academic projects and experiments covering algorithms, data processing, Machine Learning, recommendation systems, and university projects such as CV Maker and MusicApp.',
    },
    role: {
      fr: 'Expérimentations universitaires : algorithmes, traitement de données, Machine Learning.',
      en: 'Academic experiments: algorithms, data processing, Machine Learning.',
    },
    // TODO(Hents): préciser le projet RAG (description, stack, lien) demandé par Hents, rien inventé.
    technologies: ['Python', 'Machine Learning', 'ETL', 'Vue 3', 'jsPDF'],
    statut: 'academique',
    capture: {
      src: academicImg,
      alt: { fr: 'Projets Académiques & IA', en: 'Academic & AI Projects' },
    },
    // TODO(Hents): remplacer par visuels de résultats.
    details: [
      { fr: 'Algorithmes et structures de données', en: 'Algorithms and data structures' },
      { fr: 'Python et Machine Learning', en: 'Python and Machine Learning' },
      { fr: 'Systèmes de recommandation', en: 'Recommendation systems' },
      { fr: 'Traitement et préparation de données', en: 'Data processing and preparation' },
      { fr: 'Projets universitaires : CV Maker, MusicApp', en: 'University projects: CV Maker, MusicApp' },
    ],
  },
];
