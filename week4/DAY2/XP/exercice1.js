const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color ,i)=> {
    console.log(`${i+1} choice is ${color}`);
});

colors.some (color => {
    if ( color === "Violet"){
        console.log("Yeah");
    }else{
        console.log("No...")
    }
});