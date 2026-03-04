## Abstract Factory

### Problème qu’il résout :
Il permet de créer des groupes d'objets liés (des "familles") sans que ton code ait besoin de savoir quelle classe précise il utilise. Ça évite les mélanges bizarres entre différents styles ou marques.

### Principe de fonctionnement :
On définit une "Super Usine" (l'interface Abstract Factory). Chaque sous-usine (Gastro, Fast-Food) implémente cette interface pour fabriquer ses propres versions des objets.

### Structure (rôles des classes) :
- Abstract Factory : L'interface qui liste tout ce qu'on peut fabriquer (ex: creerPlat();creerDessert()).
- Concrete Factories : Les usines spécifiques (ex: UsineFastFood, UsineGastro).
- Produits Abstraits : Les interfaces pour chaque type d'objet (ex: Plat, Dessert).
- Produits Concrets : Les vrais objets (ex: Burger, Rizotto, Glace ..).

| <u>Avantages                    | <u>Inconvénients                                                                                        |  
|---------------------------------|---------------------------------------------------------------------------------------------------------|  
| Cohérence : Tu es sûr que tous les éléments d'un menu viennent du même style (fast-food ou gastro). | Complexité : Ça peut être lourd à mettre en place si tu n'as pas besoin de plusieurs familles d'objets. |  
| Extensible : Ajouter une nouvelle famille (ex: UsineVegan) ne casse pas le code existant. | over-engeenering : Si tu n'as qu'une seule famille d'objets, c'est du gaspillage de temps et de code.   |

### Cas d'usage réel possible :
Interface (UI) : Une usine "Windows" (boutons carrés) vs une usine "Mac" (boutons ronds).

Jeux Vidéo : Une usine "Niveau d'Enfer" (monstres de feu, lave) vs "Niveau de Glace" (pingouins, neige).