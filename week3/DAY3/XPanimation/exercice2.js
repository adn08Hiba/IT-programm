function myMove() {
    const box = document.getElementById("animate");
    const container = document.getElementById("container");
  
    let position = 0;
  
    const maxPosition = container.clientWidth - box.clientWidth;
  
    const interval = setInterval(() => {
      if(position >= maxPosition) {
        clearInterval(interval); 
      }else {
        position++;
        box.style.left = position + "px";
      }
    }, 1); 
  }
  