// Source unique de l'identite (Phase 1 — bug #1 : nom incoherent).
// Decision entretien : nom affiche "Hentsrakoto" partout.
// TODO(Hents): confirmer le nom complet legal — la bio dit
// "Henintsoa Ny Aina", l'ancien footer disait "Henintsoa Rakotonavalona".
export const identite = {
  nomAffiche: 'Hentsrakoto',
  prenom: 'Henintsoa',
  nomApropos: 'Henintsoa Ny Aina',
  nomLegal: 'Henintsoa Rakotonavalona',
  email: 'rakotonavalonahents@gmail.com',
  telephone: '+261 32 75 771 63',
  telephoneHref: 'tel:+261327577163',
  localisation: 'Antananarivo, Madagascar',
  github: 'https://github.com/Hentsrakoto',
  linkedin: 'https://www.linkedin.com/in/henintsoa-rakotonavalona-366404390/',
} as const
