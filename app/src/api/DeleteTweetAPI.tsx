import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { deleteTweet } from 'clients/tweetsAPI';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';
import { push } from 'connected-react-router';

export const DeleteTweetAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const deletedTweetId = useSelector<RootState, number>(
    state => state.tweetsAPI.deletedTweetId
  );

  React.useEffect(() => {
    if(deletedTweetId === 0) return;

    deleteTweet(deletedTweetId)
      .then(() => {
        dispatch(push('/'));
      })
      .then(() => {
        dispatch(tweetsAPIActions.deleteTweetDone());
      })
      .catch(() => {
        dispatch(tweetsAPIActions.deleteTweetDone());
      });
  }, [deletedTweetId]);

  return null;
};
