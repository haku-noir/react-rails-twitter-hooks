import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const usersAPIActions = {
  fetchUsers: actionCreator<void>('API_FETCH_USERS'),
  fetchUsersDone: actionCreator<void>('API_FETCH_USERS_DONE'),
  loginUser: actionCreator<void>('API_LOGIN_USER'),
  loginUserDone: actionCreator<void>('API_LOGIN_USER_DONE'),
};
