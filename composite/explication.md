## Composite

### Problème qu’il résout :
Il évite de devoir vérifier à chaque fois : "Est-ce que c'est une liste ou un objet solo ?". On traite tout le monde de la même façon.

### Principe de fonctionnement :
On crée une structure en "arbre". Le parent (le groupe) délègue le boulot à ses enfants. Si tu demandes le prix d'un menu complet, le menu demande le prix de chaque plat et fait l'addition pour toi.

### Structure (rôles des classes) :
- Component : interface commune (ex : execute(), getEffort()).
- Leaf : tâche simple.
- Composite : contient des Components (feuilles ou composites) et délègue/agrège les appels.

| <u>Avantages                                                          | <u>Inconvénients                                                           |  
|-----------------------------------------------------------------------|----------------------------------------------------------------------------|  
| On peut créer des hiérarchies infinies (un groupe dans un groupe dans un groupe...). | C'est parfois dur de restreindre ce qu'on met dans un groupe. |  
| Le code client est super simple : il appelle une fonction et ça marche.                             |Ça peut devenir complexe si les objets sont trop différents. |

### Cas d'usage réel possible :
Planification de projet, génération automatique de rapports d'effort, arborescence de menu.
