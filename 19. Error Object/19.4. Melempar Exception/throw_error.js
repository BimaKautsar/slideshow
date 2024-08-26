const foo = 101;
try{
    if (foo > 100) {
        throw "Angka foo Terlalu Besar"
    }
}
catch(e){
    console.log(e.name);
    console.log(e.message);
    console.log(e);
}