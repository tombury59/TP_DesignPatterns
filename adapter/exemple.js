// 1. Ce que ton appli attend (Le format standard)
class CalculateurKm {
    getDistance() { return 100; } // Renvoie 100 km
}

// 2. La bibliothèque externe bizarre (L'Adaptee)
class USAMapsLib {
    getDistanceInMiles() { return 62.1; } // Renvoie des Miles
}

// 3. L'ADAPTATEUR
class MapsAdapter extends CalculateurKm {
    constructor(usaLib) {
        super();
        this.usaLib = usaLib;
    }

    getDistance() {
        // On appelle la vieille méthode et on convertit en vol
        const miles = this.usaLib.getDistanceInMiles();
        return Math.round(miles * 1.609); // Conversion en km
    }
}

// --- Utilisation ---

const vieilleLib = new USAMapsLib();
const monAppli = new MapsAdapter(vieilleLib);

console.log("Distance pour mon appli :", monAppli.getDistance(), "km");
// Affiche : "Distance pour mon appli : 100 km"