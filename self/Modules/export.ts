// W TypeScript (i JavaScript) moduły są jednostkami kodu, które mogą eksportować funkcje, klasy, zmienne itp., a inne moduły mogą je importować i używać.

// Eksportowanie
// Możesz eksportować elementy na dwa sposoby:
// 1. Eksportowanie nazwane (named export) — eksportujesz elementy pojedynczo, co pozwala importującemu na wybór konkretnych elementów.
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;

// 2.Eksportowanie domyślne (default export) — pozwala na eksport jednego głównego elementu z modułu, który może być importowany bez nawiasów klamrowych { }.
export default function multiply(a: number, b: number): number {
  return a * b;
}
