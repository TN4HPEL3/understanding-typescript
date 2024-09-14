function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverseArray([1, 2, 3]));

//
//
//

interface Pair<T, U> {
  first: T;
  second: U;
}

function createPair<T, U>(first: T, second: U): Pair<T, U> {
  return { first, second };
}

console.log(createPair("Hello", 42));

//
//
//

function filterArray<T>(array: T[], filterFunc: (item: T) => boolean): T[] {
  return array.filter(filterFunc);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

//
//
//
