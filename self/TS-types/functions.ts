// Funkcje (Functions)
// Funkcje w TS mogą mieć zdefiniowane typy dla parametrów wejściowych oraz typ wartości zwracanej.

function add(a: number, b: number): number {
  return a + b;
}

console.log(5, 10);

// Funkcje z parametrami opcjonalnymi i domyślnymi

function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
