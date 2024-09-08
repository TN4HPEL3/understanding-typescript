// Exercise

abstract class Shape {
  abstract calculateArea(): number;

  printArea(): void {
    console.log(`Area: ${this.calculateArea()}`);
  }
}

interface Drawable {
  draw(): void;
}

class Circle extends Shape implements Drawable {
  radius: number;

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  draw(): void {
    console.log("The circle is drawing...");
  }

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
}

class Rectangle extends Shape implements Drawable {
  width: number;
  height: number;

  calculateArea(): number {
    return this.width * this.height;
  }

  draw(): void {
    console.log("The rectangle is drawing...");
  }

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}

const myCircle = new Circle(3);
myCircle.printArea();
myCircle.draw();

const myRectangle = new Rectangle(2, 4);
myRectangle.printArea();
myRectangle.draw();
