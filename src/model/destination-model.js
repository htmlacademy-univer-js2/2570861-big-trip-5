import { mockDestinations } from '../mock/destinations-mock';

export default class DestinationsModel {
  get destinations() {
    return [...mockDestinations];
  }
}
