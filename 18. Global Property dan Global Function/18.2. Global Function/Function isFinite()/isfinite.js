let foo ;

foo = 8 ;
console.log( isFinite(foo) );

foo = 3.923 ;
console.log( isFinite(foo) );

foo = "v" ;
console.log( isFinite(foo) );

foo = 3/0 ;
console.log( isFinite(foo) );

foo = Number.NEGATIVE_INFINITY ;
console.log( isFinite(foo) );

foo = NaN ;
console.log( isFinite(foo) );