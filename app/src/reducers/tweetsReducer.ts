import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';

export type TweetsState = {
  home: number[],
  details: {
    id: number,
    updating: boolean
  }
};

const initialState: TweetsState = {
  home: [],
  details: {
    id: 0,
    updating: false
  }
};

export const tweetsReducer = reducerWithInitialState(initialState)
  .case(tweetsActions.updateHome, (state: TweetsState, payload: number[]): TweetsState => ({
    ...state,
    home: payload,
  }));
