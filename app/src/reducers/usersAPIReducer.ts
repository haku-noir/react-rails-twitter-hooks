import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersAPIActions } from 'actions/usersAPIActions';

export type UsersAPIState = {
  fetching: boolean,
};

const initialState: UsersAPIState = {
  fetching: true,
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
