

//-------------------------------------------------------------
/*Задача №2
Создать массив и скопировать туда массив с именем array, но исключить повторяющиеся
элементы. Как альтернативный вариант, вывести / вернуть массив array без повторяющихся
элементов!
*/
let array = ['John', 34, 'John', 'JOhin', 55, '55', 41, 1998, 199.5, 'toUpperCase', 55, 'Ivan', 55, 1998];

const uniqueArr = (arr) => {
    return arr.reduce((acc, el) => {
        if (!acc.includes(el) && !acc.includes(+el)) {
            acc.push(el);
        }
        return acc
    }, []);
}

//--------------------------------------------------------------

/* Задача №3 





*/
function encodeString(input) {
  const genome = input + ' ';
  let result = '';
  let s = 0;
  let n = genome[0];

  for (let i = 0; i < genome.length; i++) {
    if (n !== genome[i]) {
      result += n + String(s);
      s = 0;
      n = genome[i];
    }
    s += 1;
  }

  return result;
}

const input = prompt('Введите строку:');
const output = encodeString(input);
console.log(output);
alert(output);