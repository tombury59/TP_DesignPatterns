## Facade

### Problème qu’il résout :
Éviter que l'utilisateur (le code client) ait besoin de connaître par cœur le fonctionnement interne de 10 classes différentes pour faire une action de base.

### Principe de fonctionnement :
On crée une classe qui "emballe" tous les objets complexes du moteur. Cette classe propose une fonction demarrer(). À l'intérieur, elle s'occupe de réveiller la batterie, de lancer le démarreur et d'injecter l'essence dans le bon ordre.

### Structure (rôles des classes) :
- Façade (Le Contact) : La classe qui simplifie tout.
- Sous-systèmes (Les pièces) : La Batterie, le Démarreur, l'Injecteur, etc.
- Client (Le Conducteur) : Il interagit seulement avec la Façade.

| <u>Avantages                    | <u>Inconvénients                               |  
|---------------------------------|------------------------------------------------|  
| Simple : On n'a pas besoin d'être mécano pour conduire. | On perd en contrôle précis (on ne peut pas lancer juste l'injecteur sans le reste). |  
| Moins d'erreurs : La façade gère le bon ordre des opérations. | Si la façade casse, on ne peut plus rien faire. |

### Cas d'usage réel possible :
Un Micro-ondes : Tu appuies sur "Popcorn", la façade règle la puissance et le temps toute seule.

Un PC : Le bouton "Power" lance le BIOS, charge l'OS et les pilotes sans que tu fasses rien.