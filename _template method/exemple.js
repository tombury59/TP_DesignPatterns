
class Ennemi {

    spawn() {
        this.positionner();
        this.emettreSon();
        this.jouerAnimation();
        this.chargerIA();
        console.log("Ennemi prêt\n");
    }

    // Étapes communees
    positionner() { console.log("Placement sur la carte"); }
    emettreSon() { console.log("Son de spawn"); }

    // Étapes spécifiques
    jouerAnimation() { throw new Error("Animation non définie "); }
    chargerIA() { throw new Error("IA non définie"); }
}

// spécialisations
class Slime extends Ennemi {
    jouerAnimation() { console.log("Animation rebondit"); }
    chargerIA() { console.log("Saute aléatoirement vers le joueur."); }
}

class Zombie extends Ennemi {
    jouerAnimation() { console.log("Animation sortir de terre"); }
    chargerIA() { console.log("S'approche doucement du joueur"); }
}

// utilisation
const petitMonstre = new Slime();
petitMonstre.spawn();

const boss = new Zombie();
boss.spawn();