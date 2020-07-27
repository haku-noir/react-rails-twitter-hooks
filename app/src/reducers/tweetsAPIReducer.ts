import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

export type TweetsAPIState = {
  update: boolean,
  newContent: string,
};

const initialState: TweetsAPIState = {
  update: true,
  newContent: '',
};

export const tweetsAPIReducer = reducerWithInitialState(initialState)
  .case(tweetsAPIActions.updateTweets, (state: TweetsAPIState): TweetsAPIState => ({
    ...state,
    update: true,
  }))
  .case(tweetsAPIActions.updateTweetsDone, (state: TweetsAPIState): TweetsAPIState => ({
    ...state,
    update: false,
  }))
  .case(tweetsAPIActions.sendTweet, (state: TweetsAPIState, payload: string): TweetsAPIState => ({
    ...state,
    newContent: payload
  }));
