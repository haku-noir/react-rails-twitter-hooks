import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';
import { TweetState } from './entitiesReducer';

export type TweetsAPIState = {
  updating: boolean,
  newContent: string,
  updatedTweet: TweetState,
};

const initialState: TweetsAPIState = {
  updating: true,
  newContent: '',
  updatedTweet: {id: 0, content: ''},
};

export const tweetsAPIReducer = reducerWithInitialState(initialState)
  .case(tweetsAPIActions.updateTweets, (state: TweetsAPIState) => ({
    ...state,
    updating: true,
  }))
  .case(tweetsAPIActions.updateTweetsDone, (state: TweetsAPIState) => ({
    ...state,
    updating: false,
  }))
  .case(tweetsAPIActions.sendTweet, (state: TweetsAPIState, payload: string) => ({
    ...state,
    newContent: payload
  }))
  .case(tweetsAPIActions.sendTweetDone, (state: TweetsAPIState) => ({
    ...state,
    newContent: ''
  })).case(tweetsAPIActions.updateTweet, (state: TweetsAPIState, payload: TweetState) => ({
    ...state,
    updatedTweet: payload,
  }))
  .case(tweetsAPIActions.updateTweetDone, (state: TweetsAPIState) => ({
    ...state,
    updatedTweet: {id: 0, content: ''},
  }))
