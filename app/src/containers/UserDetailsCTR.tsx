import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserDetails as UserDetailsComp } from 'components/UserDetails';
import { RootState } from 'store';
import { findUserById } from 'reducers/entitiesReducer';

type IProps = {};

export const UserDetails: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const userId = useSelector<RootState, number>(
    state => state.users.details.id
  );
  const user = findUserById(userId);

  const tweetIds = useSelector<RootState, number[]>(
    state => state.users.details.tweetIds
  );

  const _props = {
    user,
    tweetIds
  }

  return <UserDetailsComp {..._props}/>;
};
