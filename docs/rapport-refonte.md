# Rapport refonte — The Hentsrakoto Journal

Branche : `refonte` (7 commits, `npm run build` vert à chaque phase).
Base : `eb6f10f` → tête `a08346e`. Méthode : 2 agents en parallèle par phase quand possible.

## 1. Corrigé phase par phase

- **Phase 0** `fdd9a99` — audit + design system : `src/assets/tokens.css` (`:root` + `.dark`/`[data-theme=dark]`),
  import dans `main.css`, `docs/design-tokens.md` (audit stack, tokens, décisions, TODO).
- **Phase 1** `96ed7e5` — bugs visibles : `src/data/identite.ts` (nom unique Hentsrakoto),
  `break-all` supprimé partout + `hyphens-none text-balance`, e-mail `nowrap` + `mailto:`,
  typing avec texte complet au 1er rendu + garde `prefers-reduced-motion`,
  logos projets en `object-contain`, carré déco supprimé. Lettrines déjà en `::first-letter` (vérifié, inchangé) ;
  cercle = anneau du curseur custom (intentionnel, conservé).
- **Phase 2** `13e1c65` — contenu en données : `src/data/types.ts|projets.ts|competences.ts`
  (ordre 1 Tsidika, 2 PlanetGame, 3 AccessBible, 4 Académique & IA ; +FastAPI/Expo/SQLite/OpenStreetMap ;
  badges privé/académique, aucun lien inventé), `Écrivez-moi`/`Write to me`, Critiques → Témoignages,
  E-mail/Localisation, lien mort `#` supprimé, périodes/techs parcours centralisées.
- **Phase 3** `fbf83b8` — a11y : labels `for`/`id` + `autocomplete` + erreurs par champ + honeypot,
  cibles 44px, skip-link, `:focus-visible`, `scroll-margin-top`, `reduced-motion` global,
  gris remontés (≈2,4:1 → 7,3:1), zéro `text-[10px]`, alts + `lazy`/`fetchpriority`,
  gardes reduced-motion sur ScrollReveal/CodeBackground/Wave/typing.
- **Phase 4** `f8a95ce` — layout : colonnes `items-start` + `space-y-12`, Tsidika à la une + grille uniforme 1→2→3,
  nav mobile scrollable (sans JS), 3 colonnes technos à 360 px (calcul réel 256 ≤ 260 px), hero vérifié 360→1440.
- **Phase 5** `dc17186` — SEO/SSG : `build-only` → `vite-ssg build`, route `/` minimale + `createMemoryHistory` SSR,
  `dist/index.html` 4,5 Ko → 93 Ko (`data-server-rendered`, contenu complet), h1 unique,
  meta/OG/JSON-LD alignés (Développeur Web, stack réelle, stage+poste+freelance), `robots.txt`/`sitemap.xml` OK,
  section `[build]` ajoutée à `netlify.toml` (manquante). `hreflang` volontairement absent (1 URL, toggle client).
- **Phase 6** `a08346e` — i18n : toggle → `<html lang>` + `<title>` + meta description (SSR-safe),
  dates/periodes/statuts/toasts/slogan/note branchés sur clés FR/EN, `competences.ts` bilingue,
  typo FR (’ U+2019, espace U+202F devant : ? ! ;), citation du témoignage conservée en FR (authenticité).

## 2. TODO(Hents) restants

1. Captures réelles : Tsidika, PlanetGame, AccessBible, académiques (`projets.ts:29,63,90,116`).
2. Nom public AccessBible vs Bible Interactive (`projets.ts:72`).
3. Contenu exact du projet RAG — demandé en entretien (`projets.ts:109`).
4. Dates PlanetGame sept. 2024 → janv. 2026 (`projets.ts:63`, `Experience.vue:72`).
5. Nom complet légal : bio « Henintsoa Ny Aina » vs ancien footer « Henintsoa Rakotonavalona » (`identite.ts:3`).
6. Image OG 1200×630 (`Hents.png` actuelle 1222×1222, `index.html:34`).
7. Envoi formulaire : `mailto:` actuel, basculer vers Netlify Forms si besoin (`ContactForm.vue:56`).
8. Icônes FastAPI/Expo/SQLite/OpenStreetMap à vérifier visuellement (URLs nouvelles).
9. `<title>` dit encore « Frontend » (alignement total avec `jobTitle` à arbitrer).

## 3. Scores Lighthouse

Non mesurés ici (pas de Chrome headless dans l'environnement).
À lancer : `npx lighthouse https://hentsrakoto.netlify.app --preset=desktop --view` (et mobile),
cibles : Accessibilité ≥ 95, SEO ≥ 95, Performance ≥ 90.

## 4. Design & points ouverts

- Tokens figeant l'existant (`tokens.css`), density 4 · motion 3 · variance 4 ; identité journal intacte.
- TypeScript conservé (justifié : portfolio lui-même en Vue + TS).
- Services « Ce que je développe » laissés intacts (validés par Analyse.md).
- Stubs SSR dans `main.ts` à retirer après fix durable (`useDarkMode`/`Wave` derrière `onMounted`).
- Masthead décoratif reste unilingue (choix assumé) ; `sameAs`/Upwork inchangés.
