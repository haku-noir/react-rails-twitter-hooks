import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersActions } from 'actions/usersActions';

export type UsersState = {
  list: number[]
};

const initialState: UsersState = {
  list: []
};

export const usersReducer = reducerWithInitialState(initialState)
  .case(usersActions.updateList, (state: UsersState, payload: number[]): UsersState => ({
    ...state,
    list: payload,
  }))
