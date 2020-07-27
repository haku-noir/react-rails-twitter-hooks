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
  .case(tweetsActions.updateHome, (state: TweetsState, payload: number[]) => ({
    ...state,
    home: payload,
  }))
  .case(tweetsActions.updateDetails, (state: TweetsState, payload: number) => ({
    ...state,
    details: {
      id: payload,
      updating: true
    },
  }))
  .case(tweetsActions.updateDetailsDone, (state: TweetsState) => ({
    ...state,
    details: {
      id: 0,
      updating: false
    }
  }))
