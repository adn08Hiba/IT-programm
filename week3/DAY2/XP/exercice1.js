const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people[people.indexOf("James")] = "Jason";

people.push("Yourname"); // Replace 'Yourname' with your actual name if you want

console.log("Index of Mary:", people.indexOf("Mary"));

const peopleCopy = people.slice(1, people.length - 1);
console.log("Copy without Mary and Yourname:", peopleCopy);

console.log("Index of Foo:", people.indexOf("Foo")); // -1 because "Foo" is not in the array

const last = people[people.length - 1];
console.log("Last element:", last);

for (let person of people) {
  console.log(person);
}
for (let person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}
