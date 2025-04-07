import Filters from '../view/filters';
import FormEditing from '../view/form-edit';
import Point from '../view/point';
import Sorting from '../view/sorting';
import { render, replace } from '../framework/render';
import PointEdit from '../view/point-edit';
export default class Presenter {
  PointRouteListPart = new PointEdit();

  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #points = null;
  #offers = null;
  #destinations = null;

  constructor({pointsModel, offersModel, destinationsModel}) {
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.tripEvents = document.querySelector('.trip-events');
    this.tripControlFilters = document.querySelector('.trip-controls__filters');
  }

  init() {
    this.#points = this.#pointsModel.points;
    this.#offers = this.#offersModel.offers;
    this.#destinations = this.#destinationsModel.destinations;

    render(new Filters(), this.tripControlFilters);
    render(new Sorting(), this.tripEvents);
    render(this.PointRouteListPart, this.tripEvents);

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const escKeyHandler = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyHandler);
      }
    };

    const editForm = new FormEditing({
      point,
      destinations: this.#destinations,
      offers: this.#offers,
      onSubmitClick: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyHandler);
      },
      onRollButtonClick: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyHandler);
      }
    });

    const pointItem = new Point({
      point,
      destinations: this.#destinations,
      offers: this.#offers,
      onRollButtonClick: () => {
        replacePointToEditForm();
        document.addEventListener('keydown', escKeyHandler);
      }
    });

    function replacePointToEditForm() {
      replace(editForm, pointItem);
    }

    function replaceEditFormToPoint() {
      replace(pointItem, editForm);
    }

    render(pointItem, this.PointRouteListPart.element);
  }
}
