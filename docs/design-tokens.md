# Design tokens — The Hentsrakoto Journal (Phase 0)

Branche : `refonte`. Objectif : figer l'existant journal (aucun changement visuel),
pas changer de style. Params retenus : density 4 · motion 3 · variance 4.

## 1. Audit express (src réel)

- Stack : Vue 3.5 + Vite 7 + TypeScript 5.9 + Tailwind 3.4 (`darkMode: 'class'`)
  + `vue-i18n` (FR/EN) + `vue-router` (routes vides) + `lucide-vue-next`.
- `vite-ssg` est en dépendance et utilisé dans `src/main.ts` (`ViteSSG`),
  mais `vite.config.ts` ne charge que `vue()` + `vue-devtools` → migration
  pré-rendu à finaliser en Phase 5.
- Dark mode : classe `.dark` sur `<html>` (`src/composables/useDarkMode.ts`,
  persistance `localStorage.theme`, fallback `prefers-color-scheme`).
- i18n : `src/locales/fr.ts` + `en.ts`, mêmes clés ; quelques textes encore
  en dur dans `Project.vue` via `locale.value === 'en' ? …`.
- Contenu non séparé : projets en dur dans `Project.vue` (`computedProjects`),
  compétences en dur dans `Competence.vue` → à migrer vers `src/data/` en Phase 2.
- Un seul `<h1>` existant (`App.vue` : "The Hentsrakoto" + `h2` "Journal") ;
  `index.html` contient un `<h1>` de secours dans `<noscript>` (/archives,
  pas de doublon à l'exécution normale — à re-vérifier en Phase 5 avec SSG).

## 2. Tokens (valeurs constatées, visuel inchangé)

Fichier source : `src/assets/tokens.css` (`:root` + `.dark` / `[data-theme="dark"]`).

| Token | Clair | Sombre | Usage constaté |
|---|---|---|---|
| `--color-paper` | `#FDFBF7` | `#121212` | fond wrapper `App.vue`, `body` |
| `--color-paper-soft` | `#F9FAFB` | `#1A1A1A` | cartes grises |
| `--color-ink` / `--color-text` | `#111827` | `#F3F4F6` | texte courant |
| `--color-text-light` | `#4B5563` | `#A3A3A3` | texte secondaire |
| `--color-primary` | `#000000` | `#E5E5E5` | titres, bordures |
| `--color-secondary` | `#555555` | `#A3A3A3` | badges, meta |
| `--font-serif` | Playfair Display | — | `h1-h6` |
| `--font-sans` | Merriweather | — | `body`, meta |
| `--font-journal` | Old Standard TT | — | masthead, titres sections |
| `--font-mono` | Fira Code | — | code |
| `--text-masthead` | `clamp(3rem,10vw,8rem)` | — | `App.vue` h1 |
| `--text-section` | `clamp(2.25rem,6vw,4.5rem)` | — | titres `h2` sections |
| `--shadow-hard` | `4px 4px 0 #000` | `4px 4px 0 #fff` | cartes compétences |
| `--transition-theme` | `300ms` | `0ms` si `prefers-reduced-motion` | `transition-colors` |

Regles journal : double filet 6px masthead/footer, filets 3px têtes de section,
cartes 2px, séparateurs dashed, wrapper 96 % → 94 %, ombre douce `0 0 40px`.

## 3. Décisions (entretien)

- Nom affiché : `Hentsrakoto` partout ; nom complet seulement « À propos »
  + mentions légales (confirmé).
- Dispo : stage + poste + freelance (confirmé).
- Projets Phase 2 : 1 Tsidika, 2 PlanetGame, 3 AccessBible, 4 académique/IA
  type RAG (confirmé). Aventure Voyage / AD Tour Guide / StudySquad : non retenus.
- Logo : garder le masthead textuel + favicon ; prévoir `public/logo.svg`
  sans le créer.

## 4. TODO(Hents) / Phase suivante

- `TODO(Hents)` : captures réelles + liens demo/code des 4 projets (sinon
  placeholder neutre, jamais d'image stock) ; contenu exact du projet RAG
  (stack, rôle, année, lien) ; autorisation clients si ajout futur.
- Polices déclarées mais non chargées dans `index.html` : Merriweather,
  Old Standard TT, JetBrains Mono (seuls Playfair Display + Fira Code
  sont chargés) → l'OS/servo fait le fallback ; à trancher en Phase 4
  (charger ou retirer de la config).
- `scroll-behavior: smooth` + transitions sans garde `prefers-reduced-motion`
  dans les composants → à traiter en Phase 3 (le token coupe déjà la durée).
- Mots coupés (`break-all` + `hyphens-auto`), e-mail coupé, lettrines,
  logo PlanetGame `object-cover`, carré déco `Competence.vue:55`, curseur
  typing → Phase 1 (aucune correction appliquée ici).
