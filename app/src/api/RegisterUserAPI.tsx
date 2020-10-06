import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { registerUser } from 'clients/usersAPI';
import { UserState, initialUser } from 'reducers/entitiesReducer';
import { usersAPIActions } from 'actions/usersAPIActions';
import { usersActions } from 'actions/usersActions';
import { push } from 'connected-react-router';

export const RegisterUserAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const registeredUser = useSelector<RootState, UserState>(
    state => state.usersAPI.registeredUser
  );

  React.useEffect(() => {
    if(!registeredUser.name || !registeredUser.password) return;

    let user: UserState = initialUser;
    registerUser(registeredUser)
      .then(res => res.json())
      .then(res => {
        if(!res.user) throw new Error('Faild');
        user = res.user;
      })
      .then(() => {
        dispatch(usersAPIActions.fetchUsers());
      })
      .then(() => {
        dispatch(usersActions.updateLogin(user.id));
      })
      .then(() => {
        dispatch(usersAPIActions.registerUserDone());
      })
      .then(() => {
        dispatch(push('/'));
      })
      .catch(() => {
        dispatch(usersAPIActions.registerUserDone());
      })
  }, [registeredUser]);

  return null;
};
