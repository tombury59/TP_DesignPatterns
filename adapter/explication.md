## Adapter

### Problème qu’il résout :
Il permet d'utiliser une classe dont l'interface ne correspond pas à ce qu'attend le reste de ton application. Ça arrive souvent quand tu utilises des bibliothèques externes (Legacy ou tierces) que tu ne peux pas modifier.

### Principe de fonctionnement :
On crée une classe "Tampon" (l'Adaptateur). Elle a l'interface que ton code connaît, mais à l'intérieur, elle appelle les méthodes bizarres de la vieille classe et convertit les données.

### Structure (rôles des classes) :
- Client : Ton code actuel (qui veut des km).
- Target (Interface) : Le format que ton client attend.
- Adaptee (L'Adapté) : La classe bizarre/ancienne qu'on veut utiliser (celle qui donne des miles).
- Adapter (L'Adaptateur) : La classe qui fait la traduction entre les deux.

| <u>Avantages                    | <u>Inconvénients                               |  
|---------------------------------|------------------------------------------------|  
| Réutilisation : Tu peux utiliser du vieux code sans le casser. | Complexité : Ça rajoute une couche de classes intermédiaire. |  
| Séparation : Le code de conversion est isolé dans un seul fichier. | Si tu as 50 adaptateurs, ton projet devient un sac de nœuds de câbles. |

### Cas d'usage réel possible :
Paiements : Ton site attend un format payer(montant), mais l'API de Stripe demande processPayment(currency, value). Tu fais un adaptateur.

Anciennes BDD : Ton code moderne veut du JSON, mais ta vieille base de données renvoie du XML.