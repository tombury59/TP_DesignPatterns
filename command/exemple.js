// 1. Le Récepteur : Celui qui sait bosser
class Lampe {
    allumer() { console.log("La lumière est allumée "); }
    eteindre() { console.log("La lumière est éteinte "); }
}

// 2. L'interface Command
class Commande {
    executer() { throw new Error("Oups, faut implémenter executer()"); }
    annuler() { throw new Error("Oups, faut implémenter annuler()"); }
}

// 3. La Commande Concrète
class CommandeLumiere extends Commande {
    constructor(lampe) {
        super();
        this.lampe = lampe;
    }
    executer() { this.lampe.allumer(); }
    annuler() { this.lampe.eteindre(); }
}

// 4. L'Appelant (Invoker) : La télécommande
class Telecommande {
    constructor() { this.historique = []; }

    taperBouton(commande) {
        commande.executer();
        this.historique.push(commande);
    }

    boutonRetour() {
        if (this.historique.length > 0) {
            const derniereAction = this.historique.pop();
            derniereAction.annuler();
        }
    }
}

// --- Utilisation ---
const maLampe = new Lampe();
const boutonOn = new CommandeLumiere(maLampe);
const maZappette = new Telecommande();

maZappette.taperBouton(boutonOn); // La lumière s'allume
maZappette.boutonRetour();        // La lumière s'éteint (Undo )