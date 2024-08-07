'use strict';

// 1. ОБычная функция: this = window, но если стоит 'use strict' - undefind

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}

//showThis(4, 5); после урока вернуть


// 2. Контекст у метода объекта - сам объект

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); // {a:20, b:15, sum: f}
        function shout() {
            console.log(this); // window or undefind
        }
        shout();
    }
}

//obj.sum();

// 3.this в конструкторах и классах - это новый экземпляр объекта

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let ivan = new User('Ivan', 23);

// 4. Ручная привязка this: call, apply, bind

function sayName(surname) {
    //console.log(this);
    //console.log(this.name + surname);
}

const user = {
    name: 'John'
};

//sayName.call(user, ' Smith');
//sayName.apply(user, [' Smith']);


function count(num) {
    return this * num;
}

const double = count.bind(2);
//console.log(double(3));
//console.log(double(13));

// практика

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    this.style.width = '300px';
    this.style.height = '200px';
    this.style.backgroundColor = 'green';
})

btn.addEventListener('mouseenter', (e) => {
    e.target.style.width = '100px';
    e.target.style.height = '100px';
    e.target.style.backgroundColor = 'red';
})

const object = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        }
        say();
    }
};
object.sayNumber();

const Double = a => a * 2; 
/* одинаковый функционал */





