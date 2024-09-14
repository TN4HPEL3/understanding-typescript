// TS Types

// 1. string
let vorname: string = "John";
console.log(`Hello, ${vorname}`);

// 2. number
let age: number = 25;
let price: number = 9.99;
console.log(`Age: ${age}, Price: ${price}`);

// 3. boolean
let isActive: boolean = true;
console.log(`Is active: ${isActive}`);

// 4. any
let data: any = "This can be anything";
data = 42;
console.log(data);
// Uwaga: Typ any wyłącza sprawdzanie typów i powinien być używany tylko w sytuacjach, gdy jest to absolutnie konieczne.

// 5. void
// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage("This is a message");

// 6. null & undefined
let nothing: null = null;
let notDefined: undefined = undefined;
console.log(nothing, notDefined);

// 7. array
// numbers array
// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers);

// mixed (union)
let mixed: (string | number)[] = [1, "two", 3, "four"];
console.log(mixed);

// 8. object
// let person: { name: string; age: number } = {
//   name: "Alice",
//   age: 30,
// };
// console.log(person.name);
