import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { entitiesActions } from 'actions/entitiesActions';

export type EntitiesState = {
  sample: any
};

const initialState: EntitiesState = {
  sample: Object,
};

export const entitiesReducer = reducerWithInitialState(initialState)
  .case(entitiesActions.sampleAction, (state: EntitiesState, payload: any): EntitiesState => ({
    ...state,
    sample: payload,
  }));
