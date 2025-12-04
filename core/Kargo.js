export class Kargo {
    constructor(gonderici, alici, paket, takipNo) {
        this.gonderici = gonderici;
        this.alici = alici;
        this.paket = paket;
        this.takipNo = takipNo;
        this.durum = "Kargo oluşturuldu";
    }

    durumGuncelle(yeniDurum) {
        this.durum = yeniDurum;
        console.log(`Durum güncellendi: ${this.durum}`);
    }

    bilgi() {
        console.log(`
        Takip No: ${this.takipNo}
        Gönderici: ${this.gonderici}
        Alıcı: ${this.alici}
        Durum: ${this.durum}
        `);
    }
}
