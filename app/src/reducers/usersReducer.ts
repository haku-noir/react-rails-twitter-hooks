import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersActions } from 'actions/usersActions';

export type UsersState = {
  sample: any
};

const initialState: UsersState = {
  sample: Object,
};

export const usersReducer = reducerWithInitialState(initialState)
  .case(usersActions.sampleAction, (state: UsersState, payload: any): UsersState => ({
    ...state,
    sample: payload,
  }));
