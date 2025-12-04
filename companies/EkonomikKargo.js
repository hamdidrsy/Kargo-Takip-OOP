import { KargoSirketi } from "./KargoSirketi.js";

export class EkonomikKargo extends KargoSirketi {
    constructor() {
        super("Ekonomik Kargo");
    }

    fiyatHesapla(kargo) {
        return super.fiyatHesapla(kargo) * 0.8;
    }
}
