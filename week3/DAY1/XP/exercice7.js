const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const firtstLetters = names.map(names => names[0]);
firtstLetters.sort();
const NameSecretSociety = firtstLetters.join("");
console.log(NameSecretSociety);