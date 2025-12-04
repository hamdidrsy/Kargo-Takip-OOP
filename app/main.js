import { Kargo } from "../core/Kargo.js";
import { KargoPaketi } from "../core/KargoPaketi.js";
import { HizliKargo} from "../companies/HizliKargo.js";
import { EkonomikKargo } from "../companies/EkonomikKargo.js";

// Paket oluştur
const paket = new KargoPaketi(5, "30x20x10");

// Kargo oluştur
const kargo = new Kargo("Hamdi", "Gözde", paket, "TR123456");

// Şirket seçimi
//const sirket = new HizliKargo();
// const sirket = new EkonomikKargo();
let mesaj = "Lütfen Bir Kargo Şirketi Seçiniz\n1. Hızlı Kargo\n2. Ekonomik Kargo";
let secim = prompt(mesaj);

if(secim == "1"){
    var sirket = new HizliKargo();
}else if(secim == "2"){
    var sirket = new EkonomikKargo();
}else{
    alert("Geçersiz Seçim! Lütfen Sayı ile Seçim Yapınız.");
    throw new Error("Geçersiz Seçim! Lütfen Sayı ile Seçim Yapınız.");
}
sirket.sirketBilgi();

// İşlemler
sirket.kargoyuIslemeAl(kargo);

console.log("Fiyat:", sirket.fiyatHesapla(kargo), "TL");

sirket.teslimEt(kargo);

kargo.bilgi();
