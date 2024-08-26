let foo = new Date(0);
console.log( foo.toLocaleString() ); 

foo.setFullYear(2022);
console.log( foo.toLocaleString() ); 

foo.setMonth(10);
console.log( foo.toLocaleString() );

foo.setDate(20);
 console.log( foo.toLocaleString() ); 
 
 foo.setHours(10);
 console.log( foo.toLocaleString() ); 
 
 foo.setMinutes(30);
 console.log( foo.toLocaleString() ); 
 
 foo.setSeconds(45);
 console.log( foo.toLocaleString() ); 
 
 foo.setMilliseconds(125);
  console.log(foo.toISOString());