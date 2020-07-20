import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const tweetsAPIActions = {
  updateTweets: actionCreator<void>('API_UPDATE_TWEETS'),
  updateTweetsDone: actionCreator<void>('API_UPDATE_TWEETS_DONE'),
};
