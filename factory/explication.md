
## Factory

### Problème qu’il résout :
Créer des objets sans coupler le code appelant aux classes concrètes. Sans Factory, l'ajout d'un nouveau type d'objet impose de modifier tous les blocs "if"

### Principe de fonctionnement:
C'est une interface de création unique. Elle reçoit une une chaîne de caractères et utilise une convention de nommage (ex concat + "chaine de caractère" ) pour identifier et instancier la classe correspondante.

### Structure (rôles des classes):
- classes Produits : Les classes finales à instancier.
- registre de Classes : Un objet de correspondance (Mapping) qui liste les classes disponibles pour la Factory.
- methode de création (spawn) : Logique qui transforme la saisie, vérifie l'existence de la classe et génère l'instance.

| <u>Avantages                                                                                     | <u>Inconvénients                                                           |  
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|  
| On ajoute un Produits sans modifier une seule ligne de la Factory. | Dépendance à la nomenclature : Le code repose sur une convention de nommage stricte.                                  |  
| Toute modification de la logique d'apparition se fait à un seul endroit.                         | Toute modification de la logique d'apparition se fait à un seul endroit |  

### Cas d’usage réel possible:
La gestion d'ennemis dans un moteur de jeu (entité à créer dépend d'une donnée externe (fichier JSON...)).