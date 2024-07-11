'use strict';


// получение get
const now = new Date();
console.log('День недели:', now.getDay());
console.log('Текущий год:', now.getFullYear());
console.log('Текущий месяц:', now.getMonth());
console.log('час:', now.getHours());
console.log('минуты:', now.getMinutes());
console.log('секунды:', now.getSeconds());
console.log('милисекунды:', now.getMilliseconds());

console.log('Ращница между utc и главным часовым поясом:', now.getTimezoneOffset());
console.log('время в мл.секундах с 1970 года:', now.getTime());

// set

const now_date = new Date();
console.log(now_date.setHours(23, 37)); // 20 часов 37 минут
console.log(now_date);

// new Date.parse('2024-07-11'); //

//----------------------------------------------------------------


let start = new Date(); // дата начала работы цикла

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
};

let end = new Date(); // дата конца работы цикла
alert(`цикл отработал за ${end - start} миллесекунд`);
