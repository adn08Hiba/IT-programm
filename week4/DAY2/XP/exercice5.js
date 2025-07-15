const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const string = epic.reduce((acc, val) => acc+" "+val,);

console.log(string);