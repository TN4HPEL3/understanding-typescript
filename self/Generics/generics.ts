// Generics pozwalają tworzyć komponenty, które mogą pracować z różnymi typami danych przy zachowaniu silnego typowania. Dzięki nim możemy pisać bardziej elastyczny i wielokrotnego użytku kod.

// Najprostszy przykład użycia generics to funkcja, która może przyjąć argument dowolnego typu, ale jednocześnie zachowuje typowanie zwracanej wartości.

function identity<T>(arg: T): T {
  return arg;
}
// - T to symbol oznaczający "typ", który jest zmienny. Może to być dowolna litera, ale T jest powszechnie używane w dokumentacji TypeScript.
// - Funkcja identity przyjmuje argument arg o typie T i zwraca wartość tego samego typu.

// Przykład użycia:
console.log(identity<string>("Hello!"));
console.log(identity<number>(42));

// TypeScript automatycznie rozpoznaje typy, więc można pominąć <string> lub <number>, a TS wykryje typy:
console.log(identity("Hi"));
console.log(identity(24));

// 1. Generics z tablicami
// Generics są często stosowane z tablicami, aby stworzyć funkcje obsługujące tablice dowolnych typów.
// Przykład:
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["apple", "banana"]));

// 2. Generics z interfejsami i klasami
// Generics mogą być również używane w klasach oraz interfejsach, co pozwala tworzyć komponenty pracujące z różnymi typami.
// Przykład z interfejsem:
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 100 };
const stringBox: Box<string> = { content: "TypeScript" };

console.log(numberBox.content);
console.log(stringBox.content);

// 3. Ograniczenie typów w Generics
// Możemy ograniczać typy, jakie mogą być używane z generics, poprzez użycie extends. Na przykład, wymusimy, aby dany typ miał określone właściwości.

interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("Hello");
logLength([1, 2, 3]);
logLength({ length: 10 });
