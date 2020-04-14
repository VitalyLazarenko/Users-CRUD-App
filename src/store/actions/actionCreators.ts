import IUser from '../../interfaces';
import {actionTypes} from './actionTypes';

export class ActionCreators {
  switchLoadingSpinnerActionCreator(enable: boolean) {
    return {type: actionTypes.UI_LOADING};
  }
  setUsersActionCreator(users: IUser[]) {
    return {type: actionTypes.SET_USER_LIST};
  }
  selectUserActionCreator(id: number) {
    return {type: actionTypes.SELECT_USER};
  }
  deselectUserActionCreator() {
    return {type: actionTypes.DESELECT_USER};
  }
  updateUserActionCreator(id: number, data: IUser) {
    return {type: actionTypes.UPDATE_USER};
  }
  removeUserActionCreator(id: number) {
    return {type: actionTypes.REMOVE_USER};
  }
}
