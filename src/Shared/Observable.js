export default class Observable {
  _value = null;
  observables = [];

  constructor(initialValue) {
    this._value = initialValue;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  subscribe = (subscribeCallback) => {
    this.observables.push(subscribeCallback);
  };

  notify = () => {
    this.observables.map((observable) => {
      observable(this._value);
    });
  };
}
