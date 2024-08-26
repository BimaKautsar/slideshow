try {
  const foo = 100;
  foo = 101;
} 
catch (e) {
  console.log(`Ada ${e.name} dengan pesan "${e.message}"`);
}
