## Builder

### Problème qu’il résout :
Il évite les "constructeurs télescopiques" (un constructeur avec 10 paramètres dont 8 sont souvent null ou undefined). Il permet de construire un objet complexe étape par étape, de manière très lisible.

### Principe de fonctionnement :
Au lieu de créer le PC d'un coup, on passe par un "Monteur" (le Builder). On lui dit : ajouteRAM(32), ajouteCarteGraphique("RTX 4090"), puis enfin build(). L'objet final n'est créé qu'à la toute fin.

### Structure (rôles des classes) :
- Product : L'objet complexe qu'on veut à la fin (ex: le PC).
- Builder : L'interface qui liste les étapes de fabrication (ajouteCPU, ajouteGPU).
- Concrete Builder : L'ouvrier qui assemble les pièces et garde l'objet en cours de route.
- Director (Optionnel) : Le chef de chantier qui connaît des recettes toutes faites (ex: "Construis-moi le modèle standard").

| <u>Avantages                    | <u>Inconvénients                               |  
|---------------------------------|------------------------------------------------|  
| Code très lisible : On comprend tout de suite ce qu'on ajoute à l'objet. | Beaucoup de code : Il faut créer une classe Builder en plus de la classe de base. |  
| Immuabilité : On peut créer l'objet final seulement quand on est sûr de notre config. | Ça peut être un peu "too much" pour des objets simples. |

### Cas d'usage réel possible :
Générateur de requêtes SQL : .select().from().where().orderBy().

Création de documents : Un builder de PDF où tu ajoutes un titre, puis un paragraphe, puis une image.