// Solution 1: 
let pattern = '';
for (let i = 1; i <= 6; i++) {
  pattern += '* '.repeat(i).trim() + '\n';
}
console.log('Single loop solution:');
console.log(pattern);

// Solution 2: 
console.log('Nested loops solution:');
for (let i = 1; i <= 6; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row.trim());
}
