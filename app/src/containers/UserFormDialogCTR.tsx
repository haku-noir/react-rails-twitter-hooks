import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserFormDialog as UserFormDialogComp } from 'components/UserFormDialog';
import { RootState } from 'store';
import { findUserById, UserState } from 'reducers/entitiesReducer';
import { usersAPIActions } from 'actions/usersAPIActions';

type IProps = {
  open: boolean,
  setOpen: (isOpen: boolean) => void,
};

export const UserFormDialog: React.FC<IProps> = (props: IProps) => {
  const { open, setOpen } = props;

  const dispatch = useDispatch<Dispatch<Action>>();

  const userId = useSelector<RootState, number>(
    state => state.users.details.id,
  );
  const user = findUserById(userId);

  const updateUser = (updatedName: string, updatedImage: File) => {
    const updatedUser: UserState & {image: File} = {
      ...user,
      name: updatedName,
      image: updatedImage
    };

    dispatch(usersAPIActions.updateUser(updatedUser));
  };

  const _props = {
    user,
    open,
    handleClose: () => setOpen(false),
    handleClick: updateUser
  }

  return <UserFormDialogComp {..._props}/>;
};
