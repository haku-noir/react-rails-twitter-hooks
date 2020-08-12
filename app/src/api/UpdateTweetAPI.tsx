import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { TweetState } from 'reducers/entitiesReducer';
import { updateTweet } from 'clients/tweetsAPI';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

export const UpdateTweetAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const updatedTweet = useSelector<RootState, TweetState>(
    state => state.tweetsAPI.updatedTweet
  );

  React.useEffect(() => {
    if(updatedTweet.id === 0) return;

    updateTweet(updatedTweet)
      .then(() => {
        dispatch(tweetsAPIActions.fetchTweets());
      })
      .then(() => {
        dispatch(tweetsAPIActions.updateTweetDone());
      })
      .catch(() => {
        dispatch(tweetsAPIActions.updateTweetDone());
      });
  }, [updatedTweet]);

  return null;
};
