const family = {
  father: 'John',
  mother: 'Jane',
  son: 'Mike',
  daughter: 'Anna'
};

console.log('Keys:');
for (const key in family) {
  console.log(key);
}

console.log('Values:');
for (const key in family) {
  console.log(family[key]);
}
