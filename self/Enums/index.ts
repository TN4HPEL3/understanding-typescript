// Enums (Wyliczenia) w TypeScript
// Enums w TypeScript pozwalają na definiowanie zestawu nazwanych wartości liczbowych lub tekstowych. Są przydatne do definiowania stałych, które reprezentują zestaw powiązanych wartości, np. dni tygodnia, kierunki, stany aplikacji itp.

// Rodzaje wyliczeń
// - Numeric Enums - enums liczbowe
// - String Enums - enums tekstowe
// - Heterogeneous Enums - enums heterogeniczne - mieszanie typów liczbowych i tekstowych

// 1. Numeric Enums (liczbowe enums)
// Numeric enums domyślnie zaczynają liczyć od zera, ale można to zmienić, ustawiając wartość początkową.
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);
console.log(Direction.Left);

// 2. String Enums (tekstowe enums)
// String enums przypisują każdej wartości enumu odpowiednią nazwę tekstową, co może być bardziej czytelne w logach czy debugowaniu.
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}

console.log(Status.Success);
console.log(Status.Pending);

// 3. Heterogeneus Enums (heterogeniczne enums)
// Enums heterogeniczne to takie, które mieszają wartości liczbowe i tekstowe, chociaż ich użycie jest mało powszechne i raczej niezalecane ze względu na brak spójności.
enum Mixed {
  No = 0,
  Yes = "YES",
}

console.log(Mixed.No);
console.log(Mixed.Yes);

// Korzyści z używania enums
// Lepsza czytelność kodu: Enums sprawiają, że kod jest bardziej zrozumiały, gdyż jasno wskazują, co reprezentują określone wartości.
// Zapobieganie błędom: Używając enums, łatwiej unikać literówek i niepoprawnych wartości, ponieważ TypeScript wymusi użycie jednej z zdefiniowanych wartości.
// Łatwiejsze refaktoryzacje: Jeśli zmieni się jedna wartość w enumie, jest ona automatycznie zmieniana we wszystkich miejscach, gdzie była użyta.

enum Dice {
  First = 1,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
}

function rollDice(number: Dice) {
  switch (number) {
    case Dice.First:
      return "You got 1";
    case Dice.Second:
      return "You got 2";
    case Dice.Third:
      return "You got 3";
    case Dice.Fourth:
      return "You got 4";
    case Dice.Fifth:
      return "You got 5";
    case Dice.Sixth:
      return "You got 6";
    default:
      return "Roll again...";
  }
}

console.log(rollDice(Dice.Fourth));
console.log(rollDice(Dice.Third));
