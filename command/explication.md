## Command

### Problème qu’il résout :
Il sépare l'objet qui demande l'action (la télécommande) de l'objet qui sait faire l'action (la lampe). Ça permet de faire des systèmes d'Annuler/Rétablir (Undo/Redo) très facilement.

### Principe de fonctionnement :
Au lieu d'appeler directement lampe.allumer(), on crée un objet CommandeAllumer. Cet objet a une méthode executer(). La télécommande se contente d'appuyer sur executer() sans savoir ce qu'il y a dedans.

### Structure (rôles des classes) :
- Command : L'interface : toute commande doit avoir une méthode executer(), ....
- ConcreteCommand : encapsule l'action et le receveur.
- Receiver : l'objet qui réalise le travail.
- Invoker : appelle execute() et peut garder un historique.

| <u>Avantages                    | <u>Inconvénients                               |  
|---------------------------------|------------------------------------------------|  
| Undo / Redo : Comme chaque action est un objet, on peut les stocker dans une liste pour revenir en arrière.       | Ça fait beaucoup de petites classes pour des actions parfois toutes bêtes. |  
| On peut programmer des actions dans le futur (file d'attente). | Le code est plus fragmenté.                             |

### Cas d'usage réel possible :
Une télécommande universelle, un éditeur de texte avec Undo/Redo, ou un système de tâches à exécuter plus tard.
