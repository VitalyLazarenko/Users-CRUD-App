import {IUser} from '../../interfaces';
import {actionTypes} from './actionTypes';

export class ActionCreators {
  static switchLoadingSpinnerActionCreator(status: boolean) {
    return {type: actionTypes.UI_LOADING, status};
  }
  static setUsersActionCreator(users: IUser[]) {
    return {type: actionTypes.SET_USER_LIST, users};
  }
  static selectUserActionCreator(id: number) {
    return {type: actionTypes.SELECT_USER, id};
  }
  static deselectUserActionCreator() {
    return {type: actionTypes.DESELECT_USER};
  }
  static updateUserActionCreator(id: number, data: IUser) {
    return {type: actionTypes.UPDATE_USER, id, data};
  }
  static removeUserActionCreator(id: number) {
    return {type: actionTypes.REMOVE_USER, id};
  }
}
