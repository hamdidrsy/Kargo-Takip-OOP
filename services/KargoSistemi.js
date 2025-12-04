export class KargoSistemi {
    fiyatHesapla(kargo) {
        return kargo.paket.agirlik * 10; 
    }

    kargoyuIslemeAl(kargo) {
        kargo.durumGuncelle("İşleme alındı");
    }

    teslimEt(kargo) {
        kargo.durumGuncelle("Teslim edildi");
    }
}
