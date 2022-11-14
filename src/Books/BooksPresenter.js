import booksRepository from "./BooksRepository.js";

export default class BooksPresenter {
  load = async (vmCallback) => {
    booksRepository.getBooks((booksPm) => {
      console.log("**** BooksPresenter.load ****");
      const booksVm = booksPm.map((bookPm) => {
        console.log("BooksPresenter.load: bookPm.name=", bookPm.name);
        return { name: bookPm.name };
      });
      vmCallback(booksVm);
    });
  };

  addBook = async (requestDto) => {
    booksRepository.addBook(requestDto);
  };
}
