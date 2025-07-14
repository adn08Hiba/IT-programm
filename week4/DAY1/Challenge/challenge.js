let client = "john";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetable : ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
const dispalyGroceries = () =>{
    groceries.fruits.forEach(fruit =>{
        console.log(fruit)
    });
}

const cloneGroceries = () =>{
    let user = client;

    client = "Betty";

    let shopping = groceries;

    shopping.totalPrice = "35$";
    shopping.other.paid = false;
}

displayGroceries();
cloneGroceries();