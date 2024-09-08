// Class

// Klasy są szablonami do tworzenia obiektów, zawierającymi właściwości i metody. W TypeScript klasy pozwalają także na korzystanie z typowania, co dodatkowo zwiększa czytelność i bezpieczeństwo kodu.

// Podstawowa składnia klasy:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Alice", 30);

// Dziedziczenie (extends)
// Dziedziczenie pozwala na tworzenie nowych klas na podstawie istniejących. Nowa klasa (subclass) dziedziczy właściwości i metody klasy bazowej (superclass).

class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age); // Wywołuje konstruktor klasy bazowej
    this.jobTitle = jobTitle;
  }

  describeJob(): void {
    console.log(`${this.name} works as a ${this.jobTitle}.`);
  }
}

const employee = new Employee("Bob", 25, "Developer");
// employee.greet();
// employee.describeJob();

// Modyfikatory dostępu
// TypeScript obsługuje trzy główne modyfikatory dostępu, które kontrolują widoczność właściwości i metod:
// - public (domyślnie): Właściwości i metody są dostępne wszędzie.
// - private: Właściwości i metody są dostępne tylko wewnątrz klasy.
// - protected: Właściwości i metody są dostępne w klasie i jej podklasach.

class BankAccount {
  public accountNumber: number;
  private balance: number; // Ukryte przed użytkowanikiem klasy
  protected owner: string; // Dostępne w klasach dziedziczących

  constructor(accountNumber: number, balance: number, owner: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
  }

  public getBalance(): number {
    return this.balance; // Można uzyskać dostęp przez metodę publiczną
  }
}

class BusinessAccount extends BankAccount {
  constructor(accountNumber: number, balance: number, owner: string) {
    super(accountNumber, balance, owner);
  }

  public printOwner(): void {
    console.log(`Account owner: ${this.owner}`);
  }
}

const myAccount = new BusinessAccount(12345, 1000, "Alice");
myAccount.deposit(500); // Deposited 500. New balance is 1500.
// myAccount.banalce; // Błąd: 'balance' jest prywatne
myAccount.printOwner(); // Account owner: Alice
console.log(myAccount.getBalance());
