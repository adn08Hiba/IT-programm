let input;
let number;

do {
  input = prompt("Please enter a number:");
  
  number = Number(input);
  console.log(`Type reçu : ${typeof input}, valeur : ${input}`);
  
} while (isNaN(number) || number < 10);

console.log(`Merci ! Tu as entré : ${number}`);
