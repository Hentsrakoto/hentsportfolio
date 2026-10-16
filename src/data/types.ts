export interface TexteFrEn { fr: string; en: string }
export type StatutProjet = 'en-ligne' | 'academique' | 'prive';
export interface CaptureProjet { src: string; alt: TexteFrEn }
export interface Projet {
  id: string;
  titre: TexteFrEn;
  categorie: TexteFrEn;
  description: TexteFrEn;
  role: TexteFrEn;
  technologies: string[];
  statut: StatutProjet;
  lienSite?: string;
  lienCode?: string;
  capture?: CaptureProjet;
  details: TexteFrEn[];
}
export interface ItemCompetence { nom: string; icone: string }
export interface GroupeCompetences { id: string; titre: string; soustitre: string; items: ItemCompetence[] }
