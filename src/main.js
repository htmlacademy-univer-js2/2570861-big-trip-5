import Presenter from './presenter/presenter.js';
import EventsModel from './model/events-model.js';

const eventsModel = new EventsModel();
const currentPresenter = new Presenter({eventsModel});

currentPresenter.init();
