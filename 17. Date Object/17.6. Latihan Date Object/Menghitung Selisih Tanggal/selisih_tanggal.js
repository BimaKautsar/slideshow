let tanggalAwal = new Date("06/05/2022");
let tanggalAkhir = new Date("12/20/2022");

let timeAwal = tanggalAwal.getTime();
let timeAkhir = tanggalAkhir.getTime();

console.log(timeAwal);
console.log(timeAkhir);

let selisihTanggal = timeAkhir - timeAwal;
console.log(selisihTanggal);
