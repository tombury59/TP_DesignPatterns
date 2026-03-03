## State

### Problème qu’il résout :
Éviter les machines à gaz avec des if (etat == "LECTURE") { ... } else if (etat == "PAUSE") { ... }.
Au lieu d'avoir un seul gros objet qui gère 50 conditions, on crée une petite classe pour chaque état. L'objet principal délègue tout le boulot à l'état actuel.

### Principe de fonctionnement :
L'objet principal (le Lecteur) possède une variable etatActuel. Quand tu cliques sur un bouton, le Lecteur dit juste : etatActuel.clic(). Si l'état change (ex: de Pause à Lecture), il remplace l'objet dans etatActuel.

### Structure (rôles des classes) :
- Context : contient une référence à un State.
- State : interface avec actions (assign, resolve, close).
- ConcreteStates : implémentations par état.

| <u>Avantages                                                                                     | <u>Inconvénients                                                       |  
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|  
| Zéro "if" compliqués : Le code de chaque état est bien rangé dans son fichier. | Si t'as seulement 2 états tout simples, c'est un peu over engineering. |  
| Évolutif : Ajouter un état "En chargement" est super facile.                         | Ça crée beaucoup de petites classes.                                   |

### Cas d'usage réel possible :
Personnage de jeu vidéo : S'il dort, il ne peut pas sauter. S'il saute, il ne peut pas s'accroupir.
Feu de signalisation : Vert -> Orange -> Rouge.