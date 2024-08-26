// adding ': number' on function declaration you can easly say which type of data you need (in this example I need numbers on both parameters)
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// Core Types
// - number - 1, 5.3, -10 (All numbers, no differention between integers or floats)
// - string - 'Hi', "Hi", `Hi` (All text values)
// - boolean - true, false (Just these two, no "truthy" or "falsy" values)
