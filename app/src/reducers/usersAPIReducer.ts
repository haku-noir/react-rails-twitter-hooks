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
  .case(usersAPIActions.updateUsers, (state: UsersAPIState) => ({
    ...state,
    fetching: true,
  }))
  .case(usersAPIActions.updateUsersDone, (state: UsersAPIState) => ({
    ...state,
    fetching: false,
  }))
