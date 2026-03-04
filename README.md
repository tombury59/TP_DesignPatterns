# TP – Comprendre et implémenter des Design Patterns

Ce dépôt contient un ensemble d'exemples et d'explications en français pour plusieurs Design Patterns (patrons de conception). Chaque pattern traité dispose de :
- `explication.md` : une explication rédigée en français (problème résolu, principe, structure, avantages / inconvénients, cas d'usage).
- `exemple.js` : un exemple simple, original et exécutable en JavaScript (Node.js) illustrant le pattern dans un contexte métier inventé.

Principe du TP
- Seules les patterns que vous comprenez doivent être documentées et implémentées.
- Ressource de référence obligatoire : https://refactoring.guru/fr/design-patterns (interdit de copier les exemples ou les contextes du site).
- Les exemples ici sont originaux, simples et commentés en français.

Langage utilisé
- JavaScript (Node.js). Les exemples sont pensés pour être exécutés avec Node.js (version 12+ recommandée).

Structure du dépôt (patterns présents)
- `abstract factory/`  : Exemples d'usines abstraites (création de familles d'objets).
- `adapter/`          : Adapter une interface existante à une autre.
- `builder/`          : Construction pas-à-pas d'objets complexes.
- `command/`          : Encapsuler des actions en objets (undo/redo possible).
- `composite/`        : Traiter objets individuels et groupes uniformément.
- `decorator/`        : Ajouter dynamiquement des responsabilités à des objets.
- `facade/`           : Fournir une interface simple à un sous-système complexe.
- `factory/`          : Méthodes/fabriques pour créer des objets sans exposer la logique.
- `observer/`         : Notifier automatiquement des abonnés lors d'un changement d'état.
- `singleton/`        : Assurer une seule instance globale d'une classe.
- `state/`            : Changer le comportement d'un objet selon son état interne.
- `strategy/`         : Déléguer un algorithme interchangeable via une interface commune.

Brèves descriptions (en une phrase)
- Abstract Factory : Créer des familles d'objets cohérentes sans lier le code aux classes concrètes.
- Adapter         : Faire communiquer deux interfaces incompatibles.
- Builder         : Séparer la construction d'un objet complexe de sa représentation.
- Command         : Encapsuler une requête en tant qu'objet.
- Composite        : Représenter hiérarchie d'objets et uniformiser le traitement.
- Decorator       : Étendre les fonctionnalités d'un objet dynamiquement.
- Facade          : Simplifier l'accès à un ensemble d'API complexes.
- Factory         : Fournir une interface pour créer des objets sans connaître la classe exacte.
- Observer        : Permettre à des objets d'observer et réagir aux changements d'un sujet.
- Singleton       : Garantir une seule instance partagée dans l'application.
- State           : Modifier le comportement en fonction de l'état interne.
- Strategy        : Remplacer dynamiquement l'algorithme utilisé.

Exécution des exemples (PowerShell)
- Ouvrir PowerShell dans la racine du dépôt :

  node .\abstract factory\exemple.js
  node .\adapter\exemple.js
  node .\builder\exemple.js
  node .\command\exemple.js
  node .\composite\exemple.js
  node .\decorator\exemple.js
  node .\facade\exemple.js
  node .\factory\exemple.js
  node .\observer\exemple.js
  node .\singleton\exemple.js
  node .\state\exemple.js
  node .\strategy\exemple.js

(Remarque : si votre chemin contient des espaces, entourez le chemin entre guillemets ou utilisez des chemins relatifs comme ci-dessus.)

Conseils pour chaque dossier
- `explication.md` : lisible, en français, reformulé avec vos propres mots. Inclure : nom, problème, principe, structure (rôles), avantages/inconvénients, cas d'usage.
- `exemple.js` : code simple, commenté en français, script `main` / démonstration pour montrer le pattern en action.

Bonnes pratiques
- Respectez SOLID et la lisibilité du code.
- N'utilisez pas de générateur automatique pour rédiger les explications.
- Testez vos exemples localement avant rendu.

Rendu attendu
- Un dépôt GitHub avec :
  - Les dossiers de pattern (au moins 4 patterns correctement compris).
  - Les `explication.md` et `exemple.js` pour chaque pattern traité.
  - Ce `README.md` mis à jour expliquant le projet et comment exécuter les exemples.

Si tu veux, je peux :
- Résumer un pattern en quelques mots (ex. Strategy en 10 mots).
- Réécrire ou simplifier l'`explication.md` d'un pattern particulier.
- Générer ou vérifier un `exemple.js` simple et exécuté localement pour un pattern donné.

Indique lequel tu veux que j'explique ou améliore en premier.
