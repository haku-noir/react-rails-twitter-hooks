import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';
import { TweetState } from './entitiesReducer';

export type TweetsAPIState = {
  fetching: boolean,
  newContent: string,
  updatedTweet: TweetState,
  deletedTweetId: number,
};

const initialState: TweetsAPIState = {
  fetching: true,
  newContent: '',
  updatedTweet: {id: 0, content: ''},
  deletedTweetId: 0,
};

export const tweetsAPIReducer = reducerWithInitialState(initialState)
  .case(tweetsAPIActions.fetchTweets, (state: TweetsAPIState) => ({
    ...state,
    fetching: true,
  }))
  .case(tweetsAPIActions.fetchTweetsDone, (state: TweetsAPIState) => ({
    ...state,
    fetching: false,
  }))
  .case(tweetsAPIActions.sendTweet, (state: TweetsAPIState, payload: string) => ({
    ...state,
    newContent: payload
  }))
  .case(tweetsAPIActions.sendTweetDone, (state: TweetsAPIState) => ({
    ...state,
    newContent: ''
  }))
  .case(tweetsAPIActions.updateTweet, (state: TweetsAPIState, payload: TweetState) => ({
    ...state,
    updatedTweet: payload,
  }))
  .case(tweetsAPIActions.updateTweetDone, (state: TweetsAPIState) => ({
    ...state,
    updatedTweet: {id: 0, content: ''},
  }))
  .case(tweetsAPIActions.deleteTweet, (state: TweetsAPIState, payload: number) => ({
    ...state,
    deletedTweetId: payload
  }))
  .case(tweetsAPIActions.deleteTweetDone, (state: TweetsAPIState) => ({
    ...state,
    deletedTweetId: 0
  }))
