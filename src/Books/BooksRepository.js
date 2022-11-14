import HttpGateway from "../Shared/HttpGateway.js";
import Observer from "../Shared/Observer.js";

class BooksRepository {
  httpGateway = null;
  programmersModel = new Observer();
  apiUrl = "https://api.logicroom.co/api/pete@logicroom.co/";

  constructor() {
    this.httpGateway = new HttpGateway();
  }

  getBooks = (setPMCallback) => {
    this.programmersModel.subscribe(setPMCallback);
    this.loadApiData();
    this.programmersModel.notify();
  };

  loadApiData = async () => {
    const booksDto = await this.httpGateway.get(this.apiUrl + "books");
    this.programmersModel.value = booksDto.result.map((bookDto) => {
      return bookDto;
    });
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
