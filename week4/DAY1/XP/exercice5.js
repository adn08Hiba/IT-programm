// 1. function declaration
(function Weight(kilogram) {
    let gram = kilogram * 1000;
    return gram;
})(3.5);

// 2. function expression
const Weight = function(kilograme){
    return kilograme * 1000;
}
console.log(Weight(7));

// 3. one line-row function
const Weight = kilograme => kilograme * 1000;
console.log(Weight(5));

// Difference: Function declarations are hoisted
//  and can be called before their definition, 
// function expressions are not.
