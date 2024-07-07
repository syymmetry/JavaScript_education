/* Задача №1
Изменить данный массив так, чтобы все числа были увеличенны в 2 раза,
а если попалается строка, то к ней добавить "- done!"
массив: const dat = [5, 10, 'shoping', 20, 'homework'];
*/
// варинт №1

const data = [5, 10, 'shoping', 20, 'homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] *= 2;
        // data[i] = data * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done!`;
    }
}

console.log(data);

// Вариант 2
const datas = [5, 10, 'shoping', 20, 'homework'];

const returnData = (arr) => {
    return arr.reduce((acc, el) => {
        if (typeof(el) === 'number') {
            acc.push(el * 2); 
        } else if (typeof(el) === 'string') {
            acc.push(`${el} - done!`);
        }
        return acc;
    }, []);
};

console.log(returnData(datas));



/* Задача №2  
     *
    ***
   *****
  *******
 *********

нарисовать данную геометрическую фигуру с помощью цикла 
*/

const line = 5;
let result = ''; 


for (let i = 0; i <= line; i++) {
    for (let j = 0; j < line * 1 - i; j++) {
        result += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += '*';
    }
    result += "\n";
};

console.log(result);


/* Задача №2
 Заполните массив reusult числами из старого массива arr.
 Количество элементов в массиве можно получить arr.length,
а к элементам обращаемся всё так же arr[0], arr[0]

*/

const arr = [
    3, 5, 8, 16, 'start', 20, 23, 50
]

const results = [];

for (let i = 0; i < arr.length; i++) {
    results[i] = arr[i];
}

console.log(results);

// вариант №2

const arr1 = [
    3, 5, 8, 16, 'start', 20, 23, 50
]

const newArr = [];

arr1.forEach(item => {
    newArr.push(item);
});

console.log(newArr);

//--------------------------------------------------------------------
/* Задача №4 
на вход программе подаётся строка! Прочитать её, отобразить все её символы с нечётными индексами (подряд в одну строку)

*/

let strInput = prompt("Введите строку", '');
let res = '';

for (let i = 0; i < strInput.length; i+=2) {
    res += strInput[i];
};

/* Задачва №5 
* *** ***** ******* ********* ************

нарисовать данную геометрическую фигуру с помощью цикла 
*/

const length1 = 5;
let res1 = '';

for (let i = 0; i < length1; i++) {
    for (let j = 0; j < 2 * i + 1; j++) {
        res1 += '*'
    };
    res1 += ' ';
};

console.log(res1);

/* Задача №6
 Создайте функцию, которая будет вычислять объём и площадь полной поверхности куба.
 Эта функция принимает в себя целое число со значением длины ребра. Ответ надо ввести
 в формате строки!

*/

function calculateVoluem(a, b) {
    let volume = Math.pow(a, 3);
    let area = 6 * (Math.pow(b, 2));

    console.log(`Объём куба ${volume}, площадь поверхости куба ${area}`);

    return volume, area;
};

calculateVoluem(5, 5);

// Вариант 2

function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || Number.isInteger(length)) {
        return "При выполнении вышла ошибка";
    };
    
    let volume1 = 0;
    let area1 = 0;
    
    volume1 = length * length * length;
    area1 = 6 * (length * length);
    return `Объём куба ${volume1}, площадь поверхости куба ${area1}`;
};

calculateVolumeAndArea(5);

/* Задача №7 
НУжно написать функции, коорая находит купе по введеному номру места!
9 купе, 36 мест
*/

function placeFind(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка! Введены некорректные данные! Ввведите целое число от 1 до 36!";
    };

    return Math.ceil(seatNumber/4);
};

console.log(placeFind(3));

