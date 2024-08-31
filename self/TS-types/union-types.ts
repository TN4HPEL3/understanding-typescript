// union types - pozwalają przypisać zmiennej wartości więcej niż jednego typu
// np:
let identifier: number | string; // Could be number or string
identifier = 123; // Right
identifier = "ABC"; // Right
// identifier = true; // Error

function printId(id: number | string) {
  console.log(`Your id is ${id}`);
}

printId(101); // Your id is: 101
printId("XYZ123"); // Your id is: XYZ123

//
//
//

function printInfo(value: string | number) {
  console.log(`Wartość: ${value}`);
}

printInfo(123);
printInfo("Hello");
