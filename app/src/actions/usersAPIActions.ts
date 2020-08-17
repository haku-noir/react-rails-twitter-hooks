import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const usersAPIActions = {
  updateUsers: actionCreator<void>('API_UPDATE_USERS'),
  updateUsersDone: actionCreator<void>('API_UPDATE_USERS_DONE'),
  loginUser: actionCreator<void>('API_LOGIN_USER'),
  loginUserDone: actionCreator<void>('API_LOGIN_USER_DONE'),
};
