# TP – Comprendre et implémenter des Design Patterns

Ce dépôt contient mon travail pratique sur plusieurs Design Patterns (patrons de conception). L'objectif est de montrer une compréhension réelle de chaque pattern traité : explication rédigée avec mes propres mots, justification du choix d'un contexte métier original, et un exemple de code fonctionnel en JavaScript.

Résumé du TP
- Objectif pédagogique : Expliquer, identifier la problématique, implémenter et inventer un exemple original pour chaque pattern compris.
- Ressource obligatoire : https://refactoring.guru/fr/design-patterns (interdit de copier les exemples du site).
- Contraintes : pas de copie, contextes originaux, code testé et documenté, respect des principes SOLID.

Langage utilisé
- JavaScript (Node.js). Les exemples sont fournis sous forme de fichiers `exemple.js` dans chaque dossier de pattern.

Structure du dépôt
- `factory/`
    - `explication.md` (explication du pattern)
    - `exemple.js` (exemple exécutable)
- `observer/`
    - `explication.md`
    - `exemple.js`
- `singleton/`
    - `explication.md`
    - `exemple.js`
- `template method/`
    - `explication.md`
    - `exemple.js`

Comment exécuter un exemple (PowerShell)
- Depuis la racine du dépôt, exécuter un exemple avec Node.js :

  node .\factory\exemple.js
  node .\observer\exemple.js
  node .\singleton\exemple.js
  node "template method\exemple.js"

