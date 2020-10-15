import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { fetchUserTweets } from 'clients/usersAPI';
import { usersActions } from 'actions/usersActions';
import { usersAPIActions } from 'actions/usersAPIActions';
import { push } from 'connected-react-router';

export const FetchUserTweetsAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const userTweetIds = useSelector<RootState, number>(
    state => state.usersAPI.userTweetIds
  );

  React.useEffect(() => {
    if(!userTweetIds) return;

    fetchUserTweets(userTweetIds)
      .then(res => res.json())
      .then(res => {
        if(!res.tweet_ids) return;
        dispatch(usersActions.updateDetails({
          id: userTweetIds,
          tweetIds: res.tweet_ids
        }));
      })
      .then(() => {
        dispatch(push('/users/details'));
      })
      .then(() => {
        dispatch(usersAPIActions.fetchUserTweetsDone());
      })
      .catch(() => {
        dispatch(usersAPIActions.fetchUserTweetsDone());
      });
  }, [userTweetIds]);

  return null;
};
