// 1. Typowanie błędów w try/catch
// W JavaScript i TypeScript możemy obsługiwać błędy za pomocą bloku try/catch. W TypeScript dodatkowo możemy typować błędy, co pomaga uniknąć problemów z błędami, które mają nieoczekiwane struktury.

try {
  // Kod, ktory może rzucić wyjątek
} catch (error) {
  // Obsługa błedów
}

// W TypeScript warto jest typować error, na przykład jako unknown, aby upewnić się, że sprawdzamy jego typ przed użyciem.

try {
  throw new Error("Something went wrong!");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Unknown error");
  }
}

// 2. Tworzenie niestandardowych błędów
// Czasami potrzebujemy bardziej specyficznych wyjątków niż te, które oferuje standardowy Error. Możemy stworzyć własne klasy błędów dziedzicząc po Error.

// Przykład niestandardowego błędu:
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid data provided");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation error: ${error.message}`);
  } else {
    console.log("General error");
  }
}
