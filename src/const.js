// Временные константы
export const TimePeriods = {
  MSEC_IN_SEC : 1000,
  MSEC_IN_HOUR: 60 * 60 * 1000,
  MSEC_IN_DAY : 24 * 60 * 60 * 1000,
};

export const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

// Фильтры и сообщения для пустых списков
export const PointFilters = {
  EVERYTHING: 'everything',
  FUTURE    : 'future',
  PRESENT   : 'present',
  PAST      : 'past',
};

export const EmptyListMessage = {
  [PointFilters.EVERYTHING]: 'Click New Event to create your first point',
  [PointFilters.FUTURE]    : 'There are no future events now',
  [PointFilters.PRESENT]   : 'There are no present events now',
  [PointFilters.PAST]      : 'There are no past events now',
};

// Режимы отображения/редактирования
export const Mode = {
  DEFAULT : 'default',
  EDITING: 'editing',
};

// Типы сортировки и активные сортировки
export const SortType = {
  DAY   : 'day',
  EVENT : 'event',
  TIME  : 'time',
  PRICE : 'price',
  OFFERS: 'offers',
};

export const EnabledSortType = {
  [SortType.DAY]   : true,
  [SortType.EVENT] : false,
  [SortType.TIME]  : true,
  [SortType.PRICE] : true,
  [SortType.OFFERS]: false,
};

// Метки кнопок
export const ButtonLabel = {
  CANCEL            : 'Cancel',
  DELETE            : 'Delete',
  SAVE              : 'Save',
  DELETE_IN_PROGRESS: 'Deleting...',
  SAVE_IN_PROGRESS  : 'Saving...',
};

// Пустая точка маршрута
const DEFAULT_TYPE = 'flight';

export const POINT_EMPTY = {
  basePrice : 0,
  dateFrom  : null,
  dateTo    : null,
  destination: null,
  isFavorite: false,
  offers    : [],
  type      : DEFAULT_TYPE,
};

// Пользовательские действия
export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT   : 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

// Типы обновлений
export const UpdateType = {
  INIT : 'INIT',
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

// Типы форм
export const FormType = {
  EDITING : 'EDITING',
  CREATING: 'CREATING',
};

// HTTP-методы
export const Method = {
  GET   : 'GET',
  POST  : 'POST',
  PUT   : 'PUT',
  DELETE: 'DELETE',
};
