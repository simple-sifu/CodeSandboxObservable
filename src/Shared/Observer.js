export default class Observer {
  _value = null;
  observers = [];

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
    this.observers.push(subscribeCallback);
  };

  notify = () => {
    this.observers.map((observer) => {
      observer(this._value);
    });
  };
}
