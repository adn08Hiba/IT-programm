const form =  DocumentFragment.querySelector("form");
console.log(form);


const input1 = document.getElementById("fname");
const input2 = document.getElementById("lname")
console.log("par ID :");
console.log(input1);
console.log(input2);


const firstname = document .getElementsByName("firstname");
const lastname = document.getElementsByTagName("lastname");
console.log("par name :");
console.log(firstname);
console.log(lastname);

form.addEventListener("submit", submitform);
function submitform(e){
    e.preventDefault();
    const firstnamevalue = input1.value;
    const lastnamevalue = input2.value;
    if (firstnamevalue === " "&& lastnamevalue ===" ") {
        alert("veuillez remplir les champs !!");
    }
}
const firstLi = document.createElement("li");
firstLi.textContent = firstnamevalue;
const lastLi = document.createElement("li");
lastLi.textContent = lastnamevalue;

const ul = document.getElementsByClassName("usersAnswer");
ul.appendChild(firstLi);
ul.appendChild(lastLi);