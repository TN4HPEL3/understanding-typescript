// Interfejsy (Interfaces)
// Służą do definiowania kształtu obiektów i są bardzo użyteczne do typowania struktur danych. Pozwalają na definiowanie wartości, ktore obiekt musi zawierać, ale bez implementacji.
interface User {
  name: string;
  age: number;
  isActive?: boolean; // Właściwość opcjonalna
}

const user1: User = {
  name: "John",
  age: 25,
  isActive: true,
};

const user2: User = {
  name: "Jane",
  age: 30,
};

console.log(user1, user2);

//
//
//

interface Car {
  brand: string;
  model: string;
  year: number;
  isElectric?: boolean;
}

const firstCar: Car = {
  brand: "Audi",
  model: "A8",
  year: 2022,
  isElectric: false,
};

const secondCar: Car = {
  brand: "BMW",
  model: "M4",
  year: 2021,
};

console.log(firstCar, secondCar);
