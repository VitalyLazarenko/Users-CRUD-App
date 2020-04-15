import {actionTypes} from '../actions';
import {IUser} from '../../interfaces';

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.UI_LOADING:
      return {...state, loading: action.status};

    case actionTypes.CREATE_USER:
      return {
        ...state,
        users: [...state.users, {...action.data}],
      };

    case actionTypes.SET_USER_LIST:
      return {...state, users: action.users};

    case actionTypes.SELECT_USER:
      return {
        ...state,
        selectedUser: state.users.find((user: IUser) => user.id === action.id),
      };

    case actionTypes.DESELECT_USER:
      return {
        ...state,
        selectedUser: {
          id: 0,
          name: null,
          phone: null,
          email: null,
          website: null,
          company: {name: null},
        },
      };

    case actionTypes.UPDATE_USER:
      let users: IUser[] = state.users.map((user: IUser) => {
        if (user.id === action.id) {
          return {...action.data};
        }
        return user;
      });
      return {...state, users};

    case actionTypes.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user: IUser) => user.id !== action.id),
      };

    default:
      return {...state};
  }
};
