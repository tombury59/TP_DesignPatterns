class BalleMatch {
    constructor() {
        if (BalleMatch.instance) {
            console.log("Une balle est déja mis en jeu.");
            return BalleMatch.instance;
        }

        this.position = "Au service";
        this.vitesse = 0;

        BalleMatch.instance = this;
        console.log("Balle en jeu.");
    }

    frapper(force) {
        this.vitesse = force * 2;
        console.log(`La balle va à ${this.vitesse} km/h.`);
    }
}

// Je sers
const maBalle = new BalleMatch();
maBalle.frapper(10);

// Balle extérieure introduite
const balleExterieur = new BalleMatch();

// Vérification : C'est forcément la même balle
console.log("\n--- État ---");
console.log("Same Balle ? ", maBalle === balleExterieur ? "true" : "false");

balleExterieur.frapper(20);
console.log(`Vitesse vue par moi : ${maBalle.vitesse} km/h`);
// print 40, car balleExterieur === maBalle .