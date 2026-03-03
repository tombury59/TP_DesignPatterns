// Le contrat/ interface : Tout le monde doit pouvoir donner son temps
class ElementProjet {
    getTemps() { throw new Error("Il faut implémenter getTemps()"); }
}

// 2. La tâche de base (La feuille)
class TacheSimple extends ElementProjet {
    constructor(nom, heures) {
        super();
        this.nom = nom;
        this.heures = heures;
    }
    getTemps() { return this.heures; }
}

// 3. Le groupe de tâches (Le composite)
class ListeDeTaches extends ElementProjet {
    constructor(nom) {
        super();
        this.nom = nom;
        this.contenu = []; // Peut contenir des TachesSimples OU d'autres Listes
    }

    ajouter(element) { this.contenu.push(element); }

    getTemps() {
        // ²on fait la somme de tout
        return this.contenu.reduce((total, el) => total + el.getTemps(), 0);
    }
}

// --- Utilisation ---

const t1 = new TacheSimple("Design", 2);
const t2 = new TacheSimple("Code", 5);

const blocDev = new ListeDeTaches("Partie Dev");
blocDev.ajouter(t1);
blocDev.ajouter(t2);

const projetGlobal = new ListeDeTaches("Mon Super Projet");
projetGlobal.ajouter(blocDev); // On met un groupe dans un groupe
projetGlobal.ajouter(new TacheSimple("Recette", 1));

console.log("Temps total du projet :", projetGlobal.getTemps(), "heures");