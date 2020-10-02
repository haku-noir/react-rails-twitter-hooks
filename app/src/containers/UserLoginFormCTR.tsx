import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserLoginForm as UserLoginFormComp } from 'components/UserLoginForm';
import { RootState } from 'store';
import { usersAPIActions } from 'actions/usersAPIActions';
import { push } from 'connected-react-router';

type IProps = {};

export const UserLoginForm: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {
    login: (name: string, password: string) => {
      dispatch(usersAPIActions.loginUser({id: 0, name, password}));
    },
    moveRegister: () => {
      dispatch(push('/register'));
    }
  }

  return <UserLoginFormComp {..._props}/>;
};
