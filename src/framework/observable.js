
export default class Observable {
  #observers = new Set();

  /**
   * Метод, позволяющий подписаться на событие
   * @param {observerCallback} observer Функция, которая будет вызвана при наступлении события
   */
  addObserver(observer) {
    this.#observers.add(observer);
  }


  removeObserver(observer) {
    this.#observers.delete(observer);
  }


  _notify(event, payload) {
    this.#observers.forEach((observer) => observer(event, payload));
  }
}

