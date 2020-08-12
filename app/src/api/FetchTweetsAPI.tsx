import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { RootState } from 'store';
import { fetchTweets } from 'clients/tweetsAPI';
import { entitiesActions } from 'actions/entitiesActions';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

export const FetchTweetsAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const fetching = useSelector<RootState, boolean>(
    state => state.tweetsAPI.fetching
  );

  React.useEffect(() => {
    if(!fetching) return;

    fetchTweets()
      .then(res => res.json())
      .then(res => {
        if(!res.tweets) return;
        dispatch(entitiesActions.updateTweets(res.tweets));
      })
      .then(() => {
        dispatch(tweetsAPIActions.fetchTweetsDone());
      })
      .catch(() => {
        dispatch(tweetsAPIActions.fetchTweetsDone());
      });
  }, [fetching]);

  return null;
};
