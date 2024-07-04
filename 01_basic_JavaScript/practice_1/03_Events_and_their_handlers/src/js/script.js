const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

/*
btn.onclick = function() {
    alert('Hello');
};
*/

/*
!! Современный метод создать обработчик события: (addEventListener) !!

btn.addEventListener('click', () => {
    alert('Hello');
});

btn.addEventListener('click', () => {
    alert('again, hello!');
}); 
*/

/* !! пример: аргумент event, событие "mouseenter", немного о target !! 
btn.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    console.log('This is hover');
    alert('Hello');
    
});

!! удаление с помощью event, target и метода remove() !!

btn2.addEventListener('mouseenter', (e) => {
    e.target.remove();
});
*/


/*
i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};


btn.addEventListener('click', deleteElement);
*/

// практика


const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
};

/*
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

*/

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);

});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});