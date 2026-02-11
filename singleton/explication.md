
## Factory

### Problème qu’il résout :
Éviter de dupliquer la logique de création d'objets à travers tout le code et centraliser la décision de "quel objet créer".

### Principe de fonctionnement:
On attribue a un classe (la factory) la responsabilité de créer les objets. Cette classe peut décider quel type d'objet créer en fonction de paramètres d'entrée ou de la configuration.

### Structure (rôles des classes):
- Le produit : Définit le contrat (les méthodes) que tous les objets créés doivent respecter.
- Les produits concrets : Les différentes classes qui implémentent le produit et représentent les objets spécifiques à créer.
- factory : La classe qui crée les objets.

| <u>Avantages                    | <u>Inconvénients                                                           |  
|---------------------------------|----------------------------------------------------------------------------|  
| Centralise la création au même endroit. | Ajoute des classes au projet.                                  |  
| Facile d'ajouter un nouveau type d'objet.       | Un peu trop complexe pour des petits projets. |  

### Cas d’usage réel possible:
Un système qui génère différents types de boutons (Windows, Mac, Linux) selon l'ordinateur de l'utilisateur.