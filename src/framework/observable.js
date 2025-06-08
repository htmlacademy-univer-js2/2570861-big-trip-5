
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

  /**
   * Метод для оповещения подписчиков о наступлении события
   * @param {*} event Тип события
   * @param {*} payload Дополнительная информация
   */
  _notify(event, payload) {
    this.#observers.forEach((observer) => observer(event, payload));
  }
}

