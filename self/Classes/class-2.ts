class Book {
  public title: string;
  public author: string;
  public pages: number;
  private isAvailable: boolean;

  constructor(
    title: string,
    author: string,
    pages: number,
    isAvailable: boolean
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  public toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }

  public isBookAvailable(): boolean {
    return this.isAvailable;
  }
}

class LibraryBook extends Book {
  public libraryId: number;

  constructor(
    title: string,
    author: string,
    pages: number,
    isAvailable: boolean,
    libraryId: number
  ) {
    super(title, author, pages, isAvailable);
    this.libraryId = libraryId;
  }

  public printBookDetails(): void {
    console.log(
      `Book: ${this.title}. Author: ${this.author}. Book has ${
        this.pages
      } pages. Is in magazine: ${this.isBookAvailable() ? "yes" : "no"}`
    );
  }
}

const myBook = new LibraryBook(
  "Jakc Reacher - Elita Zabójcow",
  "Lee Child",
  432,
  true,
  9788367513340
);

myBook.printBookDetails();
myBook.toggleAvailability();
myBook.printBookDetails();
