let pattern = "";

for (let i = 1; i <= 6; i++) {
  pattern += "* ".repeat(i).trim() + "\n";
}

console.log(pattern);
//2nd solution
let pattern2 = "";

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    pattern2 += "* ";
  }
  pattern2 += "\n";
}

console.log(pattern2);
