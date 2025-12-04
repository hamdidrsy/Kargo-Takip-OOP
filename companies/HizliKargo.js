import { KargoSirketi } from "./KargoSirketi.js";

export class HizliKargo extends KargoSirketi {
    constructor() {
        super("Hızlı Kargo");
    }

    fiyatHesapla(kargo) {
        return super.fiyatHesapla(kargo) + 30;
    }

    kargoyuIslemeAl(kargo) {
        kargo.durumGuncelle("Hızlı mod: İşleme alındı");
    }
}
