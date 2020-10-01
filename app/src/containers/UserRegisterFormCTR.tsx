import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserRegisterForm as UserRegisterFormComp } from 'components/UserRegisterForm';
import { RootState } from 'store';

type IProps = {};

export const UserRegisterForm: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {}

  return <UserRegisterFormComp {..._props}/>;
};