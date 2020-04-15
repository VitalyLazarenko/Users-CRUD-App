import IUser from '../../interfaces';
import {actionTypes} from './actionTypes';

export class ActionCreators {
  switchLoadingSpinnerActionCreator(status: boolean) {
    return {type: actionTypes.UI_LOADING, status};
  }
  setUsersActionCreator(users: IUser[]) {
    return {type: actionTypes.SET_USER_LIST, users};
  }
  selectUserActionCreator(id: number) {
    return {type: actionTypes.SELECT_USER, id};
  }
  deselectUserActionCreator() {
    return {type: actionTypes.DESELECT_USER};
  }
  updateUserActionCreator(id: number, data: IUser) {
    return {type: actionTypes.UPDATE_USER, id, data};
  }
  removeUserActionCreator(id: number) {
    return {type: actionTypes.REMOVE_USER, id};
  }
}
