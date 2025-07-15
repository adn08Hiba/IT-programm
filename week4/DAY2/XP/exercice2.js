const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color,i) => {
    const j = i+1;

    const ord = (j ===1) ? "st":
                (j ===2) ? "nd":
                (j ===3) ? "rd": "th";

    console.log(`${j}${ord} choice is ${color}.`);
    
});