import {actionTypes} from './../actions/actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UI_LOADING:
    // return {...state, loading: true};
    case actionTypes.SET_USER_LIST:
    // return {...state, loading: false, users: action.users};
    case actionTypes.SELECT_USER:
    // return {...state, loading: false, users: action.users};
    case actionTypes.DESELECT_USER:
    // return {...state, loading: false, users: action.users};
    case actionTypes.UPDATE_USER:
    // return {...state, loading: false, users: action.users};
    case actionTypes.REMOVE_USER:
    // return {...state, loading: false, users: action.users};
    default:
      return {...state};
  }
};
