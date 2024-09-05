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

// ! Interface: Może być rozszerzany za pomocą extends. Możliwe jest także wielokrotne deklarowanie tego samego interfejsu, co skutkuje ich łączeniem (ang. declaration merging).

interface Human {
  name: string;
}

interface Woman extends Human {
  gender: number;
}

// Declaration Merging

interface Human {
  age: number; // Zostanie dodane do wcześniejszej definicji
}

const Client: Woman = {
  name: "Ewa",
  age: 18,
  gender: 0,
};

// ! Interface: Zasadniczo służy do definiowania kształtu obiektów. Chociaż można go używać do definiowania typów funkcji, nie ma możliwości tworzenia typów unijnych.

// ! Interface: Może rozszerzać inne interfejsy, ale nie może tworzyć przecięć z typami unijnymi bezpośrednio w deklaracji.

// ! Interface: Pozwala na nadpisywanie właściwości w dziedziczeniu, co jest bardziej elastyczne.

// ! Interface: Często preferowany do definiowania struktur obiektowych, zwłaszcza w publicznych API lub bibliotekach, ponieważ deklaracja jest łatwo rozszerzalna.

// ! Używaj interface, gdy chcesz definiować kształt obiektów lub funkcji, które mogą być rozszerzane lub łączone przez deklarację.
