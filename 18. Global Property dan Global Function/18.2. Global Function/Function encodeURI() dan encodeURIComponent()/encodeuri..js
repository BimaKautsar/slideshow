let foo = "https://www.duniailkom.com/Belajar #JavaScript";
let bar = encodeURI(foo);
let baz = encodeURIComponent(foo);

console.log(bar);
console.log(baz);