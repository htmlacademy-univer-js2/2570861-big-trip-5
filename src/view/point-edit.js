import AbstractView from '../framework/view/abstract-view.js';

function createPointRouteListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class RoutePointList extends AbstractView {
  get template() {
    return createPointRouteListTemplate();
  }
}
