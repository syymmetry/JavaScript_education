"use strict"

const num = new Number(3);
console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} вышел`);
}

const ivan = new User('Ivan', 28);
const alex = new User('ALex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);