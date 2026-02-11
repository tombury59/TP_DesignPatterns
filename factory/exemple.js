// 1. Les classes (Le nom doit finir par "Mob")
class FacileMob {
    constructor() { this.nom = "Slime"; }
    attaquer() { console.log("Le Slime saute !"); }
}

class DifficileMob {
    constructor() { this.nom = "Zombie"; }
    attaquer() { console.log("Le Zombie attaque !"); }
}

// 2. La Fabrique (Logique identique à ton exemple PHP)
class MonsterFactory {
    static spawn(type) {
        // On transforme "facile" en "FacileMob" (ucfirst + suffixe)
        const className = type.charAt(0).toUpperCase() + type.slice(1) + "Mob";

        const classes = { FacileMob, DifficileMob };

        if (classes[className]) {
            return new classes[className]();
        }

        throw new Error(`La classe ${className} n'existe pas.`);
    }
}

const mob1 = MonsterFactory.spawn("facile"); // Cherche "FacileMob"
mob1.attaquer();

const mob2 = MonsterFactory.spawn("difficile"); // Cherche "DifficileMob"
mob2.attaquer();