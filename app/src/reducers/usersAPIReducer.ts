import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersAPIActions } from 'actions/usersAPIActions';
import { UserState } from 'reducers/entitiesReducer';

export type UsersAPIState = {
  fetching: boolean,
  loggedinUser: UserState,
  loggingout: boolean
};

const initialState: UsersAPIState = {
  fetching: true,
  loggedinUser: {
    id: 0,
    name: '',
    password: ''
  },
  loggingout: false
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
    loggedinUser: {
      id: 0,
      name: '',
      password: ''
    },
  }))
  .case(usersAPIActions.logoutUser, (state: UsersAPIState) => ({
    ...state,
    loggingout: true,
  }))
  .case(usersAPIActions.logoutUserDone, (state: UsersAPIState) => ({
    ...state,
    loggingout: false,
  }))
