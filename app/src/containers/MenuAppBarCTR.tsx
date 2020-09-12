import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { MenuAppBar as MenuAppBarComp } from 'components/MenuAppBar';
import { RootState } from 'store';
import { push } from 'connected-react-router';
import { usersAPIActions } from 'actions/usersAPIActions';

type IProps = {};

export const MenuAppBar: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {
    clickLogin: () => dispatch(push('/login')),
    clickLogout: () => {
      dispatch(usersAPIActions.logoutUser());
      dispatch(push('/login'));
    }
  }

  return <MenuAppBarComp {..._props}/>;
};
