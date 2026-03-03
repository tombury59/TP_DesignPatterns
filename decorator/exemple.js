// 1. La base (Interface)
class Burger {
    prix() { return 5; }
    nom() { return "Burger Simple"; }
}

// 2. Le Décorateur de base (L'emballage)
class Supplement extends Burger {
    constructor(burger) {
        super();
        this.burger = burger; // On injecte le burger qu'on décore
    }
}

// 3. Les suppléments réels
class Fromage extends Supplement {
    prix() { return this.burger.prix() + 1; }
    nom() { return this.burger.nom() + ", Fromage"; }
}

class Bacon extends Supplement {
    prix() { return this.burger.prix() + 1.5; }
    nom() { return this.burger.nom() + ", Bacon"; }
}

// --- La commande ---

let monBurger = new Burger(); // Burger simple à 5€
monBurger = new Fromage(monBurger); // On l'emballe dans du fromage (6€)
monBurger = new Bacon(monBurger);   // On rajoute du bacon (7.5€)
monBurger = new Fromage(monBurger); // Allez, double fromage ! (8.5€)

console.log("Composition :", monBurger.nom());
console.log("Prix total :", monBurger.prix(), "€");