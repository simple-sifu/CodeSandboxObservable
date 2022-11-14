import booksRepository from "./BooksRepository.js";

export default class BooksPresenter {
  load = async (setVMCallback) => {
    booksRepository.getBooks((booksPm) => {
      const booksVm = booksPm.map((bookPm) => {
        return { name: bookPm.name };
      });
      setVMCallback(booksVm);
    });
  };
}
