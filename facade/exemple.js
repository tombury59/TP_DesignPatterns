// 1. Les pièces compliquées
class Batterie { charger() { console.log("Batterie : OK (12V)"); } }
class Demarreur { lancer() { console.log("Démarreur : Rotation moteur..."); } }
class Essence { injecter() { console.log("Essence : Injection dans les cylindres"); } }

// 2. LA FAÇADE (La voiture)
class Voiture {
    constructor() {
        this.batterie = new Batterie();
        this.demarreur = new Demarreur();
        this.essence = new Essence();
    }

    // Le bouton unique
    tournerLaCle() {
        console.log("--- Tentative de démarrage ---");
        this.batterie.charger();
        this.essence.injecter();
        this.demarreur.lancer();
        console.log("Vroum ! Le moteur tourne.");
    }
}

// --- Utilisation ---
const maCaisse = new Voiture();
maCaisse.tournerLaCle(); // Le conducteur ne gère pas la batterie, c'est automatique.