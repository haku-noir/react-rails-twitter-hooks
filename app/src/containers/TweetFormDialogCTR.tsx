import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetFormDialog as TweetFormDialogComp } from 'components/TweetFormDialog';
import { RootState } from 'store';
import { tweetsAPIActions } from 'actions/tweetsAPIActions';

type IProps = {
  open: boolean,
  setOpen: (value: React.SetStateAction<boolean>) => void,
};

export const TweetFormDialog: React.FC<IProps> = (props: IProps) => {
  const {open, setOpen} = props;

  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {
    open,
    setOpen,
    send: (newContent: string) => {
      dispatch(tweetsAPIActions.sendTweet(newContent));
    },
  }

  return <TweetFormDialogComp {..._props}/>;
};
