import HttpGateway from "../Shared/HttpGateway.js";
import Observable from "../Shared/Observable.js";

class BooksRepository {
  httpGateway = null;
  programmersModel = null;
  apiUrl = "https://api.logicroom.co/api/pete@logicroom.co/";

  constructor() {
    this.httpGateway = new HttpGateway();
    this.programmersModel = new Observable([]);
  }

  getBooks = (pmCallback) => {
    this.programmersModel.subscribe(pmCallback);
    this.loadApiData();
    this.programmersModel.notify();
  };

  addBook = async (requestDto) => {
    if (this.addApiData(requestDto)) {
      this.loadApiData();
      this.programmersModel.notify();
    } else {
      console.log("add Failure");
    }
  };

  loadApiData = async () => {
    const booksDto = await this.httpGateway.get(this.apiUrl + "books");
    this.programmersModel.value = booksDto.result.map((bookDto) => {
      return bookDto;
    });
  };

  addApiData = async (requestDto) => {
    const response = await this.httpGateway.post(
      this.apiUrl + "books",
      requestDto
    );
    return response.success;
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
