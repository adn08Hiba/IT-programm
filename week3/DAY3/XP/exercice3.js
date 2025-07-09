var allBoldItems;
function getBoldItems(){
    allBoldItems = document.querySelectorAll("p strong ");
}
function highlight(){ 
    getBoldItems();
    allBoldItems.forEach(function(item) {
      item.style.color = "blue";
    });
}
function returnItemsToDefault(){
    getBoldItems();
    allBoldItems.forEach(function(item) {
      item.style.color = "black";
    });
}
allBoldItems = document.addEventListener("mouseover", highlight);
allBoldItems = document.addEventListener("onmouseover",returnItemsToDefault);