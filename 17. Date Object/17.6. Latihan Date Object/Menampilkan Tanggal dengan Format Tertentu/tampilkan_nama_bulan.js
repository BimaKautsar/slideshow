let foo = new Date();
let bulan = foo.getMonth();
let namaBulan;

switch (bulan) {
  case 0:
    namaBulan = "Januari";
    break;
  case 1:
    namaBulan = "Februari";
    break;
  case 2:
    namaBulan = "Maret";
    break;
  case 3:
    namaBulan = "April";
    break;
  case 4:
    namaBulan = "Mei";
    break;
  case 5:
    namaBulan = "Juni";
    break;
  case 6:
    namaBulan = "Juli";
    break;
  case 7:
    namaBulan = "Agustus";
    break;
  case 8:
    namaBulan = "September";
    break;
  case 9:
    namaBulan = "Oktober";
    break;
  case 10:
    namaBulan = "November";
    break;
  case 11:
    namaBulan = "Desember";
    break;
}

console.log(namaBulan);
