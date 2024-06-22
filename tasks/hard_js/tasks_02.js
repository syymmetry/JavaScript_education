const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, fruit) => {
    if (!accumulator[fruit]) {
        accumulator[fruit] = 1;
    } else {
        accumulator[fruit]++;
    }
    return accumulator;
}, {});

console.log(fruitCount); 