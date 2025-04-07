import { mockPoints } from '../mock/points-mock';

export default class PointsModel {
  get points() {
    return [...mockPoints];
  }
}
