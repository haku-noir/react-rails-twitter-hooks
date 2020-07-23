import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';

export type TweetsState = {
  home: number[]
};

const initialState: TweetsState = {
  home: [],
};

export const tweetsReducer = reducerWithInitialState(initialState)
  .case(tweetsActions.updateHome, (state: TweetsState, payload: number[]): TweetsState => ({
    ...state,
    home: payload,
  }));
