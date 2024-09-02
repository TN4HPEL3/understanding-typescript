// Typy (type) w TypeScript pozwalają na tworzenie aliasów dla typów i mogą być używane do definiowania kształtów obiektów podobnie jak interfejsy. Typy są jednak bardziej elastyczne i mogą obejmować np. typy unijne, przecięcia itp.

// Podstawowa definicja typu
type Coordinates = {
  x: number;
  y: number;
};

const position: Coordinates = { x: 5, y: 10 };

// Kluczowe cechy typów:

// 1. Typy unijne (Union Types):
// - Typy mogą być złożone z kilku typów, co pozwala na używanie wartości różnych typów.
type ID = string | number;

const userId: ID = "12345";
const productId: ID = 98765;

// 2. Przecięcia typów (Intersection Types):
// Typy mogą być łączone w jeden złożony typ za pomocą operatora &.
type A = { a: number };
type B = { b: string };

type C = A & B;

const example: C = { a: 1, b: "hello" };

// 3. Typowanie funkcji:
// Typy mogą być używane do definiowania typów funkcji.
type Greet = (name: string) => string;

const greetUser: Greet = (name) => `Hello, ${name}!`;

console.log(greetUser("Alice"));

// Typy można rozszerzać, ale trzeba używać przecięć (&).
// Typy są bardziej elastyczne, mogą łączyć różne typy, używać typów unijnych i przecięć.
// Typy są bardziej uniwersalne.

//
//
//

type Point = {
  label: string;
};

type Label = {
  label: string;
};

type Coordinate = Point & Label;

const myCoordinate: Coordinate = {
  label: "blabla",
};

//
//
//

type GreetFunction = (name: string) => string;

const greetClient: GreetFunction = (name) =>
  `Welcome back in our shop, ${name}!`;

console.log(greetClient("Bob"));
