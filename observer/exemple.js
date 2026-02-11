// Joueur
class Joueur {
    constructor() {
        this.observateurs = [];
        this.pointsDeVie = 100;
    }

    // Ajouter abonné (interface, système de son, etc.)
    ajouterAbonne(obs) {
        this.observateurs.push(obs);
    }

    // Notifier tout le monde
    notifier() {
        this.observateurs.forEach(obs => obs.update(this.pointsDeVie));
    }

    recevoirDegats(montant) {
        this.pointsDeVie -= montant;
        console.log(`\n Joueur touché: PV restants : ${this.pointsDeVie}`);
        this.notifier(); // On prévient tous les abonnées
    }
}

// 2. Les Observateurs (Les abonnés)
class InterfaceHUD {
    update(pv) {
        console.log(`Update barre de vie : ${pv}%`);
    }
}

class SystemeSucces {
    update(pv) {
        if (pv <= 10) {
            console.log(`Sucess Débloqué : "xxxx" !`);
        }
    }
}

// 3. Utilisation dans le jeu
const monPerso = new Joueur();

const barreVie = new InterfaceHUD();
const succes = new SystemeSucces();

// On branche au joueur
monPerso.ajouterAbonne(barreVie);
monPerso.ajouterAbonne(succes);

// Suite
monPerso.recevoirDegats(20);
monPerso.recevoirDegats(75); // succès déclenché grace a son abonnement au joueur