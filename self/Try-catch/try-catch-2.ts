// Walidacja dzielenia przez zero
class DivisionByZeroError extends Error {
  constructor() {
    super("Can't divide by zero");
    this.name = "DivisionByZeroError";
  }
}

function divide(numerator: number, denominator: number): number {
  if (denominator === 0) {
    throw new DivisionByZeroError();
  }

  return numerator / denominator;
}

try {
  const result = divide(10, 0);
  console.log(`Result: ${result}`);
} catch (error: unknown) {
  if (error instanceof DivisionByZeroError) {
    console.error(`Error: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`General error: ${error.message}`);
  } else {
    console.error("Unknown error occurred");
  }
}

//
//
//

// Walidacja użytkownika
class InvalidUsernameError extends Error {
  constructor() {
    super("User name is to short");
    this.name = "InvalidUsernameError";
  }
}

class InvalidAgeError extends Error {
  constructor() {
    super("User is child");
    this.name = "InvalidAgeError";
  }
}

interface User {
  name: string;
  age: number;
}

function validateUser(user: User): void {
  if (user.name.length < 3) {
    throw new InvalidUsernameError();
  } else if (user.age < 18) {
    throw new InvalidAgeError();
  } else {
    console.log("User pass validation");
  }
}

function handleError(error: unknown): void {
  if (error instanceof InvalidUsernameError) {
    console.error(`Error: ${error.message}.`);
  } else if (error instanceof InvalidAgeError) {
    console.error(`Error: ${error.message}.`);
  } else if (error instanceof Error) {
    console.error(`General error.`);
  } else {
    console.error(`Uknown error occurred.`);
  }
}

// 1.
try {
  const user: User = {
    name: "Aga",
    age: 18,
  };
  validateUser(user);
} catch (error: unknown) {
  handleError(error);
}

// 2.
try {
  const shortUser: User = {
    name: "Ag",
    age: 18,
  };
  validateUser(shortUser);
} catch (error: unknown) {
  handleError(error);
}

// 3.
try {
  const childUser: User = {
    name: "Aga",
    age: 17,
  };
  validateUser(childUser);
} catch (error: unknown) {
  handleError(error);
}

//
//
//

// Walidacja wypłaty z bankomatu

class InsufficientFundsError extends Error {
  constructor() {
    super("Insufficient funds in your account.");
    this.name = "InsufficientFundsError";
  }
}

class InvalidAmountError extends Error {
  constructor() {
    super("Invalid amount.");
    this.name = "InvalidAmountError";
  }
}

function withdraw(balance: number, amount: number): void {
  if (balance < amount) {
    throw new InsufficientFundsError();
  } else if (amount <= 0) {
    throw new InvalidAmountError();
  } else {
    console.log("Cash is withdrawing...");
  }
}

function handleWithdrawError(error: unknown): void {
  if (error instanceof InsufficientFundsError) {
    console.error(`Error: ${error.message}`);
  } else if (error instanceof InvalidAmountError) {
    console.error(`Error: ${error.message}`);
  } else if (error instanceof Error) {
    console.error("General error.");
  } else {
    console.error("Unknown error");
  }
}

// 1. Correct amount
try {
  withdraw(1000, 100);
} catch (error: unknown) {
  handleWithdrawError(error);
}

// 2. Invalid amount to withdraw
try {
  withdraw(1000, 0);
} catch (error: unknown) {
  handleWithdrawError(error);
}

// 3. Insufficient funds in account
try {
  withdraw(1000, 1100);
} catch (error: unknown) {
  handleWithdrawError(error);
}
