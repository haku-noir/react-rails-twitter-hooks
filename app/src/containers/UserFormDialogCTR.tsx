import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserFormDialog as UserFormDialogComp } from 'components/UserFormDialog';
import { RootState } from 'store';

type IProps = {};

export const UserFormDialog: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {}

  return <UserFormDialogComp {..._props}/>;
};
