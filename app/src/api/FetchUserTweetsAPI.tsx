import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { fetchUserTweets } from 'clients/usersAPI';
import { usersActions } from 'actions/usersActions';
import { usersAPIActions } from 'actions/usersAPIActions';

export const FetchUserTweetsAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const userTweets = useSelector<RootState, number>(
    state => state.usersAPI.userTweets
  );

  React.useEffect(() => {
    if(!userTweets) return;

    fetchUserTweets(userTweets)
      .then(res => res.json())
      .then(res => {
        if(!res.tweet_ids) return;
        dispatch(usersActions.updateDetails({
          id: userTweets,
          tweetIds: res.tweet_ids
        }));
      })
      .then(() => {
        dispatch(usersAPIActions.fetchUserTweetsDone());
      })
      .catch(() => {
        dispatch(usersAPIActions.fetchUserTweetsDone());
      });
  }, [userTweets]);

  return null;
};
