// La Commande : les données
class Commande {
    constructor(km, poids) {
        this.km = km;
        this.poids = poids;
    }
}

// Interface
// Ont la simule avec le throw pour forcer à implementer les méthodes
class StrategyLivraison {
    calculer(commande) {
        throw new Error("Il faut implémenter la méthode calculer !");
    }
}

// ConcreteStrategies

class CalculRapide extends StrategyLivraison {
    calculer(c) { return 10 + c.km * 0.5 + c.poids * 0.2; }
}

class CalculPasCher extends StrategyLivraison {
    calculer(c) { return 5 + c.km * 0.3 + c.poids * 0.1; }
}

class CalculEcolo extends StrategyLivraison {
    calculer(c) { return 6 + c.km * 0.25 + c.poids * 0.05; }
}

// Cerveau

class Calculateur {
    constructor(strategie) {
        this.strategie = strategie;
    }

    setStrategie(nouvelleStrategie) {
        this.strategie = nouvelleStrategie;
    }

    calculerPrix(commande) {
        // Le contexte délègue le boulot à la stratégie actuelle
        return this.strategie.calculer(commande);
    }
}

const commande = new Commande(100, 10);
const appli = new Calculateur(new CalculRapide());

console.log("Mode Rapide :", appli.calculerPrix(commande), "€");

// Switch dynamique (clic utilisateur)
appli.setStrategie(new CalculPasCher());
console.log("Mode Pas Cher :", appli.calculerPrix(commande), "€");