import BoardPresenter from './presenter/presenter.js';
import EventsModel from './model/events-model.js';

const eventsModel = new EventsModel();
const currentPresenter = new BoardPresenter({eventsModel});

currentPresenter.init();
