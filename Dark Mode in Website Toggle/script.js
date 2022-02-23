import "./styles.css";
var body = document.getElementById("heading");
var btn = document.getElementById("btn");
var cir = document.getElementById("circle");
btn.addEventListener("click",function (){
  document.body.style.backgroundColor = "black";
  body.style.color = "white";
  cir.style.marginLeft = "auto";
});
