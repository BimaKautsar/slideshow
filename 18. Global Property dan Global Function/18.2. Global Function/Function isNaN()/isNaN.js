let foo ;

foo = 5 ;
console.log( isNaN(foo) );

foo = 1/9 ;
console.log( isNaN(foo) );

foo = 1 / 'B';
console.log(isNaN(foo));

foo = NaN ;
console.log( isNaN(foo) );