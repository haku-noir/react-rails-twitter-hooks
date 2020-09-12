import actionCreatorFactory from 'typescript-fsa';
import { UsersState } from 'reducers/usersReducer';

const actionCreator = actionCreatorFactory();

export const usersActions = {
  updateIndex: actionCreator<UsersState["index"]>('UPDATE_USERS_INDEX'),
  updateLogin: actionCreator<UsersState["login"]>('UPDATE_USERS_LOGIN'),
  setLogout: actionCreator<void>('SET_USERS_LOGOUT'),
};
