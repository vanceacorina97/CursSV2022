/*
1. Creați o funcție care primește ca și parametru un număr și returnează dublul său dacă numărul primit este impar, altfel returnează numărul scăzut cu 2 dacă este par.
Afișați rezultatul în consolă.
2. Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru. Parcurgeți array-ul folosind un “for loop”.
Afișați rezultatul în consola.
Ex:
const arr = [1,2,3,4,5,6,7,8,9];
savePrimes(arr) => [1,2,3,5,7];  
3. Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru.
Parcurgeți array-ul folosind “forEach”. Afișați rezultatul în consola.
Ex:
saveStrings([1, ‘1’, ‘salut’, 2, 6, true, ‘true’]) -> [‘1’, ‘salut’, ‘true’]
saveStrings([1,2,3,4]) -> []
saveStrings([‘1’,’2’,’3’,’4’]) -> [‘1’,’2’,’3’,’4’]
4. Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip string folosind  “for loop” si keyword-ul “continue”. 
Ex:
  addDigits(“1523”) => 9
  Hint: pentru a transforma un caracter/string în număr folosiți operatorul cast.
5. Creați un switch cu cel puțin 5 case-uri din care cel puțin 2 să aibă același rezultat, după exemplul prezentat la curs.

Observatie: Folosiți cel puțin 2 tipuri la alegere de creare a funcțiilor în rezolvarea exercițiilor
( Exemplu, exercitiul 1 si 2 cu arrow function, exercițiul 3 și 4 cu function statement
  - în curs au fost prezentate 4 metode de a crea funcții) 
*/
// Ex 1
const numberFn = number => number % 2 ? number * 2 : number - 2;
console.log(numberFn(5));

// Ex 2
const checkPrime = number => {
  for (let div = 2; div * div <= number; div++) {
    if (number % div === 0) return false;
  }
  return true;
}

function savePrimes(arr, primes = []) {
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) primes.push(arr[i]);
  }
  return primes;
}

// Alternative
// const savePrimes = arr => arr.filter(checkPrime);

console.log(savePrimes([2, 4, 6, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97, 113, 131, 197]));

// Ex 3
const saveStrings = function (arr, strings = []) {
  arr.forEach(element => typeof element === 'string' && strings.push(element));
  return strings;
}

// Alternative
// const saveStrings = arr => arr.filter(element => typeof element === 'string');

console.log(saveStrings([1, '1', 'salut', 2, 6, true, 'true']));

// Ex 4
const addDigits = (number, result = 0) => {
  for (let i = 0; i < number.length; i++) {
    if (isNaN(+number[i]) || number[i] % 2 === 0) continue;
    result += +number[i];
  }
  return result;
}

// Alternative
// const addDigits = number => [...number].filter(digit => digit % 2).reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));

console.log(addDigits("15asda2asda3"));

// Ex 5
(date => {
  switch (date) {
    case 0:
      console.log("It is Sunday!");
      break;
    case 1:
      console.log("It is Monday again...");
      break;
    case 2:
      console.log("It is Thuesday.");
      break;
    case 3:
      console.log("It is Wednesday my dudes!");
      break;
    case 4:
      console.log("It is Thursday.");
      break;
    case 5:
      console.log("It is Friday!!");
    case 6:
      console.log("Sunday is near!");
      break;
    default:
      console.log("This must be a bug...");
  }
})(new Date().getDay());
