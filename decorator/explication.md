## Decorator

### Contexte inventé :
Une borne de commande de burgers. On a un burger de base (le "Simple"). Le client peut ajouter autant de suppléments qu'il veut : Fromage, Bacon, Steak supplémentaire. On veut calculer le prix final sans avoir une classe pour chaque combinaison (ex: BurgerSimpleFromageBacon).

### Problème qu’il résout :
Éviter l'explosion du nombre de classes. Si tu as 5 ingrédients, tu aurais besoin de dizaines de classes pour couvrir toutes les recettes possibles. Le décorateur permet d'ajouter des ingrédients à la volée sur un seul objet de base.

### Principe de fonctionnement :
On prend le burger de base et on l'enveloppe dans un "emballage" (le décorateur). Cet emballage a la même tête que le burger : il a un prix et un nom. Quand on demande le prix de l'ensemble, l'emballage ajoute son propre prix (ex: +1€ pour le fromage) à celui du burger qu'il contient.

### Structure (rôles des classes) :
- Composant (Interface) : Le contrat. Il dit : "Tout ce qui se mange ici doit avoir un prix() et une description()".
- Composant Concret (Le Burger de base) : Le pain et le steak (le "Simple").
- Décorateur de Base : Une classe abstraite qui contient un Burger. Elle sert de pont entre la base et les suppléments.
- Décorateurs Concrets (Les Suppléments) : Fromage, Bacon, Oignons. Ils ajoutent leur logique par-dessus l'objet qu'ils protègent.

| <u>Avantages                    | <u>Inconvénients                               |  
|---------------------------------|------------------------------------------------|  
| Flexibilité totale : Tu peux commander un burger avec 4 tranches de fromage si ça te chante. | Complexité : Si tu as trop de couches, débugger pour savoir quel ingrédient a foiré est galère. |  
| Single Responsibility : La classe Bacon ne gère que le prix du bacon. | Ordre : Parfois l'ordre compte (le fromage doit être sur le steak chaud !). |

### Cas d'usage réel possible :
Filtres photo : Image de base -> Décorateur Noir et Blanc -> Décorateur Flou.
Notifications : Message de base -> Décorateur SMS -> Décorateur Email.