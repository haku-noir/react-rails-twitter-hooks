import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { MenuAppBar as MenuAppBarComp } from 'components/MenuAppBar';
import { RootState } from 'store';
import { push } from 'connected-react-router';
import { usersAPIActions } from 'actions/usersAPIActions';
import { EntitiesState, findUserById } from 'reducers/entitiesReducer';

type IProps = {};

export const MenuAppBar: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const users = useSelector<RootState, EntitiesState["users"]>(
    state => state.entities.users
  );
  const login = useSelector<RootState, number>(
    state => state.users.login
  );
  const loggedinUser = findUserById(users, login);

  const _props = {
    loggedinUser,
    clickHome: () => dispatch(push('/')),
    clickUsers: () => dispatch(push('/users')),
    clickLogin: () => dispatch(push('/login')),
    clickLogout: () => {
      dispatch(usersAPIActions.logoutUser());
      dispatch(push('/login'));
    }
  }

  return <MenuAppBarComp {..._props}/>;
};
