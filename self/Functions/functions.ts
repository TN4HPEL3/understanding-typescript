// Funkcje w TypeScript, podobnie jak w JavaScript, można definiować na kilka sposobów: jako funkcje zwykłe, funkcje anonimowe (wyrażenia funkcyjne), czy funkcje strzałkowe (arrow functions). Główna różnica polega na tym, że w TypeScript możemy (i powinniśmy) typować parametry i wartości zwracane.

// Typowanie parametrów i wartości zwracanych

// 1. Podstawowa składnia funkcji z typowaniem:
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));
// console.log(add("5", 10)); // Błąd: Typ 'string' nie może być przypisany do typu 'number'

// a: number i b: number oznaczają, że oba parametry muszą być liczbami.
// : number po nawiasie funkcji oznacza, że funkcja zwraca wartość typu number.

// 2. Typy opcjonalne i wartości domyślne:
// Parametry mogą być opcjonalne, co oznacza, że nie trzeba ich podawać przy wywołaniu funkcji.
// Opcjonalne parametry są oznaczone znakiem ?, a domyślne wartości można przypisać bezpośrednio.
function greet(
  name: string,
  greeting: string = "Hello",
  isOnline?: boolean
): string {
  if (isOnline) {
    return `${greeting}, ${name}. You are Online.`;
  }
  return `${greeting}, ${name}`;
}

console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
console.log(greet("Celina", "Welcome back", true));

// 3. Funkcje bez zwracanej wartości (void):
// Jeśli funkcja nie zwraca żadnej wartości, typ zwracany to void.
function logMessage(message: string): void {
  console.log(`Your message: ${message}`);
}

logMessage("TypeScript you are awesome!");

// 4. Funkcje strzałkowe (Arrow Functions) z typowaniem:
// Funkcje strzałkowe mogą mieć również typowane parametry i wartość zwracaną.
const multiply = (x: number, y: number): number => x * y;

console.log(multiply(2, 3));

// 5. Typy funkcji jako zmienne:
// Funkcje można przypisywać do zmiennych, które mają określony typ funkcji.
// let divide: (a: number, b: number) => number;

// divide = (a, b) => a / b;

// console.log(divide(10, 2));

// 6. Funkcje z parametrami o różnych typach:
// TypeScript pozwala również na używanie typów unijnych w parametrach.
function printId(id: number | string): void {
  console.log(`Your ID is: ${id}`);
}

printId(123);
printId("ABC");

//
//
//

function welcomeMessage(name: string, age: number): string {
  return `Hello ${name} (${age}).`;
}

console.log(welcomeMessage("Drake", 23));

//
//
//

function countArea(a: number, b: number = 10): number {
  return a * b;
}

console.log(countArea(2, 3));
console.log(countArea(1));

//
//
//

const countAverage = (numArray: number[]): number => {
  const sum: number = numArray.reduce((acc, num): number => acc + num, 0);

  return sum / numArray.length;
};

const numArray: number[] = [1, 2, 3, 4, 5];

console.log(countAverage(numArray));
console.log(countAverage([1, 2, 3]));
