// Abstrakcyjne klasy
// Abstrakcyjne klasy są szablonami, które nie mogą być instancjowane bezpośrednio. Służą do definiowania wspólnej funkcjonalności dla klas pochodnych. Mogą zawierać zarówno zaimplementowane metody, jak i abstrakcyjne metody, które muszą być zaimplementowane w klasach dziedziczących.

abstract class DangerousDog {
  abstract makeSound(): void; // Abstrakcyjna metoda (bez implementacji)

  move(): void {
    console.log("Moving along...");
  }
}

class Pitbull extends DangerousDog {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Pitbull();
dog.makeSound(); // Woof! Woof!
dog.move(); // Moving along...

//
//
//

// Interfejsy
// Interfejsy definiują struktury, które muszą być spełnione przez klasy lub obiekty. Są bardziej elastyczne od abstrakcyjnych klas, ponieważ pozwalają klasom na dziedziczenie od wielu interfejsów (TypeScript nie wspiera wielodziedziczenia z klas).

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Duck implements Flyable, Swimmable {
  fly(): void {
    console.log("The duck is flying.");
  }

  swim(): void {
    console.log("The duck is swimming.");
  }
}

const duck = new Duck();
duck.fly();
duck.swim();
