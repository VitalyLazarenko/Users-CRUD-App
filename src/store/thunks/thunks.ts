import {ActionCreators} from '../actions';
import {UserService} from '../../api';
import {IUser} from '../../interfaces';

export function getUsersThunk() {
  return (dispatch: (action: any) => void) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    UserService.getAll().then((users: IUser[]) => {
      dispatch(ActionCreators.setUsersActionCreator(users));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}

export function createUserThunk(data: IUser) {
  return (dispatch: (action: any) => void) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    UserService.create(data).then((user: IUser) => {
      dispatch(ActionCreators.createUserActionCreator(user));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}

export function updateUserThunk(id: number, data: IUser) {
  return (dispatch: (action: any) => void) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    UserService.update(id, data).then(() => {
      dispatch(ActionCreators.updateUserActionCreator(id, data));
      dispatch(ActionCreators.deselectUserActionCreator());
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}

export function removeUserThunk(id: number) {
  return (dispatch: (action: any) => void) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    UserService.remove(id).then((removedUserId: number) => {
      dispatch(ActionCreators.removeUserActionCreator(removedUserId));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}
