export class KargoPaketi {
    constructor(agirlik, boyut) {
        this.agirlik = agirlik; 
        this.boyut = boyut; 
    }

    bilgi() {
        console.log(`
        Paket Ağırlığı: ${this.agirlik} kg
        Boyut: ${this.boyut}
        `);
    }
}
