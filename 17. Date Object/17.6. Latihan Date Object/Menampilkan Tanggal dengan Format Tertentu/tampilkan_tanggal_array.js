let foo = new Date();

let tahun = foo.getFullYear();
let bulan = foo.getMonth();
let tanggal = foo.getDate(); 
let hari = foo.getDay();
let jam = foo.getHours();
let menit = foo.getMinutes();
let detik = foo.getSeconds();

 let arrayHari = [
 "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
 ];

 let arrayBulan = [
 "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", 
 "Agustus", "September", "Oktober", "November", "Desember"
 ];

 let tampilanTanggal = arrayHari[hari]+", "+tanggal+" "+arrayBulan[bulan]+" "+
 tahun+" "+jam+":"+menit+":"+ detik;

 console.log(tampilanTanggal);