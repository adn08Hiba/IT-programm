const h1 = document.querySelector("h1");
console.log(H1);

const article = document.querySelector("section");
const lastP = article.lastElementChild;
article.removeChild(lastP);

const h2 = document.querySelector("h2");
h2.addEventListener("click", ChangeBackground);
function Changeackground(){
    h2.style.backgroundColor = red;
}



let h3 = document.querySelector("h3");
h3.addEventListener("click", hideh3);
function hideh3(){
    h3.style.display = "none";
}
const botton = document.getElementById("paragraph");
botton.addEventListener("click", addParagraph);
function addParagraph(){
    const newparagraph = document.querySelectorAll("article p");
    newparagraph.forEach((p) => {
        p.style.fontweight = "bold";
    });

}
h1.addEventListener("onmouseover", randomPixel);
function randomPixel(){
    const randomSize = Math.floor(Math.random()*101);
    h1.style.fontSize = randomSize + "px";
}
const secondP = document.querySelector("article p")[1];
secondP.addEventListener("click", hoverP);
function hoverP(){
    secondP.classList.add("fade-out");
}