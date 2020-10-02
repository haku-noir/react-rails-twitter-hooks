import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserRegisterForm as UserRegisterFormComp } from 'components/UserRegisterForm';
import { RootState } from 'store';
import { usersAPIActions } from 'actions/usersAPIActions';
import { push } from 'connected-react-router';

type IProps = {};

export const UserRegisterForm: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {
    register: (name: string, password: string) => {
      dispatch(usersAPIActions.registerUser({id: 0, name, password}));
    },
    moveLogin: () => {
      dispatch(push('/login'));
    }
  }

  return <UserRegisterFormComp {..._props}/>;
};
