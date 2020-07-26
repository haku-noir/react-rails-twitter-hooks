import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetList as TweetListComp } from 'components/TweetList';
import { RootState } from 'store';
import { TweetsState } from 'reducers/tweetsReducer';

type IProps = {};

export const TweetList: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const tweetIds = useSelector<RootState, TweetsState["home"]>(
    state => state.tweets.home
  );

  const _props = { tweetIds }

  return <TweetListComp {..._props}/>;
};
