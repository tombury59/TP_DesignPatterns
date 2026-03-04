// 1. Le produit final
class PC {
    constructor() {
        this.cpu = "";
        this.gpu = "";
        this.ram = 0;
    }
    afficher() {
        console.log(`Config : CPU ${this.cpu}, GPU ${this.gpu}, RAM ${this.ram}Go`);
    }
}

// 2. Le Builder
class PCBuilder {
    constructor() {
        this.pc = new PC();
    }

    setCPU(modele) {
        this.pc.cpu = modele;
        return this; // On retourne "this" pour pouvoir chaîner les appels
    }

    setGPU(modele) {
        this.pc.gpu = modele;
        return this;
    }

    setRAM(quantite) {
        this.pc.ram = quantite;
        return this;
    }

    build() {
        return this.pc;
    }
}

// --- Utilisation (Super lisible !) ---
const monPC = new PCBuilder()
    .setCPU("Intel i9")
    .setRAM(32)
    .setGPU("RTX 4080")
    .build();

monPC.afficher();