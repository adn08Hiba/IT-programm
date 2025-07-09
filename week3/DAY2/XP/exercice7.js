const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const initials = names.map(name => name[0]);

initials.sort();
const societyName = initials.join("");

console.log(societyName);
