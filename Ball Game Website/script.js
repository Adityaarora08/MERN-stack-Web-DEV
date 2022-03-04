let circle = document.querySelector('.circle');
let moveBy = 10;
var move;
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
             clearInterval(move);
            move = setInterval(function () {
                if (circle.getBoundingClientRect().left<=0) {
                    clearInterval(move);
                    return;
                }
                circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            }, 50);
            break;
        case 'ArrowRight':
             clearInterval(move);
            move = setInterval(function () {
                if (circle.getBoundingClientRect().left>=screen.width-210) {
                    clearInterval(move);
                    return;
                }
                circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            }, 50);
            break;
        case 'ArrowUp':
            clearInterval(move);
            move = setInterval(function () {
                if (circle.getBoundingClientRect().top<=0) {
                    clearInterval(move);
                    return;
                }
                circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            }, 50);
            break;
        case 'ArrowDown':
            clearInterval(move);
            move = setInterval(function () {
                if (circle.getBoundingClientRect().top>=screen.height-358) {
                    clearInterval(move);
                    return;
                }
                circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            }, 50);
            break;
    }
});
