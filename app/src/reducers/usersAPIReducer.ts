import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersAPIActions } from 'actions/usersAPIActions';
import { UserState, initialUser } from 'reducers/entitiesReducer';

export type UsersAPIState = {
  fetching: boolean,
  loggedinUser: UserState,
  loggingout: boolean,
  registeredUser: UserState
};

const initialState: UsersAPIState = {
  fetching: true,
  loggedinUser: initialUser,
  loggingout: false,
  registeredUser: initialUser
};

export const usersAPIReducer = reducerWithInitialState(initialState)
  .case(usersAPIActions.fetchUsers, (state: UsersAPIState) => ({
    ...state,
    fetching: true,
  }))
  .case(usersAPIActions.fetchUsersDone, (state: UsersAPIState) => ({
    ...state,
    fetching: false,
  }))
  .case(usersAPIActions.loginUser, (state: UsersAPIState, payload: UserState) => ({
    ...state,
    loggedinUser: payload,
  }))
  .case(usersAPIActions.loginUserDone, (state: UsersAPIState) => ({
    ...state,
    loggedinUser: initialUser,
  }))
  .case(usersAPIActions.logoutUser, (state: UsersAPIState) => ({
    ...state,
    loggingout: true,
  }))
  .case(usersAPIActions.logoutUserDone, (state: UsersAPIState) => ({
    ...state,
    loggingout: false,
  }))
  .case(usersAPIActions.registerUser, (state: UsersAPIState, payload: UserState) => ({
    ...state,
    registeredUser: payload,
  }))
  .case(usersAPIActions.registerUserDone, (state: UsersAPIState) => ({
    ...state,
    registeredUser: initialUser,
  }))
