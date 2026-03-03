// 1. L'interface (Le contrat)
class EtatLecteur {
    cliquerLecture(lecteur) { throw "À implémenter"; }
}

// 2. Les états concrets
class EtatEnPause extends EtatLecteur {
    cliquerLecture(lecteur) {
        console.log("▶️ Musique lancée !");
        lecteur.changerEtat(new EtatEnLecture());
    }
}

class EtatEnLecture extends EtatLecteur {
    cliquerLecture(lecteur) {
        console.log("⏸️ Musique en pause.");
        lecteur.changerEtat(new EtatEnPause());
    }
}

// 3. Le Lecteur (Context)
class LecteurMusique {
    constructor() {
        this.etat = new EtatEnPause(); // État par défaut
    }

    changerEtat(nouvelEtat) {
        this.etat = nouvelEtat;
    }

    appuyerSurBouton() {
        // Il ne sait pas ce qu'il fait, il demande à l'état actuel
        this.etat.cliquerLecture(this);
    }
}

const monLecteur = new LecteurMusique();

monLecteur.appuyerSurBouton(); // Affiche "lancée"
monLecteur.appuyerSurBouton(); // Affiche "pause"
monLecteur.appuyerSurBouton();