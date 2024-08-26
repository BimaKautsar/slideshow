const foo = 101 ;
try{
    if (foo > 100){
        throw new RangeError("Angka foo terlalu besar");
    }
}
catch(e){
    console.log(e.name);
    console.log(e.message);
    console.log(e);
}