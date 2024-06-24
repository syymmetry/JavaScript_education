/* Циклы 
Циклы в JavaScript — это управляющие структуры, 
которые позволяют выполнять блок кода определенное количество раз. 
Они широко используются для выполнения повторяющихся задач, 
таких как перебор массивов, объектов или других итерируемых структур данных


Виды циклов в JavaScript:
1.Цикл for
2.Цикл while
3.Цикл do...while
4.Циклы для перебора коллекций (for...in, for...of)



*/

// Примеры:
// 1. Цикл while

let num = 5;

while (num <= 10) {
    console.log(num);
    num++;
}






arr = [12, 14, 15, 17]

arr.forEach(function(item, i, arr){
    console.log(`${i}:${item} inside arr ${arr}`);
})