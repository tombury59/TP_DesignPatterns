// Exemple Abstract Factory : provision de ressources cloud (AWS vs GCP)

// Produits concrets - Database
class AwsDatabase {
    connect() { console.log('AWS DB connecté (RDS simulé)'); }
}
class GcpDatabase {
    connect() { console.log('GCP DB connecté (Cloud SQL simulé)'); }
}

// Produits concrets - Storage
class AwsStorage {
    upload(file) { console.log(`Upload vers S3 (AWS) : ${file}`); }
}
class GcpStorage {
    upload(file) { console.log(`Upload vers Cloud Storage (GCP) : ${file}`); }
}

// Factory concrètes
class AwsFactory {
    createDatabase() { return new AwsDatabase(); }
    createStorage() { return new AwsStorage(); }
}

class GcpFactory {
    createDatabase() { return new GcpDatabase(); }
    createStorage() { return new GcpStorage(); }
}

// Client - reçoit une factory et utilise les produits sans connaître le fournisseur concret
function provisionStack(factory) {
    const db = factory.createDatabase();
    const storage = factory.createStorage();

    db.connect();
    storage.upload('rapport.zip');
}

console.log('\n--- Provisionnement AWS ---');
provisionStack(new AwsFactory());

console.log('\n--- Provisionnement GCP ---');
provisionStack(new GcpFactory());
