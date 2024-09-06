console.log("Your code goes here...");

function logNameLength<T extends { name: string; id: number }>(item: T): void {
  console.log(`${item.name.length}, ID: ${item.id}`);
}

logNameLength({ name: "Alice", age: 26, id: 2 });
logNameLength({ name: "Bob", id: 1 });

//
//
//

type User = {
  id: number;
  name: string;
  email: string;
};

type Admin = User & {
  permissions: string[];
};

const admin: Admin = {
  id: 1,
  name: "Chef",
  email: "chef@post.eu",
  permissions: ["create", "edit", "delete"],
};

console.log(`Current user:`, admin);

//
//
//

interface Vehicle {
  id: number;
  brand: string;
}

interface Car extends Vehicle {
  model: string;
}

const myDreamCar: Car = {
  id: 1,
  brand: "Toyota",
  model: "Supra",
};

console.log(myDreamCar);
