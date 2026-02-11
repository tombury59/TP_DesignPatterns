
## Observer

### Problème qu’il résout :
Le pattern Observer résout le problème de la dépendance entre objets. Il permet à un objet (le Sujet) de notifier un nombre indéterminé d'autres objets (les Observateurs) d'un changement d'état.

### Principe de fonctionnement:
Le pattern repose sur une relation de type "Abonnement" (Publish/Subscribe).

- Le Sujet maintient une liste de ses Observateurs.
- Il fournit des méthodes pour s'abonner (subscribe/attach) ou se désabonner (unsubscribe/detach).
- Lorsqu'un événement survient, le Sujet parcourt sa liste et appelle une méthode spécifique sur chaque observateur.

### Structure (rôles des classes):
- Subject : L'objet surveillé. Il possède la liste des observateurs et déclenche la notif.
- Observateur (Observer) : L'interface ou classe abstraite qui définit la méthode de mise à jour.
- Observateurs Concrets : Les classes qui réagissent à la notif reçue.

| <u>Avantages                    | <u>Inconvénients                                                           |  
|---------------------------------|----------------------------------------------------------------------------|  
| Contrôle strict de l'instanciation | Peut introduire des problèmes pour tester                                  |  
| Accès global à l'instance       | Peut masquer des dépendances et rendre le code plus difficile à comprendre |  

### Cas d’usage réel possible:
une connexion unique à une base de données SQL