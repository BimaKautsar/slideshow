let tanggalAwal = new Date("06/05/2022");
let tanggalAkhir = new Date("12/20/2022");

let selisihTanggal = Math.abs(tanggalAkhir - tanggalAwal);

let satuHari = 1000 * 60 * 60 * 24;
let satuBulan = 1000 * 60 * 60 * 24 * 30;
let satuTahun = 1000 * 60 * 60 * 24 * 365;

let selisihTahun = Math.floor(selisihTanggal / satuTahun);
let selisihBulan = Math.floor(
  (selisihTanggal - selisihTahun * satuTahun) / satuBulan
);
let selisihHari = Math.floor(
  (selisihTanggal - selisihTahun * satuTahun - selisihBulan * satuBulan) /
    satuHari
);

let hasil =
  selisihTahun + " Tahun " + selisihBulan + " Bulan " + selisihHari + " Hari";

console.log(hasil);
