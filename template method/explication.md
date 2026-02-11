
## Template Method

### Problème qu’il résout :
Il évite la duplication de code en centralisant les parties communes d'un algorithme et en forçant les classes enfants à ne remplir que les "trous" spécifiques.

### Principe de fonctionnement:
On crée une classe parente qui contient une méthode directrice (le Template). Cette méthode appelle d'autres fonctions dans l'ordre. Certaines étapes sont codées en dur dans le parent, tandis que d'autres sont laissées à la charge des classes enfants.

### Structure (rôles des classes):
- Classe Abstraite : Définit la structure globale et contient le code commun.
- Méthodes "Hooks" : Les méthodes vides que l'enfant doit remplir.
- Classes Concrètes :Elles héritent du parent et implémentent uniquement les détails.

| <u>Avantages                                                          | <u>Inconvénients                                                           |  
|-----------------------------------------------------------------------|----------------------------------------------------------------------------|  
| Le code commun n'est écrit qu'une seule fois. | L'enfant est obligé de suivre l'ordre du parent, il n'a pas le contrôle global                                |  
| Garantit que tous les objets suivent exactement le même processus.                             | Il faut regarder dans deux classes (parent et enfant) pour comprendre tout le flux. |  

### Cas d’usage réel possible:
Un système de chargement de niveau : tous les niveaux chargent la carte et placent le joueur. Mais chaque niveau charge des décors différents.