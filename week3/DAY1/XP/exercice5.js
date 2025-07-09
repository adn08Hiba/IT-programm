const family = {
    father: "John",
    mother: "Jane",
    son: "Jack",
    daughter: "Jill"
}
console.log("Clés de l'objet family:");
for(let key in family){
    console.log(key)
}
console.log("Valeurs de l'objet family:");
for (let value in family) {
  console.log(family[value]);
}
