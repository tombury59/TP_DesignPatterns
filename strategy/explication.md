## Strategy

### Contexte inventé :
C'est un site de livraison. L'utilisateur peut choisir entre Rapide, Éco ou Écolo. Le système doit pouvoir switcher entre ces modes de calcul instantanément, selon ce que l'utilisateur coche sur la page.

### Problème qu’il résout :
Éviter d'écrire un énorme bloc de if/else dans son code. Ça permet de ranger chaque logique de calcul dans sa propre petite boîte et d'en changer sans toucher au reste du programme.

### Principe de fonctionnement :
On crée une interface que toutes les méthodes de livraison doivent suivre. Le programme principal garde une variable "stratégie actuelle" et lui dit juste : "Vas-y, calcule-moi le prix", sans avoir besoin de savoir comment ça se passe à l'intérieur.

### Structure (rôles des classes) :
- Strategy : C'est le contrat. Elle dit : "Toute stratégie doit avoir une fonction calculer(commande)".
- ConcreteStrategies : C'est là qu'on code les vrais calculs (ex: CalculRapide, CalculPasCher, CalculEcolo).
- Context : C'est le cerveau de l'appli. Il a une stratégie sous le coude et l'utilise pour sortir le prix final.

| <u>Avantages                    | <u>Inconvénients                               |  
|---------------------------------|------------------------------------------------|  
|  Code super propre : chaque calcul est rangé à part. | Ça fait créer pas mal de petites classes/fichiers. |  
| Facilité de test et d'extension.       | Peut être over engineering                             |  


### Cas d'usage réel possible :
Choisir comment trier une liste (par date, par nom), choisir un mode de paiement (Paypal ou CB), ou appliquer différents filtres sur une photo.