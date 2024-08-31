// Klasy (class) - obiektowość w TS
// TypeScript pozwala na pracę z klasami, co wprowadza pełne wsparcie dla obiektowości, w tym dziedziczenia i enkapsulacji.
// np.

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
dog.makeSound();

//
//
//

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * this.width + 2 * this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.calculateArea());
console.log(rect.calculatePerimeter());
