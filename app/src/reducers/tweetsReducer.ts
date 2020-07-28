import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';

export type TweetsState = {
  home: number[],
  details: number
};

const initialState: TweetsState = {
  home: [],
  details: 0
};

export const tweetsReducer = reducerWithInitialState(initialState)
  .case(tweetsActions.updateHome, (state: TweetsState, payload: number[]) => ({
    ...state,
    home: payload,
  }))
  .case(tweetsActions.updateDetails, (state: TweetsState, payload: number) => ({
    ...state,
    details: payload
  }))
