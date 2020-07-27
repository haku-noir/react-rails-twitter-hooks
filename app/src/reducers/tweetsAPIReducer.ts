import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

export type TweetsAPIState = {
  updating: boolean,
  newContent: string,
};

const initialState: TweetsAPIState = {
  updating: true,
  newContent: '',
};

export const tweetsAPIReducer = reducerWithInitialState(initialState)
  .case(tweetsAPIActions.updateTweets, (state: TweetsAPIState): TweetsAPIState => ({
    ...state,
    updating: true,
  }))
  .case(tweetsAPIActions.updateTweetsDone, (state: TweetsAPIState): TweetsAPIState => ({
    ...state,
    updating: false,
  }))
  .case(tweetsAPIActions.sendTweet, (state: TweetsAPIState, payload: string): TweetsAPIState => ({
    ...state,
    newContent: payload
  }));
