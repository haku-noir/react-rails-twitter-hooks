import actionCreatorFactory from 'typescript-fsa';
import { UserState } from 'reducers/entitiesReducer';

const actionCreator = actionCreatorFactory();

export const usersAPIActions = {
  fetchUsers: actionCreator<void>('API_FETCH_USERS'),
  fetchUsersDone: actionCreator<void>('API_FETCH_USERS_DONE'),
  loginUser: actionCreator<UserState>('API_LOGIN_USER'),
  loginUserDone: actionCreator<void>('API_LOGIN_USER_DONE'),
};
