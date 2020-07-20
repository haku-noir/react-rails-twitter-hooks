import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

export type TweetsAPIState = {
  sample: any
};

const initialState: TweetsAPIState = {
  sample: Object,
};

export const tweetsAPIReducer = reducerWithInitialState(initialState)
  .case(tweetsAPIActions.sampleAction, (state: TweetsAPIState, payload: any): TweetsAPIState => ({
    ...state,
    sample: payload,
  }));
