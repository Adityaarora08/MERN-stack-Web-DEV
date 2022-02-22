var box= document.getElementById('btn');
var inc=0;
var title = document.getElementById('heading');
function myFunction() {
    inc=inc+1;
    if(inc==5)
       {
           title.innerHTML = "Box Clicked 5 times";
           btn.style.boxShadow = "0 0 10px black";
       } 
    if(inc==10)
       {
           title.innerHTML = "Box Clicked 10 times";
           btn.style.boxShadow = "0 0 10px green";
       } 
}
