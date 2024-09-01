// Typowanie statyczne oznacza, że typy danych są znane i sprawdzane podczas kompilacji, a nie w czasie wykonywania programu.

// 1. Jawne typowanie
let year: number = 2024;
let nick: string = "nickname";
let isEnable: boolean = true;

// 2. Typowanie przez inferencję
let city = "New Your";
let count = 100;
// TypeScript automatycznie rozpoznaje typy i przypisuje je.

// 3. Błedy typowania
// TypeScript nie pozwala przypisywać wartości innego typu niż zadeklarowany
let isCompleted: boolean = false;
// isCompleted = "yes"; // Error

// 4. Funkcje z typowaniem statycznym
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(5, 10)); // 15
// console.log(addNumbers(5, "10")); // Error

//
//
//

// Korzyści z Typowania Statycznego
// Bezpieczeństwo i przewidywalność kodu: Typowanie statyczne pozwala wyłapać wiele błędów na etapie kompilacji, co zwiększa stabilność kodu.

// Lepsza dokumentacja i autouzupełnianie: Dzięki typom IDE mogą lepiej wspierać programistę, podpowiadając dostępne właściwości i metody.

// Refaktoryzacja: Zmiana typów lub nazw zmiennych/funkcji jest bezpieczniejsza, ponieważ kompilator od razu pokaże miejsca, gdzie trzeba dokonać zmian.

// Lepsze wsparcie dla dużych zespołów i projektów: Typy pomagają w utrzymaniu spójności kodu, co jest szczególnie ważne w dużych projektach.
