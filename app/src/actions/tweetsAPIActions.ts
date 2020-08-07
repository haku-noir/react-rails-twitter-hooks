import actionCreatorFactory from 'typescript-fsa';
import { TweetState } from 'reducers/entitiesReducer';

const actionCreator = actionCreatorFactory();

export const tweetsAPIActions = {
  updateTweets: actionCreator<void>('API_UPDATE_TWEETS'),
  updateTweetsDone: actionCreator<void>('API_UPDATE_TWEETS_DONE'),
  sendTweet: actionCreator<string>('API_SEND_TWEET'),
  sendTweetDone: actionCreator<void>('API_SEND_TWEET_DONE'),
  updateTweet: actionCreator<TweetState>('API_UPDATE_TWEET'),
  updateTweetDone: actionCreator<void>('API_UPDATE_TWEET_DONE'),
  deleteTweet: actionCreator<number>('API_DELETE_TWEET'),
  deleteTweetDone: actionCreator<void>('API_DELETE_TWEET_DONE'),
};
