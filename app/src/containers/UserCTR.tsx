import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useDispatch } from 'react-redux';
import { User as UserComp } from 'components/User';
import { findUserById } from 'reducers/entitiesReducer';
import { push } from 'connected-react-router';
import { usersAPIActions } from 'actions/usersAPIActions';

type IProps = {
  userId: number
};

export const User: React.FC<IProps> = (props: IProps) => {
  const { userId } = props;

  const dispatch = useDispatch<Dispatch<Action>>();

  const user = findUserById(userId);

  const showDetails = () => {
    dispatch(usersAPIActions.fetchUserTweets(user.id));
  };

  const _props = {
    user,
    click: showDetails
  }

  return <UserComp {..._props}/>;
};
