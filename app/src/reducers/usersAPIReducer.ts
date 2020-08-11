import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersAPIActions } from 'actions/usersAPIActions';

export type UsersAPIState = {
  updating: boolean,
};

const initialState: UsersAPIState = {
  updating: true,
};

export const usersAPIReducer = reducerWithInitialState(initialState)
  .case(usersAPIActions.updateUsers, (state: UsersAPIState) => ({
    ...state,
    updating: true,
  }))
  .case(usersAPIActions.updateUsersDone, (state: UsersAPIState) => ({
    ...state,
    updating: false,
  }))
