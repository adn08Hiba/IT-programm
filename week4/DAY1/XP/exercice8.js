function makeJuice(sizeDrink){
    const ingredients = []
    function addIngredients(firstIngredient, secondIngredient, thirdIngredient ){
        Ingredients.push(firstIngredient, secondIngredient, thirdIngredient);
    }   

    function displayJuice(){
        const SentenceText = `The client wants a ${sizeDrink} juice ,
        containing ${firstIngredient}, ${secondIngredient} , ${thirdIngredient} .`
       addIngredients(firstIngredient, secondIngredient, thirdIngredient);
       const sentence = document.createElement("div");
       sentence.textContent = SentenceText;
       doument.body.appendChild(sentence);
       ingredients.push(addIngredients);
    }
    
    addIngredients("orange", "mango", "pinapple");
    addIngredients("apple", "banan", "kiwi");

    displayJuice();
    
}
makeJuice("Large");

