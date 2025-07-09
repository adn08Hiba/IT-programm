function Hello(){
    alert("Hello World");
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}
setTimeout(Hello, 2000);
// part 3
interval = setInterval(Hello, 2000);
document.getElementById("clear").addEventListener("click", intervalId);
function intervalId() {
    clearInterval(interval);
}

