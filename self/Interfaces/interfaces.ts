// Interfejsy są używane do definiowania kształtu obiektów, co pozwala na jasne określenie, jakie właściwości i metody mają być dostępne.

interface Person {
  name: string;
  age: number;
  greet(): void;
}

const user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet();

// 1. Opcjonalne właściwości:
// Właściwości mogą być opcjonalne, oznaczone przez ?.

interface Car {
  brand: string;
  model: string;
  year?: number; // optional
}

const myCar: Car = {
  brand: "Toyota",
  model: "Rav4",
  //   year: 2015, // optional
};

// 2. Readonly (tylko do odczytu):
// Właściwości mogą być oznaczone jako tylko do odczytu za pomocą readonly, co zapobiega ich modyfikacji po inicjalizacji.

interface Dot {
  readonly x: number;
  readonly y: number;
}

const dot: Dot = { x: 10, y: 20 };
// point.x = 15; // Błąd: nie można przypisać do readonly

// 3. Dziedziczenie interfejsów: (extends)
// Interfejsy mogą dziedziczyć (extends) od innych interfejsów, pozwalając na rozszerzanie ich funkcjonalności.

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

console.log(myDog);

// Interfejsy mogą być rozszerzane (extends) przez inne interfejsy.
// Interfejsy są bardziej preferowane do definiowania struktur obiektowych.

//
//
//

interface Book {
  title: string;
  author: string;
  year?: number;
}

const myBook: Book = {
  title: "Dar Przywódctwa",
  author: "Mariusz Chrapko",
  //   year: 2024 // oprional
};

//
//
//
