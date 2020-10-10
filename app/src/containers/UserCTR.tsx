import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useDispatch } from 'react-redux';
import { User as UserComp } from 'components/User';
import { findUserById } from 'reducers/entitiesReducer';
import { usersActions } from 'actions/usersActions';
import { push } from 'connected-react-router';

type IProps = {
  userId: number
};

export const User: React.FC<IProps> = (props: IProps) => {
  const { userId } = props;

  const dispatch = useDispatch<Dispatch<Action>>();

  const user = findUserById(userId);

  const showDetails = () => {
    dispatch(usersActions.updateDetails(userId));
    dispatch(push('/users/details'));
  };

  const _props = {
    user,
    click: showDetails
  }

  return <UserComp {..._props}/>;
};
