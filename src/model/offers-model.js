import { mockOffers } from '../mock/offers-mock';

export default class OffersModel {
  get offers() {
    return [...mockOffers];
  }
}
