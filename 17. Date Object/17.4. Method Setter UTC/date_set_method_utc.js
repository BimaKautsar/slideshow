let foo = new Date(0);
console.log( foo.toUTCString() );  

foo.setUTCFullYear(2022);
console.log( foo.toUTCString() ); 

foo.setUTCMonth(10);
console.log( foo.toUTCString() );

foo.setUTCDate(20);
 console.log( foo.toUTCString() );
 
 foo.setUTCHours(10);
 console.log( foo.toUTCString() ); 
 
 foo.setUTCMinutes(30);
 console.log( foo.toUTCString() ); 
 
 foo.setUTCSeconds(45);
 console.log( foo.toUTCString() ); 
 
 foo.setUTCMilliseconds(125);
 console.log( foo.toISOString() ); 