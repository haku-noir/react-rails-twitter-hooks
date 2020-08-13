import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersActions } from 'actions/usersActions';

export type UsersState = {
  index: number[]
};

const initialState: UsersState = {
  index: []
};

export const usersReducer = reducerWithInitialState(initialState)
  .case(usersActions.updateIndex, (state: UsersState, payload: number[]): UsersState => ({
    ...state,
    index: payload,
  }))
