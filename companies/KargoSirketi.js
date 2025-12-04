import { KargoSistemi } from "../services/KargoSistemi.js";

export class KargoSirketi extends KargoSistemi {
    constructor(ad) {
        super();
        this.ad = ad;
    }

    sirketBilgi() {
        console.log(`Kargo şirketi: ${this.ad}`);
    }
}
