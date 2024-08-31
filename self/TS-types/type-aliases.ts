// Typy niestandardowe (Type Aliases)
// Pozwalają na tworzenie aliasów typów.

type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };
console.log(point);

// Typy unijne z aliasami
type ID = number | string;

let productID: ID = 123;
productID = "SKU123"; // Right

//
//
//

type Coordinates = {
  x: number;
  y: number;
};

function calculateDistance(point1: Coordinates, point2: Coordinates): number {
  return Math.sqrt(
    Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
  );
}

const p1: Coordinates = { x: 0, y: 0 };
const p2: Coordinates = { x: 3, y: 4 };

console.log(calculateDistance(p1, p2));
