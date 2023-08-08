type Listener = () => void;

export default class Store {
  listeners : Set<Listener>;

  constructor() {
    this.listeners = new Set();
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: Listener) {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }
}
