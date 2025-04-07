import Presenter from './presenter/presenter.js';
import EventsModel from './model/events-model.js';

const eventsModel = new EventsModel();
const eventsContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');

const currentPresenter = new Presenter({
  eventsContainer,
  filterContainer,
  eventsModel
});

currentPresenter.init();
