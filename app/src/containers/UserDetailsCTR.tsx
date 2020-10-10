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
    state => state.users.details
  );
  const user = findUserById(userId);

  const _props = {
    user
  }

  return <UserDetailsComp {..._props}/>;
};
