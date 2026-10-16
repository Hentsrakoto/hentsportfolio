import { identite } from '@/data/identite'

export default {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    experience: 'Experience',
    skills: 'Skills',
    portfolio: 'Portfolio',
    contact: 'Contact',
    cv: 'CV',
    downloadCv: 'Download CV'
  },
  hero: {
    exclusive: "Exclusive Feature",
    title1: "The Mind Behind",
    title2: "The Code.",
    meet: "Meet",
    typing: [identite.prenom, 'the Developer', 'the Builder'],
    p1: "Master 1 MIAGE student and web developer, I build modern applications combining frontend, backend, databases and intelligent systems. Each project is an opportunity to turn a concrete need into a performant and scalable solution.",
    p2: "Based in Madagascar, I work primarily with React, Java, Spring Boot, Laravel and PostgreSQL. I am also interested in Data, recommendation systems and Machine Learning.",
    cta: "See my projects",
    fig1: `Fig 1. ${identite.prenom} in his element.`,
    pullQuote: "Turning ideas into concrete, performant and scalable applications."
  },
  sectionTitle: {
    aboutBadge: "About Me",
    aboutTitle: "Who am I?",
    aboutSubtitle: "Passionate developer, I turn your ideas into digital reality.",

    servicesBadge: "My Services",
    servicesTitle: "What I Build",
    servicesSubtitle: "Full-stack and intelligent software solutions tailored to business and user needs.",

    expBadge: "Experience",
    expTitle: "Career Path.",
    expSubtitle: "An overview of my professional and academic background.",

    skillsBadge: "Skills & Tools",
    skillsTitle: "Tech Stack & Tools",
    skillsSubtitle: "The technological arsenal I use to build your projects.",

    projBadge: "Portfolio",
    projTitle: "My Projects",
    projSubtitle: "A selection of projects combining technical rigor and real-world problems.",

    contactBadge: "Contact",
    contactTitle: "Write to me.",
    contactSubtitle: "Have a project in mind or simply want to chat? Letters to the editor."
  },
  me: {
    intro: `I am ${identite.nomApropos}, a Master 1 MIAGE student and web developer. I enjoy turning a business idea or requirement into a concrete, performant and scalable application. I work primarily with React, Java, Spring Boot, Laravel and PostgreSQL, and I am interested in Data and Machine Learning.`,
    devTitle: "Full-Stack Development",
    devDesc: "Frontend, backend, REST APIs and databases — I cover the full application stack.",
    curiousTitle: "Curious & Solution-Oriented",
    curiousDesc: "Always looking for new technical approaches and modern architectures.",
    excellenceTitle: "Intelligent Systems",
    excellenceDesc: "Exploring Data, recommendation systems and Machine Learning.",
    journeyTitle: "Education",
    l3: "Master 1 MIAGE",
    l3Desc: "Applied Computer Science for Business Management — Ongoing.",
    l2: "Bachelor's in Computer Science",
    l2Desc: "Computer Science, Risk and Decision — September 2023 · January 2026.",
    l1: "High School Diploma",
    l1Desc: "Sciences — D",
    ecole: 'ESMIA — Antanimena',
    statutEnCours: 'Ongoing',
    periodeLicence: '2023 — 2026',
    statutAnterieur: 'Earlier'
  },
  services: {
    webTitle: "Web Applications",
    webDesc: "Designing and building modern, high-performance web applications tailored to user needs.",
    frontTitle: "Modern Frontend",
    frontDesc: "Building responsive, modern, and intuitive user interfaces using Vue.js and React.",
    backTitle: "Backend & REST APIs",
    backDesc: "Developing secure REST APIs and business logic with Spring Boot, Laravel, and CodeIgniter.",
    dbTitle: "Databases",
    dbDesc: "Data modeling, querying, and management with PostgreSQL and MySQL.",
    aiTitle: "Intelligent Systems",
    aiDesc: "Data exploration, recommendation engines, and Machine Learning integration with Python.",
    archTitle: "Application Architecture",
    archDesc: "Structuring scalable full-stack applications with an emphasis on maintainability and growth."
  },
  experience: {
    periode1: 'Sep. 2024 — Jan. 2026',
    periode2: 'May 2026',
    periode3: '2023 — Ongoing',
    exp1Role: "Web Developer",
    exp1Company: "PlanetGame Madagascar",
    exp1Tasks: [
      "Developed an e-commerce platform",
      "Built and consumed REST APIs",
      "Managed users, products and orders",
      "Contributed to frontend (Vue.js) and backend (CodeIgniter)"
    ],
    exp2Role: "Mobile Developer",
    exp2Company: "AccessBible",
    exp2Tasks: [
      "Developed a mobile Bible reading application",
      "Adaptive interface for reading comfort",
      "Navigation designed for different use cases"
    ],
    exp3Role: "Academic Projects & AI",
    exp3Company: "University Degree — ESMIA",
    exp3Tasks: [
      "Algorithms and data structures",
      "Python, Machine Learning and recommendation systems",
      "Data processing and preparation",
      "University projects: CV Maker, MusicApp"
    ],
    keyTasks: "Key Achievements",
    techs: "Technologies"
  },
  portfolio: {
    fig1: "Fig 1. System Overview",
    tools: "Tools:"
  },
  contact: {
    coords: "Contact Details",
    socials: "Social Networks",
    titreEmail: 'Email',
    titreTel: 'Direct line',
    titreLieu: 'Location',
    namePlaceholder: "Your full name",
    emailPlaceholder: "your.email{'@'}address.com",
    subjectPlaceholder: "Subject of correspondence",
    messagePlaceholder: "Write your letter here...",
    send: "Send Letter",
    sending: "Sending...",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    errSubject: "Please enter a subject.",
    errMessage: "Please write your message.",
    errSpam: "Your letter could not be sent.",
    libelleEmail: 'Email',
    libelleSujet: 'Subject',
    libelleMessage: 'Message',
    toastSucces: 'Your letter has been received!',
    toastErreur: 'Your letter got lost on the way.'
  },
  temoignages: {
    badge: 'Testimonials',
    titre: 'Testimonials',
    soustitre: 'Feedback from people I have worked with.',
    // citation originale conservée en FR
    contenu1: `Un travail exceptionnel ! ${identite.prenom} a su capter l’essence de notre marque et l’a traduite en une interface web magnifique et fonctionnelle.`,
    role1: 'CEO, PlanetGame Madagascar'
  },
  footer: {
    role: "Web Developer",
    tagline: "Building useful applications and turning ideas into concrete solutions.",
    slogan: 'The Mind Behind The Code.',
    services: "Services",
    legal: "Legal Notice",
    legalText1: "This digital newspaper is independently published. Information is provided for reference and is subject to change without notice.",
    legalText2: "Digitally printed on the web, distributed worldwide.",
    rights: "All rights reserved."
  },
  meta: {
    titre: 'Hentsrakoto | Développeur Web Frontend · Vue.js & React',
    description: 'Portfolio of Hentsrakoto, web developer based in Madagascar (React, Vue.js, Spring Boot, Laravel, PostgreSQL). Available for internships, positions and freelance work.'
  },
  divers: {
    noteCompetences: '* Non-exhaustive list of technologies.'
  }
}
