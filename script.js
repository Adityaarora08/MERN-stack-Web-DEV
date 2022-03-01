var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionid= this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(targetsectionid);
        interval= setInterval(scrollVertivally,50,targetsection);
    });
}
function scrollVertivally(targetsection){
    var targetsectioncoordinates = targetsection.getBoundingClientRect();
    if(targetsectioncoordinates.top<=0)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}
// var targetpos=1500;
// var currentpos=0;
// var scrollInterval= setInterval(function(){
//     if(currentpos>=targetpos)
//     {
//         clearInterval(scrollInterval);
//         return;
//     }
//     currentpos+=50;
//     window.scrollBy(0,50);
// },50)

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);


// for all filling of skill bar at once

//var progressBars = document.querySelectorAll(".skill-progress > div");
// var skillscontainer= document.getElementById("skills-container");
// window.addEventListener('scroll',checkScroll);
// var animationdone=false;

// function initialisebars(){
//     for(var bar of progressBars)
//     {
//         bar.style.width = 0 + "%";
//     }
// }
// initialisebars();
// function fillBars(){
//     for(let bar of progressBars)
//     {
//         let targetwidth= bar.getAttribute("data-bar-width");
//         let currentwidth =0;
//         let interval = setInterval(function(){
//             if(currentwidth>targetwidth)
//             {
//                 clearInterval(interval);
//                 return;
//             }
//             currentwidth++;
//             bar.style.width= currentwidth +"%";
//         },5);
//     }
// }
// function checkScroll(){
//     var skillcoordinates = skillscontainer.getBoundingClientRect();
//     if(skillcoordinates.top <= window.innerHeight && !animationdone){
//         animationdone=true;
//         fillBars();
//     }
//     else if(skillcoordinates.top>window.innerHeight)
//     {
//         animationdone=false;
//         initialisebars();
//     }
// }