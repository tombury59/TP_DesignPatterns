
## Observer

### Problème qu’il résout :
Éviter qu'un objet doive demander sans arrêt aux autres si un changement est effectué. Au lieu que tout le monde harcèle le sujet, c'est le sujet qui prévient tout le monde quand il se passe un truc. Ça découple complètement les objets.

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
| Tu peux ajouter des abonnés sans jamais toucher au code du Sujet. | Si tu oublies de te désabonner, l'objet reste en mémoire (fuite de mémoire).                                 |  
| Relation hyper flexible : on s'abonne/désabonne quand on veut.       | L'ordre des notifications n'est pas toujours garanti. |  

### Cas d’usage réel possible:
YouTube : Tu t'abonnes à une chaîne, tu reçois une notif quand une vidéo sort.
Bourse : Une action change de prix, tous les afficheurs et les bots de trading se mettent à jour.