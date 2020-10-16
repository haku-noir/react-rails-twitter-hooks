import actionCreatorFactory from 'typescript-fsa';
import { UserState } from 'reducers/entitiesReducer';

const actionCreator = actionCreatorFactory();

export const usersAPIActions = {
  fetchUsers: actionCreator<void>('API_FETCH_USERS'),
  fetchUsersDone: actionCreator<void>('API_FETCH_USERS_DONE'),
  loginUser: actionCreator<UserState>('API_LOGIN_USER'),
  loginUserDone: actionCreator<void>('API_LOGIN_USER_DONE'),
  logoutUser: actionCreator<void>('API_LOGOUT_USER'),
  logoutUserDone: actionCreator<void>('API_LOGOUT_USER_DONE'),
  registerUser: actionCreator<UserState>('API_REGISTER_USER'),
  registerUserDone: actionCreator<void>('API_REGISTER_USER_DONE'),
  fetchUserTweets: actionCreator<number>('API_FETCH_USER_TWEETS'),
  fetchUserTweetsDone: actionCreator<void>('API_FETCH_USER_TWEETS_DONE'),
  fetchLoginUser: actionCreator<number>('API_FETCH_LOGIN_USER'),
  fetchLoginUserDone: actionCreator<void>('API_FETCH_LOGIN_USER_DONE'),
};
