import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersAPIActions } from 'actions/usersAPIActions';

export type UsersAPIState = {
  sample: any
};

const initialState: UsersAPIState = {
  sample: Object,
};

export const usersAPIReducer = reducerWithInitialState(initialState)
  .case(usersAPIActions.sampleAction, (state: UsersAPIState, payload: any): UsersAPIState => ({
    ...state,
    sample: payload,
  }));
