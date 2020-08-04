import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetSendButton as TweetSendButtonComp } from 'components/TweetSendButton';
import { RootState } from 'store';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

type IProps = {};

export const TweetSendButton: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {
    send: (newContent: string) => {
      dispatch(tweetsAPIActions.sendTweet(newContent));
    }
  }

  return <TweetSendButtonComp {..._props}/>;
};
