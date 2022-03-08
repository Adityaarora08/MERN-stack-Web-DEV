function randomplace(){
    var divv=document.querySelector('.box');
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    divv.style.top = randomTop +"px";
    divv.style.left = randomLeft +"px";
}
function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }