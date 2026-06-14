# Novadiags — Site vitrine

Site web statique (multipage HTML/CSS/JS) de **Novadiags — Diagnostics immobiliers**, à Saint-Jean-de-Védas (34) et dans la région de Montpellier / Hérault.

## Pages

| Fichier | Page |
|---------|------|
| `index.html` | Accueil |
| `diagnostic-vente.html` | Diagnostics avant vente |
| `diagnostic-location.html` | Diagnostics avant location |
| `diagnostic-copropriete.html` | Diagnostics copropriété |
| `amiante-travaux-demolition.html` | Amiante avant travaux & démolition |
| `dpe-projete.html` | DPE projeté & audit énergétique |
| `tarifs.html` | Tarifs 2026 |
| `faq.html` | FAQ |
| `contact.html` | Contact / devis |
| `mentions-legales.html` | Mentions légales |

## Caractéristiques

- **Design** : palette dérivée du logo (vert sauge + anthracite), typographies Cormorant Garamond + Inter.
- **Responsive** mobile-first, barre d'action fixe sur mobile.
- **SEO** : balises meta uniques par page, Open Graph, données structurées JSON-LD (LocalBusiness, FAQPage, Service, Breadcrumb), `sitemap.xml`, `robots.txt` (autorise les robots IA).
- **Visuels** : illustrations SVG sur-mesure dans le style du logo.

## Aperçu local

Depuis le dossier du projet :

```bash
python -m http.server 5544
```

Puis ouvrir http://localhost:5544

## À compléter avant mise en ligne

- Remplacer le domaine `novadiags.fr` dans les balises SEO si différent.
- Compléter les champs juridiques de `mentions-legales.html` (SIRET, RCS, TVA, hébergeur, n° de certification).
- Intégrer d'éventuelles photos réelles à la place des illustrations.

## Structure

```
assets/
├── css/style.css     # Design system complet
├── js/main.js        # Navigation, FAQ, formulaire, animations
└── img/              # Logo SVG, favicon
```
