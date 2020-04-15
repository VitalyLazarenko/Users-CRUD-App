import {IUser} from './IUser';

export interface IReduxState {
  users: IUser[];
  selectedUser: IUser;
  loading: boolean;
}
