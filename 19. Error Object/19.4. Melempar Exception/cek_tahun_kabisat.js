const cekkabisat = (tahun) => {
    if(!Number.isInteger(tahun)){
        throw new TypeError(`${tahun} bukan angka tahun`);
    }
    else if(tahun <= 0) {
        throw new RangeError(`Harus Tahun setelah masehi`);
    }
    else if(tahun % 4 === 0) {
        return `${tahun} adalah tahun kabisat`;
    }
    else{
        return `${tahun} bukan tahun kabisat`;
    }        
};

try{
    console.log(cekkabisat(2024));
    console.log(cekkabisat(2022));
    console.log(cekkabisat(-202));
    console.log(cekkabisat('a'));
}
catch(e){
    console.log(`ada ${e.name} dengan pesan ${e.message}`)
}