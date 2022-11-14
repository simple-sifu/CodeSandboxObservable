import booksRepository from "./BooksRepository.js";

export default class BooksPresenter {
  load = async (vmCallback) => {
    booksRepository.getBooks((booksPm) => {
      const booksVm = booksPm.map((bookPm) => {
        return { name: bookPm.name };
      });
      vmCallback(booksVm);
    });
  };

  addBook = async (requestDto) => {
    booksRepository.addBook(requestDto);
  };
}
