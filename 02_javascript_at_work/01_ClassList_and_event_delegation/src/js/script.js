const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(0));
//console.log(btns[1].classList.add('red', 'some__class'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue'));

//if (btns[1].classList.contains('red')) {
//    console.log('red');
//}

/* код для переключения класса при клике.
   Твк же проверка на наличие класса

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

*/

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

console.log(btns[0].className); // устаревший метод

//--------------------------------------------
// Делегирование событий

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello!');
    }

    /*
    if (event.target && event.target.matches("button")) {
        console.log('Hello!');
    }    
    */

    /*if (event.target && event.target.classList.contains('blue')) {
        console.log('Hello!');
    }
    */
});

/*

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    });
});

*/

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);