import {ActionCreators} from '../actions';
import {UserService} from '../../api';
import {IUser} from '../../interfaces';

export function getUsersThunk() {
  return (dispatch: any) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    UserService.getAll().then((users: IUser[]) => {
      dispatch(ActionCreators.setUsersActionCreator(users));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}

export function updateUserThunk(id: number, data: IUser) {
  return (dispatch: any) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    UserService.update(id, data).then((updatedUserId: number) => {
      dispatch(ActionCreators.updateUserActionCreator(updatedUserId, data));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}

export function removeUserThunk(id: number) {
  return (dispatch: any) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    UserService.remove(id).then((removedUserId: number) => {
      dispatch(ActionCreators.removeUserActionCreator(removedUserId));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}
