import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetDeleteButton as TweetDeleteButtonComp } from 'components/TweetDeleteButton';
import { RootState } from 'store';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

type IProps = {};

export const TweetDeleteButton: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const tweetId = useSelector<RootState, number>(
    state => state.tweets.details
  );

  const _props = {
    destroy: () => {
      dispatch(tweetsAPIActions.deleteTweet(tweetId));
    }
  }

  return <TweetDeleteButtonComp {..._props}/>;
};
