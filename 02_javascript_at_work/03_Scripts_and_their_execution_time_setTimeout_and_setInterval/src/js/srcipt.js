/*

const timerId = setTimeout(function(text) {
    console.log('Helo');
}, 2000);

*/

/*

const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello');
*/


const timerId = setTimeout(logger, 2000);
clearInterval(timerId);

function logger () {
    console.log('text');
};

setTimeout(function() {
    console.log('Hello');
}, 1000);

//-----------------------------------------------
// практика


/*
const btn = document.querySelector('.btn');
let timerIdSec,
    i = 0;


btn.addEventListener('click', () => {
    //const timerIdSec = setTimeout(logger, 2000);
    timerIdSec = setInterval(anotherLogger, 1000);
});

function anotherLogger() {
    if (i === 3) {
        clearInterval(timerIdSec);
    }

    console.log('text');
    i++;
};

*/
//------------------------------


/*

let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);

*/

const btn = document.querySelector('.box');

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + 'px';
        }
    };
};

btn.addEventListener('click', myAnimation);