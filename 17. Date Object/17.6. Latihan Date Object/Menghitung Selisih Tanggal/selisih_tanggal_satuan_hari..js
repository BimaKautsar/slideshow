let tanggalAwal = new Date("06/05/2022");
let tanggalAkhir = new Date("12/20/2022");

let selisihTanggal = tanggalAkhir - tanggalAwal;
let satuHari = 1000 * 60 * 60 * 24;
let selisihHari = selisihTanggal / satuHari;

console.log("Selisih tanggal = " + selisihHari + " Hari");
// Selisih tanggal = 198 Hari
