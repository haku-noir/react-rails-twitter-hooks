import * as React from 'react';
import { Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetList as TweetListComp } from 'components/TweetList';
import { RootState } from 'store';

type IProps = {};

export const TweetList: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Action>();

  const state = useSelector<RootState, RootState>(state => state);

  const _props = {}

  return <TweetListComp {..._props}/>;
};
