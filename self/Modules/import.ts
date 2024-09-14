// Importowanie
// 1. Importowanie nazwane:
import { add, PI } from "./export";

console.log(add(5, 3));
console.log(PI);

// 2.Importowanie domyślne:
import multiply from "./export";

console.log(multiply(4, 5));

// 3. Można również zmienić nazwę importu:
import { add as sum } from "./export";
