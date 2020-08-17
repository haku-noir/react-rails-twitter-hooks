import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersAPIActions } from 'actions/usersAPIActions';
import { UserState } from 'reducers/entitiesReducer';

export type UsersAPIState = {
  fetching: boolean,
  loggingin: boolean
};

const initialState: UsersAPIState = {
  fetching: true,
  loggingin: false
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
  .case(usersAPIActions.loginUser, (state: UsersAPIState) => ({
    ...state,
    loggingin: true,
  }))
  .case(usersAPIActions.loginUserDone, (state: UsersAPIState) => ({
    ...state,
    loggingin: false,
  }))
